// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {}

function log(error) {
  console.log(error);
}

export default {
  init,
  log,
};

// export default init = Sentry.init({
//   dsn: "https://cd5a0f11f7424e72ad43e0d39c1d6743@o1111964.ingest.sentry.io/6141354",
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });
