# memory-palace-explorer

A local file explorer that maps filesystem navigation and manipulation onto a lightweight 2D pseudo-3D escape-game / memory-palace interface.

## Initial concept

- Directory/view navigation is represented as room/viewpoint movement.
- Drive changes are represented as movement between buildings/mansions.
- Files are manipulable scene items.
- The hand-item/inventory area is fused with the taskbar.
- Backgrounds are photographic images; scene items use icon images and intentionally simple pseudo-3D presentation.
- Per-directory presentation metadata is planned as a hidden JSON file (working name `data.json`).
- File placement, movement and deletion correspond to real filesystem operations rather than a disconnected virtual world.

Detailed requirements and the v0.1 acceptance slice are tracked in the repository-local Initial scope issue.

## I0 scaffold boundary

The first implementation slice is intentionally limited to the desktop/application boundary:

- Tauri 2 desktop shell with a Vite + Vanilla TypeScript frontend;
- one typed WebView -> Rust command, `get_app_info`, used only to prove the backend bridge;
- the main WebView capability grants `core:app:default` and no generic `fs:*` permission;
- bundle generation is disabled for I0;
- I0 does not select roots, enumerate/read user files, mutate the filesystem, implement room metadata, or start the I1 file-explorer behavior.

Dependency verification is lockfile-frozen. The committed `package-lock.json` and `src-tauri/Cargo.lock` are the exact recovered outputs from the successful I0 bootstrap verification artifact; CI uses `npm ci` and Cargo `--locked`, checks the recorded Git blob identities, and fails if either lockfile drifts. External GitHub Actions are pinned to immutable commits, with Node `22.23.2` and Rust `1.98.1` fixed for this acceptance slice.

Repository task authority and acceptance evidence remain in Issue #7 / PR #8. I1 must not start until I0 is accepted and the next bounded slice is explicitly selected.
