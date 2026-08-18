---
name: gsap
description: >-
  Official GSAP skill for animating React applications.
  Use this skill whenever the user asks to animate elements, add scroll animations,
  or use GSAP/ScrollTrigger in the project.
when_to_use: "When the user asks to animate elements, use GSAP, or add scroll-based animations."
allowed-tools: Read, Write, Edit
effort: low
---

# GSAP Skill

> Create high-performance animations using GSAP and ScrollTrigger in React.

## Overview
This skill provides best practices for using GSAP within React (especially Vite + React). It ensures proper cleanup, hooks usage, and scroll-based animation patterns.

## When to Use
✅ Good for: Adding page transition animations, scroll reveals, parallax effects, and complex timelines.
❌ Not for: Simple CSS transitions (e.g., hover effects).

## Protocol

### 1. Setup GSAP in React
Always use the `@gsap/react` package's `useGSAP` hook for safe animations in React. This automatically handles cleanup.
If `@gsap/react` is not installed, install it: `npm install @gsap/react`

```jsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
```

### 2. Creating Animations
Use the `useGSAP` hook instead of `useEffect`.

```jsx
import { useRef } from 'react';

const MyComponent = () => {
  const container = useRef();

  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", { x: 360 });
  }, { scope: container }); // <-- scope for selector text (optional)

  return (
    <div ref={container}>
      <div className="box"></div>
    </div>
  );
};
```

### 3. ScrollTrigger Guidelines
When adding ScrollTrigger, ensure elements are ready. Use markers during debugging.

```jsx
useGSAP(() => {
  gsap.from(".element", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".element",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    }
  });
});
```

## Best Practices
- Always clean up animations. `useGSAP` does this automatically.
- Use `ref` for target elements rather than document queries when possible.
- If the user asks for GSAP animations, ensure `gsap` is imported correctly.
