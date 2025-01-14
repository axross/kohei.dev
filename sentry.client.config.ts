// this file configures the initialization of Sentry on the client.
// the config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init, replayIntegration } from "@sentry/nextjs";
import { HandleKnownError } from "~/helpers/sentry";

init({
  tracesSampleRate: 1,
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 1,
  integrations: [replayIntegration(), new HandleKnownError()],
});
