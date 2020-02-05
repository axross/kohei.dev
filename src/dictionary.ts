import LocaleString from "./entities/LocaleString";
import { MY_NAME } from "./constant/data";

export type DictionaryEntry = Record<LocaleString, string>;

export const NOT_FOUND_TITLE: DictionaryEntry = {
  "en-US": "Oops!",
  "ja-JP": "Oops!"
};

export const NOT_FOUND_DESCRIPTION: DictionaryEntry = {
  "en-US":
    "The post is not found. Probably it can be available in other language.",
  "ja-JP":
    "お探しの記事が見つかりませんでした。もしかしたら他の言語でご覧になることができるかもしれません。"
};

export const WEBSITE_TITLE: DictionaryEntry = {
  "en-US": MY_NAME,
  "ja-JP": MY_NAME
};

export const WEBSITE_TITLE_BLOG_POST: DictionaryEntry = {
  "en-US": `{title} | What ${MY_NAME} wrote`,
  "ja-JP": `{title} | What ${MY_NAME} wrote`
};

export const WEBSITE_TITLE_BLOG_POST_LOADING: DictionaryEntry = {
  "en-US": `Loading... | What ${MY_NAME} wrote`,
  "ja-JP": `読み込み中... | What ${MY_NAME} wrote`
};

export const WEBSITE_TITLE_BLOG_POST_NOT_FOUND: DictionaryEntry = {
  "en-US": "404 Not Found",
  "ja-JP": "404 Not Found"
};

export const WEBSITE_DESCRIPTION: DictionaryEntry = {
  "en-US": `${MY_NAME}'s personal website. My experience, projects and bloggging.`,
  "ja-JP": `${MY_NAME}の個人ウェブサイト。経歴や活動状況、ブログなど。`
};

export const BLOG_POST_TIMETAMP: DictionaryEntry = {
  "en-US": "Written on {createdAt}",
  "ja-JP": "{createdAt}に投稿"
};

export const WHOAMI_HEADING: DictionaryEntry = {
  "en-US": "whoami",
  "ja-JP": "whoami"
};

export const RECENT_N_BLOG_POSTS_HEADING: DictionaryEntry = {
  "en-US": "Blog Posts",
  "ja-JP": "ブログ"
};

export const WEBSITE_PURPOSE_HEADING: DictionaryEntry = {
  "en-US": "What's This Website?",
  "ja-JP": "このWebサイトは？"
};

export const LANGUAGE_EN_US: DictionaryEntry = {
  "en-US": "English",
  "ja-JP": "English"
};

export const LANGUAGE_JA_JP: DictionaryEntry = {
  "en-US": "Japanese (日本語)",
  "ja-JP": "日本語"
};