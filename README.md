# pi-byteplus-modelark

[![npm version](https://img.shields.io/npm/v/pi-byteplus-modelark.svg?style=flat-square)](https://www.npmjs.com/package/pi-byteplus-modelark)
[![pi.dev package](https://img.shields.io/badge/pi.dev-package-blue?style=flat-square)](https://pi.dev/packages/pi-byteplus-modelark)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Pi coding agent extension that registers BytePlus ModelArk as a custom OpenAI-compatible provider, unlocking access to all supported coding models (DeepSeek, GLM, Kimi, etc.) directly within the pi TUI.

## Key Features
- **Seamless ModelArk Integration**: Adds BytePlus ModelArk as a first-class provider in pi's model registry
- **OpenAI Compatibility**: Works with pi's existing OpenAI-style tooling and prompts
- **Multi-Model Support**: Access all BytePlus ModelArk coding models (DeepSeek, GLM, Kimi, and more)
- **SemVer Auto-Versioning**: Automatic version bumps via GitHub Actions (patch/minor/major based on commit messages)
- **pi.dev Marketplace Ready**: Pre-configured to be indexed by pi's official package registry

## Installation
### Via pi (Recommended)
Once listed on pi.dev (within 24 hours of first npm publish):
```bash
pi install npm:pi-byteplus-modelark
```

### Via npm (Manual)
```bash
# Install globally (compatible with pi-coding-agent)
npm install -g pi-byteplus-modelark

# Link to pi's extension directory (if needed)
ln -s $(npm root -g)/pi-byteplus-modelark/extensions ~/.agents/extensions/pi-byteplus-modelark
```

## Configuration
1. After installation, add your BytePlus ModelArk API credentials to pi's config:
   ```bash
   pi config set byteplus-modelark.api-key YOUR_API_KEY
   pi config set byteplus-modelark.endpoint YOUR_MODELARK_ENDPOINT
   ```
2. Select ModelArk as your default provider in pi:
   ```bash
   pi config set default-provider byteplus-modelark
   ```
3. Restart pi to apply changes

## Usage Examples
### Run a coding task with DeepSeek (via ModelArk)
```bash
pi prompt "Write a TypeScript function to validate SemVer strings" --model deepseek-coder-v2
```

### List all available ModelArk models
```bash
pi mcp search "byteplus-modelark" --include-schemas
```

## SemVer Auto-Versioning (GitHub Actions)
This extension uses a GitHub Actions pipeline to automatically bump versions based on commit messages:
- **Patch (x.y.Z)**: Commits with `fix`, `patch`, `bugfix`, `chore`, `docs`, `refactor`, `perf`, `test`, `ci`
- **Minor (x.Y.0)**: Commits with `feat`, `feature`, `add`
- **Major (X.0.0)**: Commits containing `BREAKING CHANGE` or `breaking`

Full details in [PUBLISHING.md](PUBLISHING.md)

## Publishing Pipeline Setup
1. Add your npm automation token as a GitHub Secret (`NPM_TOKEN`)
2. Push to `main` branch to trigger automatic publishing
3. Monitor pipeline status: [GitHub Actions](https://github.com/irahardianto/pi-byteplus-modelark/actions)

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes with SemVer-compliant messages
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Support
- Open an issue: [GitHub Issues](https://github.com/irahardianto/pi-byteplus-modelark/issues)
- Contact the author: irahardianto@example.com
- Pi community: [pi.dev Discord](https://pi.dev/discord)

## Links
- [npm Package](https://www.npmjs.com/package/pi-byteplus-modelark)
- [pi.dev Marketplace Listing](https://pi.dev/packages/pi-byteplus-modelark)
- [BytePlus ModelArk Documentation](https://www.byteplus.com/en/docs/modelark)
- [pi-coding-agent Documentation](https://pi.dev/docs)