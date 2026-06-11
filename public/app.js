const STORAGE_KEY = "wander-state-v1";

const anchors = {
  ashburn: [
    {
      id: "iad-customer",
      label: "Customer campus",
      subtitle: "Discovery meeting",
      lat: 39.0438,
      lng: -77.4874,
      mapX: 48,
      mapY: 52,
    },
    {
      id: "iad-hotel",
      label: "Conference hotel",
      subtitle: "Check-in after 6 PM",
      lat: 39.0061,
      lng: -77.4308,
      mapX: 38,
      mapY: 62,
    },
  ],
  "new-york": [
    {
      id: "nyc-customer",
      label: "Midtown customer office",
      subtitle: "Executive briefing",
      lat: 40.7549,
      lng: -73.984,
      mapX: 50,
      mapY: 50,
    },
    {
      id: "nyc-hotel",
      label: "Grand Central hotel",
      subtitle: "Overnight stay",
      lat: 40.7527,
      lng: -73.9772,
      mapX: 58,
      mapY: 58,
    },
  ],
  "san-francisco": [
    {
      id: "sf-customer",
      label: "SOMA customer site",
      subtitle: "Product workshop",
      lat: 37.7852,
      lng: -122.3987,
      mapX: 52,
      mapY: 54,
    },
    {
      id: "sf-hotel",
      label: "Union Square hotel",
      subtitle: "Two-night stay",
      lat: 37.788,
      lng: -122.4075,
      mapX: 41,
      mapY: 42,
    },
  ],
  "las-vegas": [
    {
      id: "las-customer",
      label: "Strip customer briefing",
      subtitle: "Hospitality account review",
      lat: 36.1118,
      lng: -115.1728,
      mapX: 52,
      mapY: 50,
    },
    {
      id: "las-hotel",
      label: "Convention hotel",
      subtitle: "Expo base near the Strip",
      lat: 36.1286,
      lng: -115.1644,
      mapX: 57,
      mapY: 38,
    },
  ],
};

const places = [
  {
    id: "ashburn-table",
    city: "ashburn",
    name: "Foundry Table",
    category: "restaurant",
    cuisine: "new american",
    ambience: "quiet",
    summary:
      "Private booths, fast service, and a menu that works for mixed client groups.",
    address: "Ashburn, VA",
    lat: 39.0458,
    lng: -77.483,
    mapX: 58,
    mapY: 42,
    rating: 4.7,
    price: 72,
    distance: 0.6,
    allergens: [],
    tags: ["client-friendly", "quiet", "reservation-ready", "within-policy"],
    workFit: 95,
    personalFit: 74,
    reservationUrl: "https://www.opentable.com/s?term=Foundry%20Table%20Ashburn",
  },
  {
    id: "ashburn-noodle",
    city: "ashburn",
    name: "Juniper Noodle Bar",
    category: "restaurant",
    cuisine: "japanese",
    ambience: "casual",
    summary:
      "Efficient counter seating and lighter options for solo downtime between meetings.",
    address: "Ashburn, VA",
    lat: 39.0351,
    lng: -77.492,
    mapX: 36,
    mapY: 44,
    rating: 4.5,
    price: 34,
    distance: 1.2,
    allergens: ["gluten"],
    tags: ["fast", "solo-friendly", "casual"],
    workFit: 67,
    personalFit: 90,
    reservationUrl: "https://www.opentable.com/s?term=Japanese%20Ashburn",
  },
  {
    id: "ashburn-flight",
    city: "ashburn",
    name: "Flightline Social",
    category: "entertainment",
    cuisine: "new american",
    ambience: "lively",
    summary:
      "A relaxed post-meeting venue with lounge seating, small plates, and local events.",
    address: "Ashburn, VA",
    lat: 39.0119,
    lng: -77.456,
    mapX: 68,
    mapY: 67,
    rating: 4.4,
    price: 48,
    distance: 2.4,
    allergens: ["nuts"],
    tags: ["team-outing", "local-experience", "after-hours"],
    workFit: 78,
    personalFit: 86,
    reservationUrl: "https://www.opentable.com/s?term=Ashburn%20lounge",
  },
  {
    id: "ashburn-hotel",
    city: "ashburn",
    name: "Westbridge Hotel",
    category: "hotel",
    cuisine: "any",
    ambience: "quiet",
    summary:
      "Business hotel with meeting rooms, late check-in, and a direct route from the customer campus.",
    address: "Ashburn, VA",
    lat: 39.0061,
    lng: -77.4308,
    mapX: 38,
    mapY: 62,
    rating: 4.6,
    price: 145,
    distance: 3.1,
    allergens: [],
    tags: ["hotel", "meeting-rooms", "expense-ready"],
    workFit: 84,
    personalFit: 70,
    reservationUrl: "https://www.google.com/travel/hotels?q=Ashburn%20business%20hotel",
  },
  {
    id: "ashburn-studio",
    city: "ashburn",
    name: "Canal Studio Rooms",
    category: "meeting",
    cuisine: "any",
    ambience: "quiet",
    summary:
      "Bookable rooms with whiteboards, catering partners, and strong afternoon availability.",
    address: "Ashburn, VA",
    lat: 39.051,
    lng: -77.468,
    mapX: 63,
    mapY: 28,
    rating: 4.8,
    price: 60,
    distance: 0.9,
    allergens: [],
    tags: ["meeting", "catering", "quiet"],
    workFit: 91,
    personalFit: 58,
    reservationUrl: "https://www.google.com/search?q=meeting%20rooms%20Ashburn%20VA",
  },
  {
    id: "nyc-osteria",
    city: "new-york",
    name: "Madison Osteria",
    category: "restaurant",
    cuisine: "italian",
    ambience: "upscale",
    summary:
      "Polished Midtown dining with a wine list and round tables suited for client dinners.",
    address: "Midtown Manhattan, New York, NY",
    lat: 40.756,
    lng: -73.982,
    mapX: 62,
    mapY: 45,
    rating: 4.6,
    price: 98,
    distance: 0.4,
    allergens: ["gluten"],
    tags: ["client-friendly", "upscale", "reservation-ready"],
    workFit: 94,
    personalFit: 73,
    reservationUrl: "https://www.opentable.com/s?term=Italian%20Midtown%20Manhattan",
  },
  {
    id: "nyc-market",
    city: "new-york",
    name: "Lex Market Hall",
    category: "restaurant",
    cuisine: "new american",
    ambience: "casual",
    summary:
      "Fast group-friendly food hall with broad dietary coverage and easy splitting.",
    address: "Midtown Manhattan, New York, NY",
    lat: 40.752,
    lng: -73.978,
    mapX: 42,
    mapY: 58,
    rating: 4.3,
    price: 38,
    distance: 0.7,
    allergens: [],
    tags: ["fast", "group-friendly", "within-policy"],
    workFit: 80,
    personalFit: 84,
    reservationUrl: "https://www.opentable.com/s?term=Midtown%20food%20hall",
  },
  {
    id: "nyc-jazz",
    city: "new-york",
    name: "East 42 Jazz Room",
    category: "entertainment",
    cuisine: "new american",
    ambience: "lively",
    summary:
      "Short-format sets and reserved seating for a low-friction client evening.",
    address: "Midtown Manhattan, New York, NY",
    lat: 40.7503,
    lng: -73.9712,
    mapX: 72,
    mapY: 65,
    rating: 4.7,
    price: 64,
    distance: 1.0,
    allergens: [],
    tags: ["customer-event", "after-hours", "reservation-ready"],
    workFit: 88,
    personalFit: 91,
    reservationUrl: "https://www.opentable.com/s?term=Jazz%20Midtown%20New%20York",
  },
  {
    id: "sf-izakaya",
    city: "san-francisco",
    name: "Mission Izakaya",
    category: "restaurant",
    cuisine: "japanese",
    ambience: "lively",
    summary:
      "Shared plates, counter seats, and quick rideshare access after a SOMA workshop.",
    address: "SOMA, San Francisco, CA",
    lat: 37.782,
    lng: -122.399,
    mapX: 60,
    mapY: 62,
    rating: 4.6,
    price: 68,
    distance: 0.8,
    allergens: ["shellfish", "gluten"],
    tags: ["shared-plates", "after-hours", "local-experience"],
    workFit: 82,
    personalFit: 94,
    reservationUrl: "https://www.opentable.com/s?term=Izakaya%20SOMA%20San%20Francisco",
  },
  {
    id: "sf-atrium",
    city: "san-francisco",
    name: "Atrium Boardroom Cafe",
    category: "meeting",
    cuisine: "new american",
    ambience: "quiet",
    summary:
      "Quiet reservable tables, power access, and breakfast service before onsite meetings.",
    address: "SOMA, San Francisco, CA",
    lat: 37.7871,
    lng: -122.396,
    mapX: 48,
    mapY: 38,
    rating: 4.5,
    price: 42,
    distance: 0.5,
    allergens: [],
    tags: ["quiet", "breakfast", "meeting"],
    workFit: 92,
    personalFit: 71,
    reservationUrl: "https://www.google.com/search?q=SOMA%20meeting%20cafe%20San%20Francisco",
  },
  {
    id: "sf-view",
    city: "san-francisco",
    name: "Pier View Hotel",
    category: "hotel",
    cuisine: "any",
    ambience: "upscale",
    summary:
      "Policy-aware hotel option with fast access to SOMA and late lobby dining.",
    address: "Union Square, San Francisco, CA",
    lat: 37.788,
    lng: -122.4075,
    mapX: 34,
    mapY: 48,
    rating: 4.4,
    price: 162,
    distance: 1.4,
    allergens: [],
    tags: ["hotel", "expense-ready", "late-dining"],
    workFit: 83,
    personalFit: 80,
    reservationUrl:
      "https://www.google.com/travel/hotels?q=Union%20Square%20business%20hotel",
  },
];

