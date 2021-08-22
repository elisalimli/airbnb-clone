const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || "server";

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  target: NEXTJS_BUILD_TARGET,
};
