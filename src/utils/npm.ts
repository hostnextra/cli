import { spawn } from "node:child_process";

export interface NpmResult {
    readonly success: boolean;
    readonly exitCode: number;
}

export async function runNpm(args: readonly string[]): Promise<NpmResult> {
    const executable = process.platform === "win32" ? "npm.cmd" : "npm";

    return new Promise((resolve, reject) => {
        const child = spawn(executable, [...args], {
            stdio: "inherit",
            shell: false,
        });

        child.on("error", reject);

        child.on("close", (code) => {
            resolve({
                success: code === 0,
                exitCode: code ?? 1,
            });
        });
    });
}