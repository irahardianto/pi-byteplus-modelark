# pi-byteplus-modelark

A [Pi](https://pi.dev) extension that adds [BytePlus ModelArk Coding Plan](https://docs.byteplus.com/en/docs/ModelArk/2188959) as a custom model provider.

ModelArk Coding Plan is an OpenAI-compatible API that gives you access to a range of coding models through a single subscription.

## Available Models

| Model ID | Description |
|---|---|
| `ark-code-latest` | **Recommended** — auto-routes to the best model for your task |
| `dola-seed-2.0-pro` | Seed 2.0 Pro |
| `dola-seed-2.0-lite` | Seed 2.0 Lite |
| `dola-seed-2.0-code` | Seed 2.0 Code |
| `bytedance-seed-code` | ByteDance Seed Code |
| `glm-5.1` | GLM 5.1 |
| `glm-4.7` | GLM 4.7 |
| `kimi-k2.5` | Kimi K2.5 |
| `gpt-oss-120b` | GPT-OSS 120B |

> **Note:** Model availability may vary by region. The final offering is subject to BytePlus's actual provision.

## Prerequisites

1. Subscribe to a [ModelArk Coding Plan](https://console.byteplus.com) package.
2. On the **Activation Management** page, select or switch your target model.
3. Create an **API Key** in the BytePlus console.

## Installation

### Option 1: Install from git (recommended)

```bash
pi install git:github.com/irahardianto/byteplus-modelark
```

### Option 2: Try without installing

```bash
pi -e git:github.com/irahardianto/byteplus-modelark
```

### Option 3: Local install

```bash
git clone https://github.com/irahardianto/byteplus-modelark.git
pi install ./byteplus-modelark
```

### Option 4: Copy to extensions directory

```bash
# Global
cp -r byteplus-modelark ~/.pi/agent/extensions/byteplus-modelark

# Or project-local
cp -r byteplus-modelark .pi/extensions/byteplus-modelark
```

## Configuration

Set your BytePlus API key as an environment variable:

```bash
export BYTEPLUS_API_KEY="your-api-key-here"
```

Or add it to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
echo 'export BYTEPLUS_API_KEY="your-api-key-here"' >> ~/.bashrc
```

## Usage

Once installed, the models appear under the `byteplus-modelark` provider:

```bash
# Use the auto-routed model (recommended)
pi --model byteplus-modelark:ark-code-latest

# Use a specific model
pi --model byteplus-modelark:dola-seed-2.0-pro
pi --model byteplus-modelark:kimi-k2.5
pi --model byteplus-modelark:glm-5.1

# List all available models
pi --list-models
```

You can also switch models interactively inside Pi with `/model` or `Ctrl+P`.

## How It Works

This extension registers `byteplus-modelark` as a custom provider using Pi's `registerProvider()` API. It points to the **Coding Plan** base URL:

```
https://ark.ap-southeast.bytepluses.com/api/coding/v3
```

> ⚠️ **Important:** This extension uses the Coding Plan URL, not the base model URL (`/api/v3`). Requests to the base model URL do **not** consume your Coding Plan quota and will incur additional charges.

## Troubleshooting

### Model names with dots

Some tools have issues with dots in model names. If `glm-4.7` or `kimi-k2.5` don't work, try:
- `glm-4-7` (hyphen instead of dot)
- `kimi-k2-5` (hyphen instead of dot)

### Error codes

Refer to the [BytePlus Error Codes documentation](https://docs.byteplus.com/en/docs/ModelArk/2188959) for troubleshooting API errors.

## License

MIT
