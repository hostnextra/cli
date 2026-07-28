import { OFFICIAL_PLUGINS } from "./catalogue.js";
import { getAllPluginStatuses } from "./status.js";
import { installPlugin } from "./installer.js";
import { removePlugin } from "./remover.js";
import { updatePlugin } from "./updater.js";

export async function listPlugins() {
    return getAllPluginStatuses();
}

export async function addPlugin(pluginId: string): Promise<void> {
    await installPlugin(pluginId);
}

export async function updatingPlugin(pluginId: string): Promise<void> {
    await updatePlugin(pluginId);
}

export async function uninstallPlugin(pluginId: string): Promise<void> {
    await removePlugin(pluginId);
}

export function getOfficialPlugins() {
    return OFFICIAL_PLUGINS;
}