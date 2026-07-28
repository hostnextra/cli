import { execFile } from "node:child_process";
import { promisify } from "node:util";

import {
    OFFICIAL_PLUGINS,
    type PluginDefinition,
} from "./catalogue.js";

const execFileAsync = promisify(execFile);

export interface PluginStatus {
    readonly plugin: PluginDefinition;
    readonly installed: boolean;
}

export async function isPluginInstalled(
    packageName: string,
): Promise<boolean> {
    const executable = process.platform === "win32"
        ? "npm.cmd"
        : "npm";

    try {
        await execFileAsync(
            executable,
            [
                "list",
                "--global",
                "--depth=0",
                packageName,
            ],
            {
                windowsHide: true,
            },
        );

        return true;
    } catch {
        return false;
    }
}

export async function getPluginStatus(
    plugin: PluginDefinition,
): Promise<PluginStatus> {
    return {
        plugin,
        installed: await isPluginInstalled(plugin.package),
    };
}

export async function getAllPluginStatuses(): Promise<PluginStatus[]> {
    return Promise.all(
        OFFICIAL_PLUGINS.map(getPluginStatus),
    );
}