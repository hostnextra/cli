import {
    CLI_VERSION,
    HELP_TEXT,
} from "../constants/constants.js";
import { CLIError } from "../errors/cli-error.js";
import type { CLIContext } from "../types/cli.js";
import { print } from "../utils/output.js";
import {
    addPlugin,
    dispatchPluginCommand,
    getOfficialPlugins,
    listPlugins,
    uninstallPlugin,
    updatingPlugin,
} from "../plugins/index.js";

import {
    printPluginInstalled,
    printPluginList,
    printPluginRemoved,
    printPluginUpdated,
    printUnknownPlugin,
} from "../utils/plugin-output.js";

export async function route(context: CLIContext): Promise<void> {
    const command = context.command;
    const args = context.args;

    switch (command) {
        case "plugin": {
            const [action, pluginId] = args;

            switch (action) {
                case "list": {
                    const plugins = await listPlugins();
                    printPluginList(plugins);
                    return;
                }

                case "add": {
                    if (!pluginId) {
                        throw new CLIError("Plugin name is required.");
                    }

                    await addPlugin(pluginId);
                    printPluginInstalled(pluginId);
                    return;
                }

                case "update": {
                    if (!pluginId) {
                        throw new CLIError("Plugin name is required.");
                    }

                    await updatingPlugin(pluginId);
                    printPluginUpdated(pluginId);
                    return;
                }

                case "remove": {
                    if (!pluginId) {
                        throw new CLIError("Plugin name is required.");
                    }

                    await uninstallPlugin(pluginId);
                    printPluginRemoved(pluginId);
                    return;
                }

                default:
                    printUnknownPlugin(
                        getOfficialPlugins().map((plugin) => plugin.id),
                    );
                    return;
            }
        }

        case undefined:
        case "":
        case "help":
            print(HELP_TEXT);
            return;

        case "version":
            print(CLI_VERSION);
            return;

        default:
            await dispatchPluginCommand(command, args);
            return;
    }
}