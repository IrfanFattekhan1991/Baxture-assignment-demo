/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    BASE_URL:'https://jsonplaceholder.typicode.com',
    THUMBMNAIL_URL:'https://api.dicebear.com/7.x/initials/svg?seed'
  }
};

export default nextConfig;
