# Wander

Wander is a no-login enterprise travel companion dashboard for business
travelers. It recommends restaurants, hotels, meeting spaces, and entertainment
using sample city data for Ashburn, New York, San Francisco, and Las Vegas.
Each city has 10-20 recommendations per category across restaurants, hotels,
entertainment, and meeting spaces. Restaurant recommendations are restricted to
OpenTable-sourced entries and open OpenTable search links, while the app also
supports local preference learning, work/personal mode, budget policy scoring,
allergies, geolocation, and Google Maps directions.

Work and Personal modes use distinct visual themes, and recommendations
recompute when the traveler changes city, anchor location, category, cuisine,
ambience, budget, allergy settings, browser location, or mode.

The default demo trip opens in Las Vegas. The map panel uses an embedded Google
Maps view so streets and nearby businesses are visible, while Wander overlays
the current recommendation page markers. Recommendations are paged in Top 5
groups and the list panel scrolls independently on desktop.

The dashboard also includes demo-ready enterprise features: sample calendar
events that auto-set trip context, CRM account profiles, expense policy profiles,
party size/date/time availability scoring, dynamic "why this recommendation"
tags, and admin analytics for time saved, policy fit, accepted recommendations,
and satisfaction.

The getting started page is available at `public/get-started.html` locally and
`/get-started.html` when deployed. It explains the dashboard workflow and
feature set in plain language.

## Judge-safe demo path

Use the HTTPS demo URL: `https://129.80.207.194.sslip.io/`.

Wander is a public, no-login demo. There is no auth wall, SSO, OAuth, CAPTCHA,
email verification, account picker, paid checkout, or manual approval step. The
dashboard loads directly and the same-origin guide is available at
`https://129.80.207.194.sslip.io/get-started.html`.

Recommended browser verification flow:

1. Open `/` and confirm the Wander dashboard is visible.
2. Confirm the page shows `Public demo - no login required`.
3. Confirm the default city is `Las Vegas, NV`.
4. Change category to `Restaurants`.
5. Use the Top 5 page buttons and verify the list and Google map markers update.
6. Change cuisine or ambience and verify the ranked list and map markers update.
7. Switch between `Work` and `Personal` mode and verify the theme, ranking, and
   explanation tags update.

For deterministic AI Judge verification, use the judge-safe query mode:

- Default work dashboard: `/?judge=1`
- Restaurant page 2: `/?judge=1&category=restaurant&page=2`
- Personal profile mode: `/?judge=1&mode=personal`
- Get Started guide: `/get-started.html`

Judge mode ignores prior browser local storage, starts from seeded demo data,
does not persist clicks, and exposes stable `data-testid` selectors for browser
automation.

Do not use the `Reserve` or `Directions` buttons for automated verification.
Those controls intentionally leave the app origin by opening OpenTable or Google
Maps. The judge-safe proof path should stay on the Wander origin and verify the
seeded recommendation behavior inside the dashboard.

## Production-ready versus hackathon-grade

Production-ready in this demo:

- Public HTTPS access through Caddy.
- Static web app served from OCI Kubernetes in Ashburn.
- No-login dashboard path for judges and stakeholders.
- Responsive dashboard with seeded city, policy, calendar, CRM, hotel,
  restaurant, meeting, and entertainment data.
- Deterministic recommendation scoring with visible explanation tags.
- Browser-local feedback learning through like and dislike buttons.

Hackathon-grade and next steps:

- Data is sampled rather than connected to live travel, HR, CRM, expense,
  calendar, reservation, or OpenTable APIs.
- Recommendation scoring is explainable JavaScript logic rather than a trained
  production model.
- Enterprise identity, role-based access, audit logs, privacy controls, live
  availability, and cross-device learning would be needed before production use.

## Local preview

Open `public/index.html` in a browser. The app is static and does not require a
build step.

## Kubernetes deployment

This repo includes an OCI Kubernetes Engine friendly deployment that serves the
static app from Caddy. The static assets and Caddyfile are mounted through a
ConfigMap, so a local Docker installation is not required. Caddy provides HTTPS
for `https://129.80.207.194.sslip.io/`, which resolves to the OCI Load Balancer
IP.

The Kubernetes namespace and service are intentionally still named `tripsense`
to preserve the existing OCI LoadBalancer IP and HTTPS hostname.

```bash
kubectl apply -k .
kubectl -n tripsense rollout status deployment/tripsense
kubectl -n tripsense get service tripsense
```

When the OCI Load Balancer is provisioned, open the external IP shown for the
`tripsense` service, or use the HTTPS `sslip.io` hostname above.

## Optional container image

If Docker or another container builder is available, this image can also be
built and pushed to OCIR:

```bash
docker build -t wander:latest .
docker tag wander:latest ocir.us-ashburn-1.oci.oraclecloud.com/<tenancy-namespace>/wander:latest
docker push ocir.us-ashburn-1.oci.oraclecloud.com/<tenancy-namespace>/wander:latest
```
