# Evals

Evals are test cases for the skills. Each case gives a prompt, the expected behaviour and the condition that counts as a failure. They check that a skill still triggers on the right prompts and still behaves once it does.

An incident is a past mistake kept as a case. When a skill got something wrong, its incident stays in `incidents/` so the same mistake is caught again later.

## Folders

- `incidents/` one JSON file per past mistake.

## Case format

```json
{
  "id": "short-kebab-id",
  "skill": "skill-name",
  "prompt": "what the user asks",
  "expected": "what the skill should do",
  "fails_if": "what would count as a failure",
  "rule": { "file": "skills/skill-name/SKILL.md", "phrase": "text the rule must keep" }
}
```
