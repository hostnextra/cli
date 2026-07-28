import { loadPlugin } from "./loader.js";

export async function dispatchPluginCommand(
    command: string,
    argv: readonly string[],
): Promise<void> {
    await loadPlugin(command, argv);
}