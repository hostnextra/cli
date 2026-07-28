import { CLIError } from "../errors/cli-error.js";
import { OFFICIAL_PLUGINS, type PluginDefinition } from "./catalogue.js";

export function getPluginById(id: string): PluginDefinition | undefined {
    return OFFICIAL_PLUGINS.find((plugin) => plugin.id === id);
}

export function getPluginByCommand(command: string): PluginDefinition | undefined {
    return OFFICIAL_PLUGINS.find((plugin) => plugin.command === command);
}

export function isOfficialPlugin(id: string): boolean {
    return getPluginById(id) !== undefined;
}

export function requirePlugin(id: string): PluginDefinition {
    const plugin = getPluginById(id);

    if (!plugin) {
        throw new CLIError(
            `Unknown plugin "${id}".\n\nRun "hostnextra plugin list" to see available plugins.`
        );
    }

    return plugin;
}