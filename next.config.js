/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000/",
    NEXTAUTH_URL: "http://localhost:3000/",
    DB_LOCAL_URI: "mongodb+srv://pranjalkharche6:pranjal@pranjal.rrkznaj.mongodb.net/?retryWrites=true&w=majority&appName=pranjal",
    DB_URI: "mongodb+srv://pranjalkharche6:pranjal@pranjal.rrkznaj.mongodb.net/?retryWrites=true&w=majority&appName=pranjal"

    STRIPE_WEBHOOK_SECRET: "whsec_z4wgPN6bIbx6vQSyQG7CE1UnsmIRWkB8",

    STRIPE_SECRET_KEY: "sk_test_51OZCuASHNX00C6dpp0kM",

    CLOUDINARY_CLOUD_NAME: "dt0xgxohw",
    CLOUDINARY_API_KEY: "814853432562843",
    CLOUDINARY_API_SECRET: "_6gSaARLQBo8b5Tb_gsrHIv6mFw",

    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