const categoryOrder = ["restaurant", "hotel", "entertainment", "meeting"];
const generatedCountPerCategory = 10;

const cityProfiles = {
  ashburn: {
    label: "Ashburn",
    address: "Ashburn, VA",
    lat: 39.0438,
    lng: -77.4874,
    pricePremium: 0,
    hotelPremium: 0,
    neighborhoods: ["One Loudoun", "Dulles corridor", "Belmont", "Broadlands"],
    localTags: ["near-campus", "easy-parking", "suburban-access"],
  },
  "new-york": {
    label: "Midtown",
    address: "Midtown Manhattan, New York, NY",
    lat: 40.7549,
    lng: -73.984,
    pricePremium: 18,
    hotelPremium: 60,
    neighborhoods: ["Bryant Park", "Grand Central", "Times Square", "NoMad"],
    localTags: ["transit-friendly", "walkable", "client-dinner"],
  },
  "san-francisco": {
    label: "SOMA",
    address: "San Francisco, CA",
    lat: 37.7852,
    lng: -122.3987,
    pricePremium: 12,
    hotelPremium: 48,
    neighborhoods: ["SOMA", "Union Square", "Embarcadero", "Mission Bay"],
    localTags: ["rideshare-ready", "walkable", "tech-customer"],
  },
  "las-vegas": {
    label: "Vegas",
    address: "Las Vegas, NV",
    lat: 36.1118,
    lng: -115.1728,
    pricePremium: 16,
    hotelPremium: 70,
    neighborhoods: ["The Strip", "Convention Center", "Arts District", "Downtown"],
    localTags: ["strip-adjacent", "group-friendly", "late-hours"],
  },
};

