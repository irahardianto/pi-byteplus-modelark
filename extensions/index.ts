import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

/**
 * BytePlus ModelArk Coding Plan — Pi Extension
 *
 * Registers BytePlus ModelArk as a custom OpenAI-compatible provider.
 * Uses the Coding Plan Base URL (NOT the base model URL) so requests
 * consume the Coding Plan quota.
 *
 * Configuration:
 *   - Set the BYTEPLUS_API_KEY environment variable with your API key
 *     (create one at https://console.byteplus.com).
 *   - Or replace "BYTEPLUS_API_KEY" below with your literal key.
 *
 * Usage:
 *   pi --model byteplus-modelark:ark-code-latest
 *   pi --model byteplus-modelark:dola-seed-2.0-pro
 */
export default function (pi: ExtensionAPI) {
  pi.registerProvider("byteplus-modelark", {
    // Coding Plan endpoint — OpenAI-compatible
    // WARNING: Do NOT use https://ark.ap-southeast.bytepluses.com/api/v3
    //          That is the base model URL and will incur additional charges.
    baseUrl: "https://ark.ap-southeast.bytepluses.com/api/coding/v3",

    // Reads from the BYTEPLUS_API_KEY env var, or use a literal key string
    apiKey: "BYTEPLUS_API_KEY",

    // ModelArk Coding Plan is OpenAI Chat Completions compatible
    api: "openai-completions",

    models: [
      // ─── Auto-routed model (recommended) ──────────────────────────
      {
        id: "ark-code-latest",
        name: "ModelArk Auto (ark-code-latest)",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },

      // ─── Seed models ──────────────────────────────────────────────
      {
        id: "dola-seed-2.0-pro",
        name: "Seed 2.0 Pro",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "dola-seed-2.0-lite",
        name: "Seed 2.0 Lite",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "dola-seed-2.0-code",
        name: "Seed 2.0 Code",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "bytedance-seed-code",
        name: "ByteDance Seed Code",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },

      // ─── GLM models ───────────────────────────────────────────────
      {
        id: "glm-5.1",
        name: "GLM 5.1",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "glm-4.7",
        name: "GLM 4.7",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },

      // ─── Kimi model ───────────────────────────────────────────────
      {
        id: "kimi-k2.5",
        name: "Kimi K2.5",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },

      // ─── GPT-OSS model ────────────────────────────────────────────
      {
        id: "gpt-oss-120b",
        name: "GPT-OSS 120B",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
    ],
  });
}
