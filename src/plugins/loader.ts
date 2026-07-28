import { spawn } from "node:child_process";

import { CLIError } from "../errors/cli-error.js";
import { getPluginByCommand } from "./validator.js";

export async function loadPlugin(
    command: string,
    args: readonly string[],
): Promise<void> {
    const plugin = getPluginByCommand(command);

    if (!plugin) {
        throw new CLIError(
            `Unknown command: ${command}\n\nRun "hostnextra help" to see available commands.`,
        );
    }

    const executable = plugin.executable;

    await new Promise<void>((resolve, reject) => {
        const child = spawn(executable, [...args], {
            stdio: "inherit",
            shell: process.platform === "win32",
        });

        child.once("error", () => {
            reject(
                new CLIError(
                    `${plugin.description} is not installed.\n\nInstall it using:\n\nhostnextra plugin add ${plugin.id}`,
                ),
            );
        });

        child.once("close", (code) => {
            if ((code ?? 1) === 0) {
                resolve();
                return;
            }

            reject(
                new CLIError(
                    `${plugin.description} exited with status ${code ?? 1}.`,
                ),
            );
        });
    });
}