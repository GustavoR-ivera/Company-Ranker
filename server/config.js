import {config} from 'dotenv';

config();

//puerto del servidor backend
export const PORT = process.env.PORT || 8800;
export const BACKEND_URL = process.env.BACKEND_URL;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const DOMINIO = process.env.DOMINIO;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT;
export const DB_DATABASE = process.env.DB_DATABASE;