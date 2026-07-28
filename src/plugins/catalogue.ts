export interface PluginDefinition {
    readonly id: string;
    readonly command: string;
    readonly package: string;
    readonly executable: string;
    readonly description: string;
}

export const OFFICIAL_PLUGINS: readonly PluginDefinition[] = [
    {
        id: "ssh-config",
        command: "ssh",
        package: "@hostnextra/ssh-config",
        executable: "hostnextra-ssh-config",
        description: "SSH configuration manager",
    }
] as const;