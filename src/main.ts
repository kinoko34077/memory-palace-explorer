import { invoke } from "@tauri-apps/api/core";
import "./styles.css";

type AppInfo = {
  name: string;
  version: string;
  implementationSlice: "I0";
};

const statusElement = document.querySelector<HTMLElement>("#backend-status");

if (!statusElement) {
  throw new Error("Missing #backend-status element");
}

async function renderBackendStatus(status: HTMLElement): Promise<void> {
  status.dataset.state = "loading";
  status.textContent = "Connecting to the Rust backend…";

  try {
    const info = await invoke<AppInfo>("get_app_info");
    status.dataset.state = "ready";
    status.textContent = `${info.name} ${info.version} · ${info.implementationSlice}`;
  } catch (error) {
    status.dataset.state = "error";
    status.textContent =
      error instanceof Error
        ? `Backend unavailable: ${error.message}`
        : "Backend unavailable";
  }
}

void renderBackendStatus(statusElement);
