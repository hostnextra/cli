import { route } from "./router/router.js";
import { printError } from "./utils/output.js";
import { CLIError } from "./errors/cli-error.js";
import type { CLIContext } from "./types/cli.js";

export async function run(): Promise<void> {
    const [, , ...argv] = process.argv;

    const context: CLIContext = {
        argv,
        command: argv[0],
        args: argv.slice(1),
    };

    try {
        await route(context);
    } catch (error) {
        if (error instanceof CLIError) {
            printError(error.message);
            process.exit(error.exitCode);
        }

        printError("Unexpected error occurred.");
        console.error(error);
        process.exit(1);
    }
}