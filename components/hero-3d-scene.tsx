"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Geometry Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Inner Core: Wireframe Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Inner solid core node
    const nucleusGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    rootGroup.add(nucleusMesh);

    // Outer Cage: Octahedron
    const cageGeo = new THREE.OctahedronGeometry(2.4, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x666666,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    rootGroup.add(cageMesh);

    // Orbital Gimbal Rings
    const createRing = (radius: number, tube: number, color: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      return new THREE.Mesh(ringGeo, ringMat);
    };

    const ring1 = createRing(2.8, 0.015, 0xaaaaaa);
    const ring2 = createRing(3.2, 0.012, 0x555555);
    const ring3 = createRing(3.6, 0.01, 0x333333);

    ring1.rotation.x = Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    ring3.rotation.z = Math.PI / 6;

    rootGroup.add(ring1);
    rootGroup.add(ring2);
    rootGroup.add(ring3);

    // Floating Quantum Particle Field
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2 + Math.random() * 2.5;

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);

      particleSpeeds.push((Math.random() - 0.5) * 0.008);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    // Interactive Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.5;
      targetY = y * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let frameCount = 0;
    let fpsTimer = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // FPS tracking
      frameCount++;
      if (time - fpsTimer > 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsTimer)));
        frameCount = 0;
        fpsTimer = time;
      }

      if (!prefersReducedMotion) {
        // Smooth mouse damping
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        rootGroup.rotation.y += 0.006 + currentX * 0.02;
        rootGroup.rotation.x = currentY * 0.5;

        // Inner core counter rotation
        coreMesh.rotation.x -= 0.008;
        coreMesh.rotation.y += 0.012;

        cageMesh.rotation.x += 0.004;
        cageMesh.rotation.z -= 0.006;

        ring1.rotation.z += 0.01;
        ring2.rotation.x += 0.008;
        ring3.rotation.y -= 0.006;

        particleSystem.rotation.y -= 0.002;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto rounded-2xl bg-[#080808]/90 border border-[#222222] overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

      {/* Top Telemetry HUD */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono text-[#777777] pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-subtle-pulse" />
          <span className="text-white font-semibold">QUANTUM CORE 3D</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#A0A0A0]">GL_ENGINE: ACTIVE</span>
          <span className="text-white font-bold">{fps} FPS</span>
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive Three.js 3D Engine — drag mouse to rotate"
      />

      {/* Bottom Status HUD */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[10px] font-mono text-[#666666] pointer-events-none pt-2 border-t border-[#1C1C1C]">
        <span>AX_ENGINE // WEBGL_RENDER</span>
        <span className="text-[#A0A0A0]">DRAG TO ROTATE 3D LATTICE</span>
      </div>
    </div>
  );
}