const calendarEvents = [
  {
    id: "manual-trip",
    label: "Manual trip context",
    city: "ashburn",
    anchorId: "iad-customer",
    customerId: "internal",
    mode: "work",
    purpose: "client-dinner",
    time: "19:00",
    partySize: 4,
  },
  {
    id: "ashburn-discovery",
    label: "Ashburn discovery dinner",
    city: "ashburn",
    anchorId: "iad-customer",
    customerId: "acme-cloud",
    mode: "work",
    purpose: "client-dinner",
    time: "19:00",
    partySize: 4,
  },
  {
    id: "nyc-briefing",
    label: "NYC executive briefing",
    city: "new-york",
    anchorId: "nyc-customer",
    customerId: "northstar-bank",
    mode: "work",
    purpose: "executive-briefing",
    time: "18:30",
    partySize: 6,
  },
  {
    id: "sf-workshop",
    label: "SOMA product workshop",
    city: "san-francisco",
    anchorId: "sf-customer",
    customerId: "helio-health",
    mode: "work",
    purpose: "workshop",
    time: "18:00",
    partySize: 5,
  },
  {
    id: "vegas-expo",
    label: "Las Vegas expo customer event",
    city: "las-vegas",
    anchorId: "las-customer",
    customerId: "aurora-resorts",
    mode: "work",
    purpose: "client-dinner",
    time: "20:00",
    partySize: 8,
  },
  {
    id: "personal-downtime",
    label: "Personal evening downtime",
    city: "las-vegas",
    anchorId: "las-hotel",
    customerId: "internal",
    mode: "personal",
    purpose: "personal",
    time: "19:30",
    partySize: 1,
  },
];

const customerProfiles = {
  "acme-cloud": {
    name: "Acme Cloud",
    tier: "Strategic",
    stage: "Expansion",
    preference: "quiet",
    policyId: "standard",
  },
  "northstar-bank": {
    name: "Northstar Bank",
    tier: "Enterprise",
    stage: "Renewal",
    preference: "upscale",
    policyId: "executive",
  },
  "helio-health": {
    name: "Helio Health",
    tier: "Enterprise",
    stage: "Implementation",
    preference: "quiet",
    policyId: "standard",
  },
  "aurora-resorts": {
    name: "Aurora Resorts",
    tier: "Strategic",
    stage: "New logo",
    preference: "lively",
    policyId: "executive",
  },
  internal: {
    name: "Internal / personal",
    tier: "Employee",
    stage: "Downtime",
    preference: "casual",
    policyId: "standard",
  },
};

const policyProfiles = {
  standard: {
    label: "Concur standard meal policy",
    limit: 85,
    source: "Concur",
  },
  executive: {
    label: "Executive client entertainment",
    limit: 125,
    source: "Concur",
  },
  conference: {
    label: "Conference per diem",
    limit: 65,
    source: "Travel policy",
  },
};

function defaultDate() {
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.toISOString().slice(0, 10);
}

const openTableRestaurantProfiles = {
  ashburn: [
    ["Cooper's Hawk Winery & Restaurant - Ashburn", "new american", "upscale", 72, ["wine-list"]],
    ["Clyde's Willow Creek Farm", "new american", "quiet", 68, ["client-friendly"]],
    ["The Lost Fox", "new american", "casual", 54, ["one-loudoun"]],
    ["DC Prime Steaks", "steakhouse", "upscale", 92, ["private-dining"]],
    ["Sense of Thai St", "thai", "casual", 48, ["local-favorite"]],
    ["Matchbox - One Loudoun", "new american", "casual", 45, ["group-friendly"]],
    ["Founding Farmers - Reston Station", "new american", "lively", 58, ["nearby-reston"]],
    ["Ruth's Chris Steak House - Reston", "steakhouse", "quiet", 98, ["nearby-reston"]],
    ["North Italia - Reston", "italian", "casual", 56, ["nearby-reston"]],
    ["Barcelona Wine Bar - Reston", "mediterranean", "lively", 62, ["nearby-reston"]],
  ],
  "new-york": [
    ["Quality Meats", "steakhouse", "upscale", 105, ["client-dinner"]],
    ["The Smith - Midtown", "new american", "casual", 58, ["group-friendly"]],
    ["Butter Midtown", "new american", "upscale", 88, ["midtown"]],
    ["Ocean Prime - New York", "seafood", "upscale", 112, ["private-dining"]],
    ["Del Frisco's Double Eagle Steakhouse - New York City", "steakhouse", "upscale", 118, ["client-friendly"]],
    ["STK - NYC Midtown", "steakhouse", "lively", 108, ["after-hours"]],
    ["La Grande Boucherie", "french", "upscale", 86, ["impressive-room"]],
    ["Bryant Park Grill", "new american", "quiet", 74, ["walkable"]],
    ["Blue Fin - New York", "seafood", "lively", 78, ["theater-district"]],
    ["LAVO Italian Restaurant - New York", "italian", "lively", 92, ["customer-event"]],
  ],
  "san-francisco": [
    ["Kokkari Estiatorio", "mediterranean", "upscale", 98, ["client-friendly"]],
    ["House of Prime Rib", "steakhouse", "lively", 96, ["classic-sf"]],
    ["Waterbar", "seafood", "upscale", 92, ["waterfront"]],
    ["Boulevard", "new american", "upscale", 104, ["private-dining"]],
    ["EPIC Steak", "steakhouse", "upscale", 102, ["waterfront"]],
    ["Perbacco", "italian", "quiet", 76, ["financial-district"]],
    ["One Market Restaurant", "new american", "quiet", 72, ["near-soma"]],
    ["La Mar Cocina Peruana", "seafood", "lively", 82, ["embarcadero"]],
    ["Foreign Cinema", "new american", "lively", 86, ["local-experience"]],
    ["The Rotunda at Neiman Marcus - San Francisco", "new american", "upscale", 68, ["union-square"]],
  ],
  "las-vegas": [
    ["Mon Ami Gabi - Las Vegas", "french", "casual", 64, ["strip-adjacent"]],
    ["Eiffel Tower Restaurant", "french", "upscale", 118, ["view"]],
    ["Beauty & Essex - Las Vegas", "new american", "lively", 86, ["customer-event"]],
    ["STK - The Cosmopolitan of Las Vegas", "steakhouse", "lively", 112, ["after-hours"]],
    ["Yardbird Table & Bar - The Venetian Las Vegas", "new american", "casual", 66, ["group-friendly"]],
    ["Hell's Kitchen - Caesars Palace Las Vegas", "new american", "lively", 98, ["strip-adjacent"]],
    ["Bazaar Meat by Jose Andres - Sahara Las Vegas", "steakhouse", "upscale", 124, ["client-dinner"]],
    ["SW Steakhouse - Wynn Las Vegas", "steakhouse", "upscale", 130, ["premium"]],
    ["Joe's Seafood, Prime Steak & Stone Crab - Las Vegas", "seafood", "upscale", 104, ["client-friendly"]],
    ["LAGO - Bellagio", "italian", "upscale", 94, ["view"]],
  ],
};

