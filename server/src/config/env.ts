import dotenv from "dotenv";

dotenv.config();

const _env = {
  port: Number(process.env.PORT) || 5000,
  isDev: process.env.NODE_ENV?.toLocaleLowerCase() === "development",
  clientURL: process.env.CLIENT_URL!,

  newsApiKey: process.env.NEWS_API_KEY!,
  geminiApiKey: process.env.GEMINI_API_KEY!,
};

const env = Object.freeze(_env);
export default env;
