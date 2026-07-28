import { requirePlugin } from "./validator.js";
import { runNpm } from "../utils/npm.js";

export async function removePlugin(pluginId: string): Promise<void> {
    const plugin = requirePlugin(pluginId);

    const result = await runNpm([
        "uninstall",
        "--global",
        plugin.package,
    ]);

    if (!result.success) {
        throw new Error(
            `Failed to remove plugin "${plugin.id}".`
        );
    }
}