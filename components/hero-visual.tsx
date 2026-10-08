"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fps, setFps] = useState(60);
  const [throughput, setThroughput] = useState("18.4K req/s");

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

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.5, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. 3D Architectural Ground Grid
    const gridHelper = new THREE.GridHelper(16, 24, 0x333333, 0x111111);
    gridHelper.position.y = -1.8;
    mainGroup.add(gridHelper);

    // 3. Stage 1: Ingest Gateway (Left)
    const ingestGroup = new THREE.Group();
    ingestGroup.position.set(-3.6, 0, 0);
    mainGroup.add(ingestGroup);

    const ingestBox = new THREE.BoxGeometry(0.8, 1.6, 0.8);
    const ingestWire = new THREE.WireframeGeometry(ingestBox);
    const ingestLine = new THREE.LineSegments(
      ingestWire,
      new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.8 })
    );
    ingestGroup.add(ingestLine);

    const ingestCore = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.8, 0.4),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
    );
    ingestGroup.add(ingestCore);

    // 4. Stage 2: Central Reasoning Core (Center)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, 0);
    mainGroup.add(coreGroup);

    const coreIcosa = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 1),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      })
    );
    coreGroup.add(coreIcosa);

    const coreOcta = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.7, 0),
      new THREE.MeshBasicMaterial({
        color: 0x555555,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      })
    );
    coreGroup.add(coreOcta);

    const coreNucleus = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    coreGroup.add(coreNucleus);

    // 5. Stage 3: Synthesis & Dispatch Node (Right)
    const dispatchGroup = new THREE.Group();
    dispatchGroup.position.set(3.6, 0, 0);
    mainGroup.add(dispatchGroup);

    const dispatchBox = new THREE.BoxGeometry(0.8, 1.6, 0.8);
    const dispatchWire = new THREE.WireframeGeometry(dispatchBox);
    const dispatchLine = new THREE.LineSegments(
      dispatchWire,
      new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.8 })
    );
    dispatchGroup.add(dispatchLine);

    const dispatchCore = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.8, 0.4),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
    );
    dispatchGroup.add(dispatchCore);

    // 6. 3D Splines Connecting Stages (Ingest -> Core -> Dispatch)
    const curve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.6, 0, 0),
      new THREE.Vector3(-2.2, 0.6, 0.4),
      new THREE.Vector3(-1.0, 0.2, -0.2),
      new THREE.Vector3(0, 0, 0),
    ]);

    const curve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1.2, -0.4, 0.3),
      new THREE.Vector3(2.4, 0.5, -0.2),
      new THREE.Vector3(3.6, 0, 0),
    ]);

    const curveMat = new THREE.LineBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.6,
    });

    const splinePoints1 = curve1.getPoints(50);
    const splinePoints2 = curve2.getPoints(50);

    const line1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(splinePoints1),
      curveMat
    );
    const line2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(splinePoints2),
      curveMat
    );

    mainGroup.add(line1);
    mainGroup.add(line2);

    // 7. Data Packets Flowing Along Curves
    const packetCount = 48;
    const packetGroup = new THREE.Group();
    mainGroup.add(packetGroup);

    const packetMeshGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });

    const packets: { mesh: THREE.Mesh; curveIndex: number; progress: number; speed: number }[] = [];

    for (let i = 0; i < packetCount; i++) {
      const mesh = new THREE.Mesh(packetMeshGeo, packetMat);
      const isCurve1 = i % 2 === 0;
      const progress = Math.random();
      const speed = 0.003 + Math.random() * 0.004;

      packetGroup.add(mesh);
      packets.push({ mesh, curveIndex: isCurve1 ? 1 : 2, progress, speed });
    }

    // 8. Background Particle Field
    const bgParticleCount = 200;
    const bgPositions = new Float32Array(bgParticleCount * 3);
    for (let i = 0; i < bgParticleCount * 3; i += 3) {
      bgPositions[i] = (Math.random() - 0.5) * 14;
      bgPositions[i + 1] = (Math.random() - 0.5) * 6;
      bgPositions[i + 2] = (Math.random() - 0.5) * 8;
    }

    const bgParticleGeo = new THREE.BufferGeometry();
    bgParticleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(bgPositions, 3)
    );
    const bgParticleMat = new THREE.PointsMaterial({
      color: 0x555555,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    });
    const bgParticles = new THREE.Points(bgParticleGeo, bgParticleMat);
    mainGroup.add(bgParticles);

    // Interactive mouse damping
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.35;
      targetRotX = -y * 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Dynamic throughput variation interval
    const statInterval = setInterval(() => {
      const val = (17 + Math.random() * 3).toFixed(1);
      setThroughput(`${val}K req/s`);
    }, 2500);

    // Animation Loop
    let animationFrameId: number;
    let frameCount = 0;
    let fpsTimer = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // FPS Calculation
      frameCount++;
      if (time - fpsTimer > 1000) {
        setFps(Math.round((frameCount * 1000) / (time - fpsTimer)));
        frameCount = 0;
        fpsTimer = time;
      }

      if (!prefersReducedMotion) {
        // Damping
        currentRotY += (targetRotY - currentRotY) * 0.05;
        currentRotX += (targetRotX - currentRotX) * 0.05;

        mainGroup.rotation.y = currentRotY + Math.sin(time * 0.0005) * 0.08;
        mainGroup.rotation.x = currentRotX + 0.1;

        // Core rotations
        coreIcosa.rotation.x += 0.01;
        coreIcosa.rotation.y += 0.015;
        coreOcta.rotation.y -= 0.008;

        ingestLine.rotation.y += 0.006;
        dispatchLine.rotation.y -= 0.006;

        // Update flowing packets
        for (const p of packets) {
          p.progress += p.speed;
          if (p.progress > 1) {
            p.progress = 0;
            p.curveIndex = p.curveIndex === 1 ? 2 : 1;
          }

          const targetCurve = p.curveIndex === 1 ? curve1 : curve2;
          const pos = targetCurve.getPoint(p.progress);
          p.mesh.position.copy(pos);
        }
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(statInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
      ingestBox.dispose();
      dispatchBox.dispose();
      packetMeshGeo.dispose();
      packetMat.dispose();
      coreIcosa.geometry.dispose();
      coreOcta.geometry.dispose();
      coreNucleus.geometry.dispose();
      bgParticleGeo.dispose();
      bgParticleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-w-5xl mx-auto rounded-xl border border-[#222222] bg-[#0A0A0A]/95 p-4 sm:p-6 overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

      {/* Terminal / System Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#1E1E1E] text-xs font-mono text-[#666666]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
          </div>
          <span className="text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-subtle-pulse" />
            <span>system://algorax.core.engine</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <span className="text-[#A0A0A0]">PIPELINE: STREAMING</span>
          </span>
          <span className="text-white font-bold">{fps} FPS</span>
          <span className="text-[#A0A0A0] font-mono">v2.4.0</span>
        </div>
      </div>

      {/* Three.js 3D Interactive Canvas */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-[calc(100%-48px)] cursor-grab active:cursor-grabbing"
        title="Interactive Three.js 3D Engine Flow — drag mouse to explore spatial architecture"
      />

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 pt-3 border-t border-[#1E1E1E] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#666666] gap-2 pointer-events-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#A0A0A0]">
            <span className="inline-block w-1.5 h-1.5 bg-white" />
            <span>FLOW: INGEST &rarr; NEURAL CORE &rarr; DISPATCH</span>
          </span>
          <span className="hidden md:inline-block">PROTOCOL: THREE.JS / WEBGL</span>
        </div>
        <div className="flex items-center gap-4 text-[#A0A0A0]">
          <span>THROUGHPUT: <strong className="text-white">{throughput}</strong></span>
          <span className="text-white font-medium">LATENCY: 1.2ms</span>
        </div>
      </div>
    </div>
  );
}
