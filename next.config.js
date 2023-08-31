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
  ]
};
