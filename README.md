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
