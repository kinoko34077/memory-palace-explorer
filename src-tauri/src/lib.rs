use serde::Serialize;

#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
#[serde(rename_all = "camelCase")]
struct AppInfo {
    name: &'static str,
    version: &'static str,
    implementation_slice: &'static str,
}

fn build_app_info() -> AppInfo {
    AppInfo {
        name: "Memory Palace Explorer",
        version: env!("CARGO_PKG_VERSION"),
        implementation_slice: "I0",
    }
}

#[tauri::command]
fn get_app_info() -> AppInfo {
    build_app_info()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_app_info])
        .run(tauri::generate_context!())
        .expect("failed to run Memory Palace Explorer");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn app_info_identifies_only_the_i0_scaffold() {
        let info = build_app_info();

        assert_eq!(info.name, "Memory Palace Explorer");
        assert_eq!(info.version, env!("CARGO_PKG_VERSION"));
        assert_eq!(info.implementation_slice, "I0");
    }
}
