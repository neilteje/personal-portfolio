const isProd = process.env.NODE_ENV === "production";
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.samyok.us",
      "raw.githubusercontent.com",
      "notify.samyok.us",
      "challengepost-s3-challengepost.netdna-ssl.com",
      "www.brookingsregister.com",
      "brookingsregister.com",
      "www.yankton.net",
      "cloudfront-us-east-1.images.arcpublishing.com",
      "avatars.githubusercontent.com",
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache for a month
  },
  assetPrefix: isProd ? "https://cdn.yok.dev" : undefined,
  rewrites: async () => {
    return [
      {
        source: "/stats/:match*",
        destination: "https://dash.yok.dev/:match*",
      },
    ];
  },
};
