import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-", //if we make it on then we have to use the ui prefix in components tailwindclassname recommanded by tailwind
  presets: [sharedConfig],
};

export default config;
