---
name: demo-skill
description: Use when checking a page's spacing against a 4px scale, such as "check the spacing on this page", "are these gaps on the scale", or "is this padding 4px based". Not for colour or type checks.
metadata:
  summary: Demo skill
---

# Demo skill

Demo: replace this skill with your own.

Checks that every margin, padding and gap on a page is a multiple of 4px.

## Steps

1. List every margin, padding and gap value in the page styles.
2. Mark each value that is not a multiple of 4px.
3. Compare the marked values with the scale: 4, 8, 12, 16, 20, 24, 28 and 32px.
4. Report each off-scale value with its file and line, and the nearest scale value.

For the full checklist, see `references/checklist.md`.
