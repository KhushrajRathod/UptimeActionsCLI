# Uptime Actions (CLI)
This repository contains the source code for the Uptime Actions CLI.

Uptime Actions is split into:

- [Uptime Actions Core](https://github.com/KhushrajRathod/UptimeActions) -- The Uptime Actions GitHub template. Generate your copy from here
- [Uptime Actions API](https://github.com/KhushrajRathod/UptimeActionsAPI) -- contains the code for the Uptime Actions API/Slack Bot
- Uptime Actions CLI (This) -- lets you quickly generate an Uptime Actions config using a uptimerobot.com csv export
- [Uptime Actions Dashboard](https://github.com/KhushrajRathod/UptimeActionsDashboard) -- Next.js Dashboard that lets you view your projects' uptime history

## Quickstart

```bash
npx uptime-actions@latest > monitors.config.js
```

## Running
To install, run

```bash
yarn global add uptime-actions
```

Then,
```bash
uptime-actions > monitors.config.js
```

Optionally, pass a file (instead of the default `uptimerobot-monitors.csv`)

```bash
uptime-actions -f myMonitors.csv > monitors.config.js
```