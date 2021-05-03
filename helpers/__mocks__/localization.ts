export const {
  toUtsKebabCaseLocale,
  toUtsSnakeCaseLocale,
} = jest.requireActual("../localization");

export function getLocales(): string[] {
  return ["en-us", "ja-jp"];
}

export function getDefaultLocale(): string {
  return "en-us";
}