function openTableSearchUrl(name, address) {
  return `https://www.opentable.com/s?term=${encodeURIComponent(`${name} ${address}`)}`;
}

function createOpenTableRestaurants() {
  return Object.entries(openTableRestaurantProfiles).flatMap(([cityId, restaurants]) => {
    const city = cityProfiles[cityId];
    return restaurants.map(([name, cuisine, ambience, price, extraTags], index) => {
      const angle = (index / restaurants.length) * Math.PI * 2;
      const radius = 0.006 + (index % 5) * 0.0022;
      const mapRadius = 18 + (index % 5) * 5;
      return {
        id: `${cityId}-opentable-${slugify(name)}`,
        city: cityId,
        name,
        category: "restaurant",
        cuisine,
        ambience,
        summary: `${ambience} ${cuisine} restaurant found on OpenTable, selected for business meals, reservations, and traveler relevance near ${city.label}.`,
        address: city.address,
        lat: Number((city.lat + Math.sin(angle) * radius).toFixed(5)),
        lng: Number((city.lng + Math.cos(angle) * radius).toFixed(5)),
        mapX: clamp(Math.round(50 + Math.cos(angle) * mapRadius), 12, 88),
        mapY: clamp(Math.round(50 + Math.sin(angle) * mapRadius), 12, 88),
        rating: Number((4.3 + ((index * 2) % 7) / 10).toFixed(1)),
        price,
        distance: Number((0.4 + index * 0.24).toFixed(1)),
        allergens:
          cuisine === "seafood"
            ? ["shellfish"]
            : cuisine === "italian" || cuisine === "french"
              ? ["gluten"]
              : [],
        tags: [
          "opentable",
          "reservation-ready",
          price <= 85 ? "within-policy" : "premium",
          ...extraTags,
        ],
        workFit: Math.min(98, 84 + ((index * 4) % 15)),
        personalFit: Math.min(98, 76 + ((index * 5) % 18)),
        source: "OpenTable",
        reservationUrl: openTableSearchUrl(name, city.address),
      };
    });
  });
}

