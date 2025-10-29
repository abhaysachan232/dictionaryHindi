export default {
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  // ✅ Public robots.txt ko force serve karne ke liye
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },
};
