import React, { useEffect, useRef, useState } from "react";
import "./GallerySection.css";

// Import all images from the gallery folder
function importAll(r) {
  return r.keys().map(r);
}
const galleryImages = importAll(
  require.context("../../assets/images/gallery", false, /\.(png|jpe?g|svg)$/)
);

// Chevron path for "<" and ">" now: mid -> top (disappear) OR mid -> bottom (disappear)
const LEFT_CHEVRON_TOP = [
  { x: 0.2, y: 0.5 }, // mid (tip)
  { x: 0.4, y: 0.15 }, // top
];
const LEFT_CHEVRON_BOTTOM = [
  { x: 0.2, y: 0.5 }, // mid (tip)
  { x: 0.4, y: 0.85 }, // bottom
];
const RIGHT_CHEVRON_TOP = [
  { x: 0.8, y: 0.5 }, // mid (tip)
  { x: 0.6, y: 0.15 }, // top
];
const RIGHT_CHEVRON_BOTTOM = [
  { x: 0.8, y: 0.5 }, // mid (tip)
  { x: 0.6, y: 0.85 }, // bottom
];

const ANIMATION_DURATION = 5000; // ms for a full loop

// Helper to interpolate between two points
function lerp(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

// Get position and opacity for a photo along a chevron path (mid to top or mid to bottom)
function getChevronAnim(points, t) {
  // t: 0 (mid) -> 1 (top or bottom)
  let pos = lerp(points[0], points[1], t);
  // Remove fading: always fully opaque
  let opacity = 1;
  return { ...pos, opacity };
}

const GallerySection = () => {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.9 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animate progress from 0 to 1 in a loop only when in view
  useEffect(() => {
    if (!inView) {
      setProgress(0);
      return;
    }
    let start = Date.now();
    let frame;
    const animate = () => {
      const now = Date.now();
      const elapsed = (now - start) % ANIMATION_DURATION;
      setProgress(elapsed / ANIMATION_DURATION);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  // Split images between left and right chevrons, and alternate top/bottom
  const half = Math.ceil(galleryImages.length / 2);
  const leftImages = galleryImages.slice(0, half);
  const rightImages = galleryImages.slice(half);

  // Center points for left and right chevrons (center of each "<" and ">" shape, not the tip)
  const LEFT_CENTER = { x: 0.5, y: 0.5 };
  const RIGHT_CENTER = { x: 0.5, y: 0.5 };

  // For each image, alternate between top and bottom path
  const renderChevronImages = (
    images,
    chevronTop,
    chevronBottom,
    chevronIdx,
    center
  ) => {
    // Track which image is currently at the mid (t closest to 0)
    let maxZIndex = 100;
    let minT = 1;
    let midIdx = -1;
    let tArr = [];

    // First pass: find the image with t closest to 0 (the one at mid)
    images.forEach((img, idx) => {
      let t = inView ? (progress + idx / images.length) % 1 : 0;
      tArr[idx] = t;
      if (inView && t < minT) {
        minT = t;
        midIdx = idx;
      }
    });

    return images.map((img, idx) => {
      let t = tArr
        ? tArr[idx]
        : inView
        ? (progress + idx / images.length) % 1
        : 0;
      let x,
        y,
        opacity,
        zIndex,
        bunching = false;
      if (!inView) {
        x = center.x;
        y = center.y;
        opacity = 1;
        zIndex = maxZIndex;
        bunching = true;
      } else {
        const path = idx % 2 === 0 ? chevronTop : chevronBottom;
        const pos = getChevronAnim(path, t);
        x = pos.x;
        y = pos.y;
        opacity = pos.opacity;
        zIndex = idx === midIdx ? maxZIndex : 10 + idx;
        // Animate bunching in/out for t near 0 (arriving/leaving mid)
        if (t < 0.12) bunching = true;
      }
      const style = {
        left: `${x * 100}%`,
        top: `${y * 100}%`,
        transform: bunching
          ? "translate(-50%, -50%) scale(1.15)"
          : "translate(-50%, -50%)",
        zIndex,
        opacity,
        transition: inView
          ? "left 0.5s cubic-bezier(.4,1.6,.4,1), top 0.5s cubic-bezier(.4,1.6,.4,1), opacity 0.5s, z-index 0s, transform 0.5s cubic-bezier(.4,1.6,.4,1)"
          : "none",
        boxShadow: bunching ? "0 8px 32px 0 #4285F4" : "",
      };
      return (
        <div
          key={chevronIdx + "-" + idx}
          className={`gdg-gallery-img-rect${bunching ? " bunching" : ""}`}
          style={style}
        >
          <img src={img} alt={`Event ${idx + 1}`} loading="lazy" />
        </div>
      );
    });
  };

  return (
    <section className="gallery-section">
      <div className="gdg-gallery-logo-shape" ref={ref}>
        {renderChevronImages(
          leftImages,
          LEFT_CHEVRON_TOP,
          LEFT_CHEVRON_BOTTOM,
          "L",
          LEFT_CENTER
        )}
        {renderChevronImages(
          rightImages,
          RIGHT_CHEVRON_TOP,
          RIGHT_CHEVRON_BOTTOM,
          "R",
          RIGHT_CENTER
        )}
      </div>
      <p className="gallery-desc">
        At GDG AUIB, we aim to learn, teach and grow. Together, the place where
        creative minds come together to build something amazing
      </p>
    </section>
  );
};

export default GallerySection;
