import { requirePlugin } from "./validator.js";
import { runNpm } from "../utils/npm.js";

export async function updatePlugin(id: string): Promise<void> {
    const plugin = requirePlugin(id);

    const result = await runNpm([
        "install",
        "--global",
        plugin.package,
    ]);

    if (!result.success) {
        throw new Error(
            `Failed to update plugin "${plugin.id}".`
        );
    }
}