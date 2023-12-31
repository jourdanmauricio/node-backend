require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  backUrl: process.env.RAILWAY_PUBLIC_DOMAIN,
  emailPort: process.env.EMAIL_PORT,
  emailSecure: process.env.EMAIL_SECURE,
  emailSend: process.env.EMAIL_SEND,
  emailSendPass: process.env.EMAIL_SEND_PASS,
  adminFrontEnd: process.env.ADMIN_FRONTEND,
};

module.exports = { config };
