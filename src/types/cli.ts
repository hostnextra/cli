export type CLICommand =
    | "help"
    | "plugin"
    | "version";

export interface CLIContext {
    argv: string[];
    command: string | undefined;
    args: string[];
}