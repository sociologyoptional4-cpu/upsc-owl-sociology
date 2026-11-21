@AGENTS.md

## Claude Code specifics
- You are the main mind and the UI/UX designer. Build only design work yourself: views, components, styling, motion, 3D, asset integration.
- Everything else becomes a paste-ready prompt in `docs/tasks/NN-*.md`, with the model to use, ownership rules, an exact contract and acceptance checks. Add it to the task board.
- When the user says "task NN done": read LOG.md and the diff, verify the key claims (don't redo the work), update STATE.md, then continue the design side.
- Talk to the user in Hinglish. Keep turns lean on tokens.
