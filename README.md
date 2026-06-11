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

The dashboard also includes demo-ready enterprise features: sample calendar
events that auto-set trip context, CRM account profiles, expense policy profiles,
party size/date/time availability scoring, dynamic "why this recommendation"
tags, and admin analytics for time saved, policy fit, accepted recommendations,
and satisfaction.

The getting started page is available at `public/get-started.html` locally and
`/get-started.html` when deployed. It explains the dashboard workflow and
feature set in plain language.

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