const categoryProfiles = {
  hotel: {
    names: [
      "Executive Suites",
      "Transit Hotel",
      "Westbridge Stay",
      "Atrium Hotel",
      "Conference Lodge",
      "Metro Grand",
      "Courtyard Rooms",
      "Summit Hotel",
      "Harborline Hotel",
      "Waypoint Inn",
    ],
    cuisines: ["any"],
    ambiences: ["quiet", "upscale", "quiet", "casual"],
    tags: ["hotel", "expense-ready", "meeting-rooms"],
    basePrice: 126,
    priceStep: 18,
    workBase: 82,
    personalBase: 70,
    summary: (city, cuisine, ambience, neighborhood) =>
      `${ambience} business hotel near ${neighborhood}, with meeting access, late check-in, and practical routing to the trip anchor.`,
  },
  entertainment: {
    names: [
      "Afterhours Lounge",
      "Local Stage",
      "Gallery Walk",
      "Rooftop Social",
      "Tasting Room",
      "Comedy Club",
      "Arena Experience",
      "Jazz Room",
      "Chef Counter",
      "Night Market",
    ],
    cuisines: ["any"],
    ambiences: ["lively", "casual", "upscale", "lively", "quiet"],
    tags: ["after-hours", "local-experience", "team-outing"],
    basePrice: 32,
    priceStep: 8,
    workBase: 76,
    personalBase: 88,
    summary: (city, cuisine, ambience, neighborhood) =>
      `${ambience} local experience around ${neighborhood}, useful for customer hosting, team outings, or personal downtime.`,
  },
  meeting: {
    names: [
      "Focus Rooms",
      "Boardroom Hub",
      "Workshop Studio",
      "Briefing Center",
      "Quiet Commons",
      "Strategy Suite",
      "Catering Studio",
      "Collaboration Loft",
      "Executive Room",
      "Project Space",
    ],
    cuisines: ["any"],
    ambiences: ["quiet", "upscale", "quiet", "casual"],
    tags: ["meeting", "quiet", "catering"],
    basePrice: 38,
    priceStep: 7,
    workBase: 88,
    personalBase: 58,
    summary: (city, cuisine, ambience, neighborhood) =>
      `${ambience} reservable space near ${neighborhood}, suited for prep sessions, customer follow-ups, and working lunches.`,
  },
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function generatedReservationUrl(place, city) {
  const term = encodeURIComponent(`${place.name} ${city.address}`);
  if (place.category === "hotel") {
    return `https://www.google.com/travel/hotels?q=${term}`;
  }
  return `https://www.google.com/search?q=${term}`;
}

function createGeneratedPlaces() {
  return Object.entries(cityProfiles).flatMap(([cityId, city]) =>
    categoryOrder.filter((category) => category !== "restaurant").flatMap((category, categoryIndex) => {
      const profile = categoryProfiles[category];
      return Array.from({ length: generatedCountPerCategory }, (_, index) => {
        const name = `${city.label} ${profile.names[index]}`;
        const neighborhood = city.neighborhoods[index % city.neighborhoods.length];
        const cuisine = profile.cuisines[index % profile.cuisines.length];
        const ambience = profile.ambiences[index % profile.ambiences.length];
        const angle = (index / generatedCountPerCategory) * Math.PI * 2 + categoryIndex * 0.55;
        const radius = 0.006 + (index % 5) * 0.0025 + categoryIndex * 0.001;
        const mapRadius = 17 + (index % 5) * 5;
        const price = Math.round(
          profile.basePrice +
            (index % 5) * profile.priceStep +
            (category === "hotel" ? city.hotelPremium : city.pricePremium),
        );
        const place = {
          id: `${cityId}-${category}-${slugify(profile.names[index])}`,
          city: cityId,
          name,
          category,
          cuisine,
          ambience,
          summary: profile.summary(city, cuisine, ambience, neighborhood),
          address: city.address,
          lat: Number((city.lat + Math.sin(angle) * radius).toFixed(5)),
          lng: Number((city.lng + Math.cos(angle) * radius).toFixed(5)),
          mapX: clamp(Math.round(50 + Math.cos(angle) * mapRadius), 12, 88),
          mapY: clamp(Math.round(50 + Math.sin(angle) * mapRadius), 12, 88),
          rating: Number((4.2 + ((index * 3 + categoryIndex) % 8) / 10).toFixed(1)),
          price,
          distance: Number((0.4 + (index % 10) * 0.28 + categoryIndex * 0.15).toFixed(1)),
          allergens:
            category === "restaurant"
              ? [["gluten"], [], ["nuts"], ["shellfish"], [], [], ["shellfish"], [], ["gluten"], []][index]
              : [],
          tags: [
            ...profile.tags,
            city.localTags[index % city.localTags.length],
            price <= 85 ? "within-policy" : "premium",
          ],
          workFit: Math.min(98, profile.workBase + ((index * 5 + categoryIndex) % 17)),
          personalFit: Math.min(98, profile.personalBase + ((index * 7 + categoryIndex) % 18)),
        };
        return {
          ...place,
          reservationUrl: generatedReservationUrl(place, city),
        };
      });
    }),
  );
}

const recommendationPlaces = [
  ...places.filter((place) => place.category !== "restaurant"),
  ...createOpenTableRestaurants(),
  ...createGeneratedPlaces(),
];

const defaultState = {
  mode: "work",
  view: "map",
  city: "ashburn",
  anchorId: "iad-customer",
  eventId: "ashburn-discovery",
  customerId: "acme-cloud",
  purpose: "client-dinner",
  policyId: "standard",
  reservationDate: defaultDate(),
  reservationTime: "19:00",
  partySize: 4,
  category: "all",
  budget: 85,
  cuisine: "any",
  ambience: "quiet",
  allergies: [],
  feedback: {},
  location: null,
  selectedPlaceId: null,
};

let state = normalizeState(loadState());

const elements = {
  modeButtons: document.querySelectorAll("[data-mode]"),
  viewButtons: document.querySelectorAll("[data-view]"),
  citySelect: document.querySelector("#citySelect"),
  anchorSelect: document.querySelector("#anchorSelect"),
  eventSelect: document.querySelector("#eventSelect"),
  customerSelect: document.querySelector("#customerSelect"),
  purposeSelect: document.querySelector("#purposeSelect"),
  policySelect: document.querySelector("#policySelect"),
  dateInput: document.querySelector("#dateInput"),
  timeSelect: document.querySelector("#timeSelect"),
  partyInput: document.querySelector("#partyInput"),
  partyValue: document.querySelector("#partyValue"),
  budgetInput: document.querySelector("#budgetInput"),
  budgetValue: document.querySelector("#budgetValue"),
  cuisineSelect: document.querySelector("#cuisineSelect"),
  ambienceSelect: document.querySelector("#ambienceSelect"),
  allergyInputs: document.querySelectorAll(".checkbox-group input"),
  locateButton: document.querySelector("#locateButton"),
  categorySelect: document.querySelector("#categorySelect"),
  list: document.querySelector("#recommendationList"),
  mapView: document.querySelector("#mapView"),
  mapMarkers: document.querySelector("#mapMarkers"),
  anchorMarker: document.querySelector("#anchorMarker"),
  tripSubtitle: document.querySelector("#tripSubtitle"),
  modeLabel: document.querySelector("#modeLabel"),
  policyMetric: document.querySelector("#policyMetric"),
  radiusMetric: document.querySelector("#radiusMetric"),
  geoTitle: document.querySelector("#geoTitle"),
  geoDetail: document.querySelector("#geoDetail"),
  recommendationTitle: document.querySelector("#recommendationTitle"),
  modeChip: document.querySelector("#modeChip"),
  enterpriseSignals: document.querySelector("#enterpriseSignals"),
  policySignals: document.querySelector("#policySignals"),
  timeSavedMetric: document.querySelector("#timeSavedMetric"),
  policyFitMetric: document.querySelector("#policyFitMetric"),
  acceptedMetric: document.querySelector("#acceptedMetric"),
  satisfactionMetric: document.querySelector("#satisfactionMetric"),
  cardTemplate: document.querySelector("#placeCardTemplate"),
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...stored };
  } catch {
    return { ...defaultState };
  }
}

