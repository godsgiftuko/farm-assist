import { config } from 'dotenv';
import { GENDER, ROLE } from 'src/modules/user/enums';
config();

// General
export const APP_NAME = process.env.APP_NAME || 'Farm Assist';
export const APP_DESCRIPTION =
  'This is a REST API service for Farm Assist application. It is an agricultural data collition and a marketplace software.';
export const APP_VERSION = '1.0.0';
export const PASSWORD_HASH_SALT =
  parseInt(process.env.PASSWORD_HASH_SALT, 10) || 10;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
export const JWT_SECRET = process.env.JWT_SECRET || 'farm--assit--secret--key';
export const ADMIN_INFO = {
  firstName: 'Farm',
  middleName: 'Assist',
  lastName: 'Admin',
  email: process.env.ADMIN_EMAIL,
  phone: process.env.ADMIN_PHONE,
  password: process.env.ADMIN_PASSWORD,
  role: ROLE.ADMIN,
};
export const ALLOWED_COUNTRIES = ['NG'];
