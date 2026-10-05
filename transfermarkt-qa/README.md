# Transfermarkt QA Automation POC

A small Playwright + TypeScript POC created for the TransferRoom QA technical assignment.

## Objective

The project covers:

- 5 UI / E2E scenarios
- 1 integration test
- 1 unit test
- HTML execution reporting
- screenshots / traces / video on failures
- dynamic UI handling without fixed sleeps

## Technology

- Playwright Test
- TypeScript
- Node.js / npm

## Project structure

```text
transfermarkt-qa/
├── tests/
│   ├── ui/
│   │   ├── premierLeagueTable.spec.ts
│   │   ├── search.spec.ts
│   │   ├── navigation.spec.ts
│   │   ├── login.spec.ts
│   │   └── http500.spec.ts
│   ├── integration/
│   │   └── homepageApi.spec.ts
│   └── unit/
│       └── httpStatusMonitor.spec.ts
├── pages/
│   ├── HomePage.ts
│   ├── PremierLeaguePage.ts
│   ├── SearchPage.ts
│   └── LoginPage.ts
├── components/
│   ├── Header.ts
│   └── Navigation.ts
├── utils/
│   └── HttpStatusMonitor.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Test strategy

### UI / E2E

The UI scenarios validate required flows:

1. Premier League table
2. Search
3. Main navigation
4. Login form behaviour
5. Absence of HTTP 500 responses during a key flow


### Integration

The integration test uses Playwright's `APIRequestContext` to make an HTTP request directly to Transfermarkt.

This verifies application communication without involving browser rendering.

### Unit

The unit test validates the `HttpStatusMonitor` utility in isolation.

It does not require a real browser or network call.

## Stability approach

The suite avoids `waitForTimeout()` / `Thread.Sleep()` style fixed delays.

Instead it relies on:

- Playwright auto-waiting
- semantic / resilient locators where possible
- explicit maximum timeouts only where appropriate


The HTTP 500 monitor listens to network responses while the user flow executes.

## HTTP 500 monitoring

The monitor records every response with status >= 500.

The test fails with the list of observed server errors rather than silently ignoring them.

This utility is deliberately small so its behaviour can also be unit tested independently.

## Login limitation

No valid Transfermarkt credentials were provided therefore the login test focuses on the login form and its behaviour without committing credentials.

## Assumptions / limitations

- Transfermarkt is an external third-party website, so its UI and availability can change.
- Some content can be dynamic
- No real credentials are stored in the repository.