function normalizeState(nextState) {
  const city = anchors[nextState.city] ? nextState.city : defaultState.city;
  const cityAnchors = anchors[city];
  const anchorId = cityAnchors.some((anchor) => anchor.id === nextState.anchorId)
    ? nextState.anchorId
    : cityAnchors[0].id;
  const eventId = calendarEvents.some((event) => event.id === nextState.eventId)
    ? nextState.eventId
    : defaultState.eventId;
  const customerId = customerProfiles[nextState.customerId]
    ? nextState.customerId
    : defaultState.customerId;
  const policyId = policyProfiles[nextState.policyId]
    ? nextState.policyId
    : customerProfiles[customerId].policyId;
  const category = ["all", ...categoryOrder].includes(nextState.category)
    ? nextState.category
    : defaultState.category;

  return {
    ...nextState,
    city,
    anchorId,
    eventId,
    customerId,
    policyId,
    purpose: nextState.purpose || defaultState.purpose,
    reservationDate: nextState.reservationDate || defaultDate(),
    reservationTime: nextState.reservationTime || defaultState.reservationTime,
    partySize: clamp(Number(nextState.partySize) || defaultState.partySize, 1, 12),
    category,
    budget: Number(nextState.budget) || policyProfiles[policyId].limit,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function activeAnchor() {
  return anchors[state.city].find((anchor) => anchor.id === state.anchorId);
}

function activeOrigin() {
  return state.location || activeAnchor();
}

function activeCustomer() {
  return customerProfiles[state.customerId] || customerProfiles[defaultState.customerId];
}

function activePolicy() {
  return policyProfiles[state.policyId] || policyProfiles[activeCustomer().policyId];
}

function availabilityFor(place) {
  if (place.category !== "restaurant") {
    return { status: "Ready", score: 6, tag: "bookable" };
  }

  const timeScore = Number(state.reservationTime.replace(":", ""));
  const seed =
    place.id.length +
    state.partySize * 3 +
    timeScore +
    new Date(state.reservationDate).getDate();
  const bucket = seed % 5;

  if (state.partySize > 8 && !place.tags.includes("group-friendly")) {
    return { status: "Limited", score: -12, tag: "limited-party-size" };
  }
  if (bucket === 0) {
    return { status: "Waitlist", score: -8, tag: "waitlist" };
  }
  if (bucket === 1) {
    return { status: "Limited", score: -3, tag: "limited" };
  }
  return { status: "Available", score: 10, tag: "available" };
}

function purposeScore(place) {
  if (state.mode === "personal" || state.purpose === "personal") {
    return place.tags.includes("local-experience") || place.ambience === "lively" ? 8 : 2;
  }
  if (state.purpose === "executive-briefing") {
    return place.ambience === "quiet" || place.tags.includes("private-dining") ? 10 : -2;
  }
  if (state.purpose === "workshop") {
    return place.category === "meeting" || place.tags.includes("group-friendly") ? 10 : 1;
  }
  if (state.purpose === "team-outing") {
    return place.tags.includes("team-outing") || place.tags.includes("group-friendly") ? 10 : 0;
  }
  return place.tags.includes("client-friendly") || place.tags.includes("client-dinner") ? 10 : 1;
}

function crmScore(place) {
  const customer = activeCustomer();
  if (state.mode !== "work" || customer.tier === "Employee") {
    return 0;
  }
  const tierBoost = customer.tier === "Strategic" ? 6 : 3;
  const preferenceBoost = place.ambience === customer.preference ? 5 : 0;
  const premiumPenalty =
    customer.tier !== "Strategic" && place.price > activePolicy().limit ? -5 : 0;
  return tierBoost + preferenceBoost + premiumPenalty;
}

function dynamicTags(place) {
  const availability = availabilityFor(place);
  const customer = activeCustomer();
  const tags = [
    availability.tag,
    place.price <= activePolicy().limit ? "policy-fit" : "policy-review",
    state.mode === "work" ? customer.tier.toLowerCase() : "personalized",
  ];

  if (state.partySize >= 5) {
    tags.push("party-size-fit");
  }
  if (place.ambience === customer.preference && state.mode === "work") {
    tags.push("crm-match");
  }
  return tags;
}

function distanceMiles(a, b) {
  const radius = 3958.8;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}

function placeScore(place) {
  const modeFit = state.mode === "work" ? place.workFit : place.personalFit;
  const policyLimit = Math.min(state.budget, activePolicy().limit);
  const budgetFit = place.price <= policyLimit ? 100 : Math.max(20, 100 - (place.price - policyLimit) * 1.5);
  const cuisineFit =
    state.cuisine === "any" || place.cuisine === "any" || place.cuisine === state.cuisine
      ? 100
      : 60;
  const ambienceFit = place.ambience === state.ambience ? 100 : 70;
  const allergyPenalty = place.allergens.some((allergen) => state.allergies.includes(allergen))
    ? 28
    : 0;
  const liveDistance = distanceMiles(activeOrigin(), { lat: place.lat, lng: place.lng });
  const distanceFit = Math.max(35, 100 - liveDistance * 16);
  const learned = (state.feedback[place.id] || 0) * 7;
  const availability = availabilityFor(place);

  return Math.round(
    modeFit * 0.36 +
      budgetFit * 0.18 +
      cuisineFit * 0.16 +
      ambienceFit * 0.12 +
      distanceFit * 0.12 +
      availability.score +
      purposeScore(place) +
      crmScore(place) +
      learned -
      allergyPenalty,
  );
}

function matchingPlaces() {
  return recommendationPlaces
    .filter((place) => place.city === state.city)
    .filter((place) => state.category === "all" || place.category === state.category)
    .filter((place) =>
      state.cuisine === "any" || place.cuisine === "any" || place.cuisine === state.cuisine,
    )
    .map((place) => ({
      ...place,
      score: placeScore(place),
      availability: availabilityFor(place),
      computedDistance: distanceMiles(activeOrigin(), { lat: place.lat, lng: place.lng }),
    }))
    .sort((a, b) => b.score - a.score || a.computedDistance - b.computedDistance);
}

function formatCategory(category) {
  const labels = {
    restaurant: "Restaurant",
    hotel: "Hotel",
    entertainment: "Entertainment",
    meeting: "Meeting space",
  };
  return labels[category] || category;
}

function mapsUrl(place) {
  const destination = encodeURIComponent(`${place.name}, ${place.address}`);
  if (state.location) {
    return `https://www.google.com/maps/dir/?api=1&origin=${state.location.lat},${state.location.lng}&destination=${destination}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

function sharePlace(place) {
  const text = `${place.name} - ${formatCategory(place.category)} in ${place.address}. ${place.summary}`;
  if (navigator.share) {
    navigator.share({ title: place.name, text, url: mapsUrl(place) });
    return;
  }
  navigator.clipboard?.writeText(`${text} ${mapsUrl(place)}`);
}

function updateFeedback(placeId, delta) {
  const current = state.feedback[placeId] || 0;
  state.feedback[placeId] = Math.max(-3, Math.min(3, current + delta));
  saveState();
  render();
}

function renderAnchors() {
  elements.anchorSelect.innerHTML = "";
  anchors[state.city].forEach((anchor) => {
    const option = document.createElement("option");
    option.value = anchor.id;
    option.textContent = anchor.label;
    elements.anchorSelect.append(option);
  });
}

function renderEnterpriseOptions() {
  elements.eventSelect.innerHTML = "";
  calendarEvents.forEach((event) => {
    const option = document.createElement("option");
    option.value = event.id;
    option.textContent = event.label;
    elements.eventSelect.append(option);
  });

  elements.customerSelect.innerHTML = "";
  Object.entries(customerProfiles).forEach(([id, customer]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = customer.name;
    elements.customerSelect.append(option);
  });

  elements.policySelect.innerHTML = "";
  Object.entries(policyProfiles).forEach(([id, policy]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `${policy.label} - $${policy.limit}`;
    elements.policySelect.append(option);
  });
}

function renderEnterpriseSignals() {
  const customer = activeCustomer();
  elements.enterpriseSignals.innerHTML = `
    <div class="insight"><strong>${customer.tier}</strong> account in ${customer.stage}; prefers ${customer.preference} venues.</div>
    <div class="insight"><strong>${state.purpose.replaceAll("-", " ")}</strong> context is included in AI ranking.</div>
  `;
}

function renderPolicySignals() {
  const policy = activePolicy();
  elements.policySignals.innerHTML = `
    <div class="insight"><strong>${policy.source}</strong> limit is $${policy.limit}; traveler slider is $${state.budget}.</div>
    <div class="insight"><strong>${state.partySize}</strong> guests at ${elements.timeSelect.options[elements.timeSelect.selectedIndex]?.text || state.reservationTime}; availability is simulated for demo proof.</div>
  `;
}

function renderAnalytics(sortedPlaces) {
  const visible = sortedPlaces.length || 1;
  const policyFit = Math.round(
    (sortedPlaces.filter((place) => place.price <= activePolicy().limit).length / visible) * 100,
  );
  const accepted = Object.values(state.feedback).filter((value) => value > 0).length;
  const satisfaction = Math.min(98, 72 + accepted * 5 + (state.mode === "personal" ? 4 : 0));
  const timeSaved = Math.max(12, Math.min(45, sortedPlaces.length * 2 + state.partySize));

  elements.timeSavedMetric.textContent = `${timeSaved} min`;
  elements.policyFitMetric.textContent = `${policyFit}%`;
  elements.acceptedMetric.textContent = accepted;
  elements.satisfactionMetric.textContent = `${satisfaction}%`;
}

function renderControls() {
  document.body.dataset.mode = state.mode;

  elements.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  elements.viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  elements.citySelect.value = state.city;
  elements.anchorSelect.value = state.anchorId;
  elements.eventSelect.value = state.eventId;
  elements.customerSelect.value = state.customerId;
  elements.purposeSelect.value = state.purpose;
  elements.policySelect.value = state.policyId;
  elements.dateInput.value = state.reservationDate;
  elements.timeSelect.value = state.reservationTime;
  elements.partyInput.value = state.partySize;
  elements.partyValue.textContent = state.partySize;
  elements.budgetInput.value = state.budget;
  elements.budgetValue.textContent = `$${state.budget}`;
  elements.cuisineSelect.value = state.cuisine;
  elements.ambienceSelect.value = state.ambience;
  elements.categorySelect.value = state.category;
  elements.policyMetric.textContent = `$${state.budget}`;
  elements.modeLabel.textContent =
    state.mode === "work" ? "Work mode: client entertainment" : "Personal mode: downtime";
  elements.recommendationTitle.textContent =
    state.mode === "work" ? "Work recommendations for this location" : "Personal recommendations for this location";
  elements.modeChip.querySelector("strong").textContent =
    state.mode === "work" ? "Work mode" : "Personal mode";

  elements.allergyInputs.forEach((input) => {
    input.checked = state.allergies.includes(input.value);
  });

  const anchor = activeAnchor();
  elements.tripSubtitle.textContent = `${anchor.label} - ${anchor.subtitle}`;
  elements.anchorMarker.style.left = `${anchor.mapX}%`;
  elements.anchorMarker.style.top = `${anchor.mapY}%`;

  elements.mapView.classList.toggle("hidden", state.view !== "map");
  renderEnterpriseSignals();
  renderPolicySignals();
}

function renderGeoStatus(sortedPlaces) {
  if (!state.location) {
    const nearest = sortedPlaces[0];
    elements.geoTitle.textContent = "Anchor-based scoring";
    elements.geoDetail.textContent = nearest
      ? `${nearest.name} is ${nearest.computedDistance.toFixed(1)} mi from ${activeAnchor().label}.`
      : "No matching venues for the current filters.";
    elements.radiusMetric.textContent = nearest
      ? `${nearest.computedDistance.toFixed(1)} mi`
      : "0 mi";
    return;
  }

  const nearest = sortedPlaces
    .slice()
    .sort((a, b) => a.computedDistance - b.computedDistance)[0];

  if (!nearest) {
    elements.geoTitle.textContent = "Location active";
    elements.geoDetail.textContent = "No matching venues in this category.";
    return;
  }

  elements.geoTitle.textContent =
    nearest.computedDistance <= 0.5 ? "Geofence match" : "Location active";
  elements.geoDetail.textContent = `${nearest.name} is ${nearest.computedDistance.toFixed(1)} mi from you.`;
  elements.radiusMetric.textContent = `${Math.max(0.5, nearest.computedDistance).toFixed(1)} mi`;
}

function renderCards(sortedPlaces) {
  elements.list.innerHTML = "";

  sortedPlaces.forEach((place, index) => {
    const node = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.placeId = place.id;
    node.classList.toggle("is-highlighted", state.selectedPlaceId === place.id || (!state.selectedPlaceId && index === 0));
    node.querySelector(".place-type").textContent = formatCategory(place.category);
    node.querySelector("h3").textContent = place.name;
    node.querySelector(".score-pill").textContent = `${place.score}% fit`;
    node.querySelector(".place-summary").textContent = place.summary;

    const tags = node.querySelector(".tag-row");
    [...new Set([...dynamicTags(place), ...place.tags])].slice(0, 6).forEach((tag) => {
      const tagNode = document.createElement("span");
      tagNode.className = "tag";
      tagNode.textContent = tag;
      tags.append(tagNode);
    });

    const sourceMeta = place.source ? `<span>${place.source}</span>` : "";
    node.querySelector(".place-meta").innerHTML = `
      <span>${place.computedDistance.toFixed(1)} mi</span>
      <span>$${place.price} est.</span>
      <span>${place.rating.toFixed(1)} rating</span>
      <span>${place.availability.status}</span>
      ${sourceMeta}
    `;

    if (place.category === "restaurant") {
      node.querySelector(".reserve-button").textContent = "OpenTable";
    }

    node.querySelector(".reserve-button").addEventListener("click", () => {
      window.open(place.reservationUrl, "_blank", "noopener,noreferrer");
    });
    node.querySelector(".maps-button").addEventListener("click", () => {
      window.open(mapsUrl(place), "_blank", "noopener,noreferrer");
    });
    node.querySelector(".like-button").addEventListener("click", () => updateFeedback(place.id, 1));
    node.querySelector(".dislike-button").addEventListener("click", () => updateFeedback(place.id, -1));
    node.querySelector(".share-button").addEventListener("click", () => sharePlace(place));
    node.addEventListener("mouseenter", () => {
      state.selectedPlaceId = place.id;
      saveState();
      renderMap(sortedPlaces);
      highlightCards();
    });

    elements.list.append(node);
  });
}

function highlightCards() {
  document.querySelectorAll(".place-card").forEach((card) => {
    card.classList.toggle("is-highlighted", card.dataset.placeId === state.selectedPlaceId);
  });
}

function renderMap(sortedPlaces) {
  elements.mapMarkers.innerHTML = "";
  sortedPlaces.forEach((place, index) => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "map-marker";
    marker.dataset.category = place.category;
    marker.style.left = `${place.mapX}%`;
    marker.style.top = `${place.mapY}%`;
    marker.textContent = index + 1;
    marker.title = `${place.name}, ${place.score}% fit`;
    marker.classList.toggle("is-selected", state.selectedPlaceId === place.id);
    marker.addEventListener("click", () => {
      state.selectedPlaceId = place.id;
      saveState();
      renderMap(sortedPlaces);
      highlightCards();
      document.querySelector(`[data-place-id="${place.id}"]`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
    elements.mapMarkers.append(marker);
  });
}

function render() {
  renderAnchors();
  renderEnterpriseOptions();
  renderControls();
  const sortedPlaces = matchingPlaces();
  if (!state.selectedPlaceId || !sortedPlaces.some((place) => place.id === state.selectedPlaceId)) {
    state.selectedPlaceId = sortedPlaces[0]?.id || null;
  }
  renderGeoStatus(sortedPlaces);
  renderAnalytics(sortedPlaces);
  renderCards(sortedPlaces);
  renderMap(sortedPlaces);
}

function updateFilters(updates, options = {}) {
  state = normalizeState({
    ...state,
    ...updates,
    selectedPlaceId: options.keepSelection ? state.selectedPlaceId : null,
  });
  saveState();
  render();
}

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateFilters({
      mode: button.dataset.mode,
      purpose: button.dataset.mode === "personal" ? "personal" : state.purpose === "personal" ? "client-dinner" : state.purpose,
    });
  });
});

elements.viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateFilters({ view: button.dataset.view }, { keepSelection: true });
  });
});

elements.eventSelect.addEventListener("change", (event) => {
  const calendarEvent = calendarEvents.find((item) => item.id === event.target.value);
  if (!calendarEvent) {
    return;
  }

  const customer = customerProfiles[calendarEvent.customerId];
  const policyId = customer?.policyId || state.policyId;

  updateFilters({
    eventId: calendarEvent.id,
    city: calendarEvent.city,
    anchorId: calendarEvent.anchorId,
    customerId: calendarEvent.customerId,
    mode: calendarEvent.mode,
    purpose: calendarEvent.purpose,
    reservationTime: calendarEvent.time,
    partySize: calendarEvent.partySize,
    policyId,
    budget: policyProfiles[policyId].limit,
    ambience: customer?.preference || state.ambience,
    location: null,
  });
});

elements.customerSelect.addEventListener("change", (event) => {
  const customer = customerProfiles[event.target.value];
  updateFilters({
    customerId: event.target.value,
    policyId: customer.policyId,
    budget: policyProfiles[customer.policyId].limit,
    ambience: state.mode === "work" ? customer.preference : state.ambience,
  });
});

elements.purposeSelect.addEventListener("change", (event) => {
  updateFilters({
    purpose: event.target.value,
    mode: event.target.value === "personal" ? "personal" : state.mode,
  });
});

elements.policySelect.addEventListener("change", (event) => {
  updateFilters({
    policyId: event.target.value,
    budget: policyProfiles[event.target.value].limit,
  });
});

elements.dateInput.addEventListener("change", (event) => {
  updateFilters({ reservationDate: event.target.value || defaultDate() });
});

elements.timeSelect.addEventListener("change", (event) => {
  updateFilters({ reservationTime: event.target.value });
});

elements.partyInput.addEventListener("input", (event) => {
  updateFilters({ partySize: Number(event.target.value) });
});

elements.citySelect.addEventListener("change", (event) => {
  updateFilters({
    eventId: "manual-trip",
    city: event.target.value,
    anchorId: anchors[event.target.value][0].id,
    location: null,
  });
});

elements.anchorSelect.addEventListener("change", (event) => {
  updateFilters({ eventId: "manual-trip", anchorId: event.target.value, location: null });
});

elements.budgetInput.addEventListener("input", (event) => {
  updateFilters({ budget: Number(event.target.value) });
});

elements.cuisineSelect.addEventListener("change", (event) => {
  updateFilters({ cuisine: event.target.value });
});

elements.ambienceSelect.addEventListener("change", (event) => {
  updateFilters({ ambience: event.target.value });
});

elements.categorySelect.addEventListener("change", (event) => {
  updateFilters({ category: event.target.value });
});

elements.allergyInputs.forEach((input) => {
  input.addEventListener("change", () => {
    updateFilters({
      allergies: Array.from(elements.allergyInputs)
        .filter((item) => item.checked)
        .map((item) => item.value),
    });
  });
});

elements.locateButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    elements.geoTitle.textContent = "Location unavailable";
    elements.geoDetail.textContent = "This browser does not expose geolocation.";
    return;
  }

  elements.geoTitle.textContent = "Locating";
  elements.geoDetail.textContent = "Checking proximity to Wander recommendations.";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      updateFilters({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    },
    () => {
      elements.geoTitle.textContent = "Location blocked";
      elements.geoDetail.textContent = "Permission is needed for proximity scoring.";
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 },
  );
});

render();
