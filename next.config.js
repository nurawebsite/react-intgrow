module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/public/hscodefinder.html",
      destination: "/pages/hscode.js",
    },
    {
      source: "/public/duty.html",
      destination: "/pages/getduty.js",
    },
    {
      source: "/public/fta.html",
      destination: "/pages/dutysaver.js",
    },
    {
      source: "/public/landingpage.html",
      destination: "/pages/home.js",
    },
    {
      source: "/public/hsnHistory.html",
      destination: "/pages/hsn-history.js",
    },
    {
      source: "/public/dutyHistory.html",
      destination: "/pages/duty-history.js",
    },
    {
      source: "/public/ftaHistory.html",
      destination: "/pages/fta-history.js",
    },
  ]
};
