import IntlMessageFormat from "intl-messageformat";
import * as React from "react";
import { WEBSITE_TITLE } from "../../../dictionary";
import useLocale from "../../../hooks/useLocale";

export default function useLoggingPageView(): void {
  const { currentLocale } = useLocale();

  React.useEffect(() => {
    if (typeof (window as any).ga === "undefined") return;

    (window as any).ga("set", "location", window.location.href);
    (window as any).ga(
      "set",
      "title",
      new IntlMessageFormat(WEBSITE_TITLE[currentLocale]).format()
    );
    (window as any).ga("send", "pageview");
  }, [currentLocale]);
}
