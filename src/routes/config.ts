import { authPaths, examplePaths } from "@/routes/paths";

export const DEFAULT_LOGIN_REDIRECT = examplePaths.profile();

export const API_AUTH_PREFIX = "/api/auth";

export const PUBLIC_ROUTES = ["/", "/about", "/contact", "/services"];

export const AUTH_ROUTES = [
  authPaths.login(),
  authPaths.registerRequest(),
  authPaths.registerVerification(),
  authPaths.PasswordResetRequest(),
  authPaths.PasswordReset(),
  authPaths.error(),
];
