import dotenv from "dotenv";

dotenv.config();

const _env = {
  port: Number(process.env.PORT) || 5000,
  isDev: process.env.NODE_ENV?.toLocaleLowerCase() === "development",
  clientURL: process.env.CLIENT_URL!,
};

const env = Object.freeze(_env);
export default env;
