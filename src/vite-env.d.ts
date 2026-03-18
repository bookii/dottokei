type Layout = "standard" | "slim";

interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_LAYOUT: Layout;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}