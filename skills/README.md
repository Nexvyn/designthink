# Skills

A skill is a folder with a `SKILL.md` that a coding agent loads when a task needs it. The agent reads the frontmatter to decide whether the skill applies, then follows the body.

## Folder format

```
skills/<name>/
  SKILL.md        frontmatter (name, description, metadata.summary) and the steps
  references/     optional files the steps point to
```

- `name` matches the folder name.
- `description` says when to use the skill, with example phrases.
- `metadata.summary` is a short line for listings.

## Install

```bash
npx skills@latest add Nexvyn/designthink --skill <name>
```

Replace `<name>` with the folder name, for example `demo-skill`.
