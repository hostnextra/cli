import { requirePlugin } from "./validator.js";
import { runNpm } from "../utils/npm.js";

export async function installPlugin(pluginId: string): Promise<void> {
    const plugin = requirePlugin(pluginId);

    const result = await runNpm([
        "install",
        "--global",
        plugin.package,
    ]);

    if (!result.success) {
        throw new Error(
            `Failed to install plugin "${plugin.id}".`
        );
    }
}