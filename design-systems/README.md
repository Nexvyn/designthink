# Design systems

A design system folder holds what an agent needs to build a screen in one consistent style: a `README.md` for people, a `SKILL.md` with the rules the agent must follow, `tokens.css` with the values, and `ui/` with starter components.

```
design-systems/<name>/
  README.md       name, description, what is inside, install line
  SKILL.md        frontmatter and the rules to follow when building
  tokens.css      colour, spacing, type, radius and motion as CSS custom properties
  ui/             starter components that use only the tokens
```

## Install

```bash
npx skills@latest add Nexvyn/designthink --skill <name>
```

Replace `<name>` with the folder name, for example `demo-system`.
