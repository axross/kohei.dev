module.exports = {
  input: ["./src/**/*.{js,jsx,ts,tsx}"],
  contextSeparator: false,
  createOldCatalogs: false,
  defaultNamespace: "common",
  defaultValue: (locale, namespace, key) => {
    return key;
  },
  indentation: 2,
  keepRemoved: true,
  keySeparator: false,
  lexers: {
    ts: [
      {
        lexer: "JsxLexer",
        namespaceFunctions: ["useTranslation", "getTranslation"],
      },
    ],
    tsx: [
      {
        lexer: "JsxLexer",
        namespaceFunctions: ["useTranslation", "getTranslation"],
      },
    ],
    default: [
      {
        lexer: "JsxLexer",
        namespaceFunctions: ["useTranslation", "getTranslation"],
      },
    ],
  },
  lineEnding: "auto",
  locales: ["en-US"],
  namespaceSeparator: false,
  pluralSeparator: false,
  sort: true,
  verbose: false,
  failOnWarnings: false,
  failOnUpdate: false,
  customValueTemplate: null,
  resetDefaultValueLocale: null,
  i18nextOptions: null,
  yamlOptions: null,
};