---
name: demo-effect
description: Use when a page needs a line of text that sharpens in word by word from a soft blur, such as "make this headline blur in", "reveal this sentence word by word", or "add a soft text reveal on scroll". Not for typing or looping text effects.
metadata:
  summary: Demo craft effect
---

# Blur reveal

Demo: replace this effect with your own.

## What makes the effect

Each word starts blurred and transparent. When the line first scrolls into view, the words sharpen one after another, each a little later than the one before it. Once the line has played, it stays sharp. It never runs while off screen.

## FIXED

- Split the text on whitespace and render each word as its own inline-block.
- Start each word at `filter: blur(BLUR px)` and `opacity: 0`.
- Animate both to clear with CSS transitions, using `cubic-bezier(0.23, 1, 0.32, 1)`.
- Delay word `i` by `i * STAGGER` ms.
- Start only when the element is visible, using an IntersectionObserver, and disconnect it after the first reveal and on unmount.
- Under `prefers-reduced-motion: reduce`, render the final state with no transition.

## VARIABLE

| Name | Default | What it changes |
|-|-|-|
| words | the `text` prop | The line to reveal. |
| STAGGER | 60 | Milliseconds between one word and the next. |
| BLUR | 8 | Starting blur in pixels. |
| DURATION | 500 | Milliseconds each word takes to sharpen. |

## Workflow

1. Copy `assets/template/blur-reveal.tsx` into the project.
2. Change only the VARIABLE values, as props or in the defaults.
3. Run `node scripts/check.mjs` from this skill's folder and fix any line it prints as `fail`.
