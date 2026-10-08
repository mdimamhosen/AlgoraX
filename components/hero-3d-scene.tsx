"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.04);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Geometry Group placed slightly to the right/center
    const rootGroup = new THREE.Group();
    rootGroup.position.set(2.2, 0.2, 0);
    scene.add(rootGroup);

    // Inner Core: Wireframe Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Outer Cage: Octahedron
    const cageGeo = new THREE.OctahedronGeometry(3.0, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x555555,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
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
        opacity: 0.4,
      });
      return new THREE.Mesh(ringGeo, ringMat);
    };

    const ring1 = createRing(3.4, 0.015, 0x888888);
    const ring2 = createRing(4.0, 0.012, 0x444444);
    const ring3 = createRing(4.6, 0.01, 0x2a2a2a);

    ring1.rotation.x = Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    ring3.rotation.z = Math.PI / 6;

    rootGroup.add(ring1);
    rootGroup.add(ring2);
    rootGroup.add(ring3);

    // Floating Quantum Particle Field across the entire Hero width
    const particleCount = 600;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.3) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Interactive Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 0.4;
      targetY = y * 0.3;
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

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        rootGroup.rotation.y += 0.005 + currentX * 0.015;
        rootGroup.rotation.x = currentY * 0.3;

        coreMesh.rotation.x -= 0.006;
        coreMesh.rotation.y += 0.009;

        cageMesh.rotation.x += 0.003;
        cageMesh.rotation.z -= 0.004;

        ring1.rotation.z += 0.007;
        ring2.rotation.x += 0.005;
        ring3.rotation.y -= 0.004;

        particleSystem.rotation.y -= 0.001;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-75"
      aria-hidden="true"
    />
  );
}
