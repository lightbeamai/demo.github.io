# Cookie Consent + Google Tag Manager (GTM) Setup

How cookie consent is wired on **lightbeam-demo.lightbeamsecurity.com**. The LightBeam
CMP (consent banner) is deployed **via GTM** ("pure-GTM mode") and drives **Google
Consent Mode v2** — the page itself carries only the GTM snippet, no inline consent script.

## Quick reference

| Thing | Value |
|---|---|
| Website | https://lightbeam-demo.lightbeamsecurity.com |
| Repo | https://github.com/lightbeamai/demo.github.io (branch `main`, GitHub Pages from `/`) |
| Setup PR | [#3 — Switch cookie consent to pure-GTM mode](https://github.com/lightbeamai/demo.github.io/pull/3) |
| GTM account ID | `6052590449` |
| GTM container (numeric) | `283885835` |
| GTM container ID | `GTM-5J78XT47` |
| GTM container URL | https://tagmanager.google.com/#/container/accounts/6052590449/containers/283885835 |
| LightBeam domain ID | `f3f11018-4cc8-41c4-8be0-dde584041da1` |
| CMP integration mode | Pure-GTM (loaded via GTM template, **not** inline) |

## How it works

1. On page load, GTM runs the **Consent Initialization** phase first.
2. Our **LightBeam CMP** tag fires there: it injects `window.lbCookieConsentGcm`,
   loads the CMP bundle, and pushes `gtag('consent','default', …)` — everything
   `denied` except always-on categories.
3. Consent-gated tags (e.g. GA4/Ads) hold back while denied.
4. User interacts with the banner (Accept / Reject / Customize).
5. The CMP maps LightBeam categories → Google consent signals and pushes
   `gtag('consent','update', …)` plus a `LB consent data update` dataLayer event.
6. GTM re-evaluates; now-allowed tags fire.

## GTM configuration

- **Container Settings → Enable consent overview**: on.
- **Tag:** `LightBeam CMP` (from the LightBeam GTM gallery template).
  - **Trigger:** `Consent Initialization – All Pages` (must be this phase, so the
    consent default is set before any other tag evaluates).
  - **Script source** field:
    ```
    https://nbf-cookie-management.s3.us-east-2.amazonaws.com/cookie_consent_6/f3f11018-4cc8-41c4-8be0-dde584041da1/main_32d6808.js?gcm=true&prefCenterOnly=false
    ```
    > This URL comes from the LightBeam admin (Deployment section). `gcm=true` =
    > Google Consent Mode enabled. If the CMP build is regenerated, this src changes
    > (`cookie_consent_<n>` / `main_<hash>.js`) — update the tag and re-publish.

## LightBeam admin configuration

For domain `lightbeam-demo.lightbeamsecurity.com`:

- **Google Consent Mode:** enabled (produces the `gcm=true` script src above).
- **Consent type → category mapping** (a Google signal is `granted` only if *every*
  mapped category is accepted):

  | Google consent type | LightBeam category |
  |---|---|
  | `ad_storage` | Advertisement |
  | `ad_user_data` | Advertisement |
  | `ad_personalization` | Advertisement |
  | `analytics_storage` | Performance |
  | `functionality_storage` | Functional |
  | `personalization_storage` | Functional |
  | `security_storage` | Essential |

- **Categories:** `Advertisement` and `Performance` are opt-out (user-controllable);
  `Essential`, `Functional`, `Necessary`, `Other` are always-on. So only the three
  `ad_*` signals and `analytics_storage` actually gate on user choice.

## On-page code (`index.html`)

Only the GTM snippet is present — container `GTM-5J78XT47` in `<head>` and the
`<noscript>` in `<body>`. The old inline LightBeam `<script>` was removed (see PR #3).
Nothing else about consent lives in the page.

## Verifying

Use **GTM Preview** (Tag Assistant) against the live site:

- **Consent Initialization** event → *Tags Fired* lists `LightBeam CMP`.
- **Consent** tab → *On-page Default* = `denied` for `analytics_storage` + `ad_*`.
- Click Accept / Customize → `LB consent data update` event → *Update* column flips the
  granted signals.

## Changing things later

- **New GCM mapping / banner changes:** do it in LightBeam admin; if it regenerates the
  script src, update the GTM tag's Script source and **publish** the container.
- **Adding gated tags (GA4/Ads):** set each tag's **Consent Settings** to require the
  right signal(s) — GA4 → `analytics_storage`; Ads → `ad_storage` + `ad_user_data` +
  `ad_personalization` — then publish.
- **Any live change** is deployed by merging to `main` (Pages rebuilds automatically).
