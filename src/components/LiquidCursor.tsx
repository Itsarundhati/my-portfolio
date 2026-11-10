
import { useEffect, useRef } from "react";

export default function LiquidCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const blob = blobRef.current;
    const label = labelRef.current;

    if (!blob || !label) return;

    document.documentElement.classList.add("has-liquid-cursor");

    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let previousX = x;
    let previousY = y;

    let angle = 0;
    let stretch = 0;
    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      blob.classList.add("is-visible");

      const target = event.target as HTMLElement;
      const hovering = !!target.closest("[data-cursor='view']");

      blob.classList.toggle("is-hovering", hovering);
      label.classList.toggle("is-visible", hovering);
    };

    const handleLeave = () => {
      blob.classList.remove("is-visible", "is-hovering");
      label.classList.remove("is-visible");
    };

    const animate = () => {
      previousX = x;
      previousY = y;

      // Smooth and responsive cursor tracking
      x += (targetX - x) * 0.42;
      y += (targetY - y) * 0.42;

      const dx = x - previousX;
      const dy = y - previousY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Rotate naturally in the direction of movement
      if (speed > 0.1) {
        const targetAngle = Math.atan2(dy, dx);
        let difference = targetAngle - angle;

        while (difference > Math.PI) difference -= Math.PI * 2;
        while (difference < -Math.PI) difference += Math.PI * 2;

        angle += difference * 0.2;
      }

      // Elastic stretch and gentle recovery
      const targetStretch = Math.min(speed / 12, 1);
      stretch += (targetStretch - stretch) * 1.5;

      // Organic liquid wobble
      const time = performance.now() * 0.001;

      const wobbleX = Math.sin(time * 3) * 0.025;
      const wobbleY = Math.cos(time * 2.4) * 0.035;

      const scaleX = 1 + stretch + wobbleX;
      const scaleY = 1 - stretch * 0.65 + wobbleY;

      // Apply movement and elastic shape
      blob.style.transform = `
        translate3d(${x}px, ${y}px, 0)
        translate(-50%, -50%)
        rotate(${angle}rad)
        scale(${scaleX}, ${scaleY})
      `;

      // Continuously morph the blob silhouette
      const morph = Math.sin(time * 2.2) * 4;

      blob.style.borderRadius = `
        ${62 + morph}% ${38 - morph}%
        ${45 + morph * 0.6}% ${55 - morph * 0.6}% /
        ${45 - morph}% ${55 + morph}%
        ${45 - morph * 0.5}% ${55 + morph * 0.5}%
      `;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("has-liquid-cursor");
    };
  }, []);

  return (
    <div className="liquid-cursor-container" aria-hidden="true">
      <div className="liquid-blob" ref={blobRef}>
        <span className="liquid-cursor-label" ref={labelRef}>
          VIEW PROJECT ↗
        </span>
      </div>
    </div>
  );
}
