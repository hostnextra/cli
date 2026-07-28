import type { PluginStatus } from "../plugins/index.js";

export function printPluginList(plugins: readonly PluginStatus[]): void {
    if (plugins.length === 0) {
        console.log("No official plugins available.");
        return;
    }

    console.log("Official HostnExtra Plugins\n");

    for (const { plugin, installed } of plugins) {
        console.log(`${plugin.id}`);
        console.log(`  Command     : ${plugin.command}`);
        console.log(`  Description : ${plugin.description}`);
        console.log(`  Installed   : ${installed ? "Yes" : "No"}`);
        console.log();
    }
}

export function printPluginInstalled(pluginId: string): void {
    console.log(`Plugin "${pluginId}" installed successfully.`);
}

export function printPluginUpdated(plugin: string): void {
    console.log(`${plugin} has been updated.`);
}

export function printPluginRemoved(pluginId: string): void {
    console.log(`Plugin "${pluginId}" removed successfully.`);
}

export function printUnknownPlugin(available: readonly string[]): void {
    console.error("Unknown plugin.\n");

    console.error("Available plugins:");

    for (const plugin of available) {
        console.error(`  • ${plugin}`);
    }
}