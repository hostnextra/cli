export const CLI_NAME = "hostnextra";

export const CLI_DESCRIPTION = "HostnExtra Command Line Interface";

export const CLI_VERSION = "1.0.0";

export const HELP_TEXT = `
HostnExtra CLI

Usage:
  hostnextra <command> [options]

Core Commands:
  help                         Show help
  version                      Show CLI version

Plugin Management:
  plugin list                  List official plugins
  plugin add <plugin>          Install an official plugin
  plugin remove <plugin>       Remove an installed plugin

Plugin Commands:
  ssh                          SSH configuration manager
  monitor                      Performance monitoring and system stats

Examples:
  hostnextra plugin list
  hostnextra plugin add ssh-config
  hostnextra plugin remove ssh-config

  hostnextra ssh list
  hostnextra monitor overview
`.trim();