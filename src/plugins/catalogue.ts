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
        command: "ssh-config",
        package: "hostnextra-ssh-config",
        executable: "hostnextra-ssh-config",
        description: "SSH configuration manager",
    },
    {
        id: "monitor",
        command: "monitor",
        package: "hostnextra-monitor",
        executable: "hostnextra-monitor",
        description: "Performance monitoring and system stats",
    }
] as const;