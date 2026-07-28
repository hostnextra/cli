# HostnExtra CLI

The HostnExtra CLI is the official command line interface for the HostnExtra ecosystem.

It provides a single entry point for installing, managing, and running official HostnExtra plugins. Each feature is distributed as an independent plugin, allowing you to install only the tools you need.

## Features

• Lightweight and fast
• Cross platform
• Official plugin ecosystem
• Install only what you need
• Independent plugin releases
• Simple and consistent commands
• Built with TypeScript

## Installation

Install the CLI globally using npm.

```bash
npm install -g @hostnextra/cli
```

Verify that the CLI is installed.

```bash
hostnextra
```

## Quick Start

```bash
hostnextra plugin add ssh-config

hostnextra ssh add

hostnextra ssh list

hostnextra ssh connect production
```

## Usage

```text
hostnextra <command> [options]
```

Display help.

```bash
hostnextra help
```

Display version.

```bash
hostnextra version
```

## Plugins

The CLI includes commands for managing official HostnExtra plugins.

### List available plugins

```bash
hostnextra plugin list
```

Example output

```text
Official HostnExtra Plugins

ssh-config
  Description : SSH configuration manager
  Installed   : Yes
```

### Install a plugin

```bash
hostnextra plugin add ssh-config
```

### Remove a plugin

```bash
hostnextra plugin remove ssh-config
```

### Update a plugin

Update an installed plugin to the latest version.

```bash
hostnextra plugin update ssh-config
```

## Installed Plugins

Once installed, plugins are automatically available through the hostnextra command.

Example

```bash
hostnextra ssh list
```

The CLI automatically launches the appropriate plugin.

## Command Structure

```text
hostnextra
hostnextra help
hostnextra version

hostnextra plugin list
hostnextra plugin add <plugin>
hostnextra plugin remove <plugin>
hostnextra plugin update <plugin>

hostnextra <plugin-command> <subcommand>
```

Example

```bash
hostnextra ssh help
hostnextra ssh list
hostnextra ssh add
hostnextra ssh connect production
```

## Plugin Architecture

Each HostnExtra plugin is distributed as a separate npm package.

For example

| Plugin | Package |
|---------|---------|
| SSH Configuration | `@hostnextra/ssh-config` |

Plugins are distributed as independent npm packages and are executed through the HostnExtra CLI.

This approach provides:

* Independent releases
* Smaller installations
* Better isolation
* Easier maintenance

## Development

Clone the repository.

```bash
git clone https://github.com/hostnextra/cli.git
```

Install dependencies.

```bash
npm install
```

Build the project.

```bash
npm run build
```

Run locally.

```bash
node dist/index.js
```

## Requirements

* Node.js 22 or later
* npm 10 or later

Additional plugins will be released independently.

## Contributing

Contributions are welcome.

Please open an issue before submitting significant changes so they can be discussed first.

## License

MIT License

Copyright (c) HostnExtra