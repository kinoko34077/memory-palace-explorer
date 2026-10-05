import { readFile } from "node:fs/promises";

const capabilityUrl = new URL(
  "../src-tauri/capabilities/main.json",
  import.meta.url,
);
const capability = JSON.parse(await readFile(capabilityUrl, "utf8"));

const permissions = Array.isArray(capability.permissions)
  ? capability.permissions
  : [];

const identifiers = permissions.map((permission) =>
  typeof permission === "string" ? permission : permission?.identifier,
);

const filesystemPermissions = identifiers.filter(
  (identifier) =>
    typeof identifier === "string" &&
    (identifier === "fs:default" || identifier.startsWith("fs:")),
);

if (filesystemPermissions.length > 0) {
  throw new Error(
    `I0 capability must not expose generic filesystem permissions: ${filesystemPermissions.join(", ")}`,
  );
}

if (!Array.isArray(capability.windows) || !capability.windows.includes("main")) {
  throw new Error("I0 capability must target the main window explicitly");
}

console.log(
  `I0 capability boundary verified: ${permissions.length} permission(s), 0 fs:* permissions.`,
);
