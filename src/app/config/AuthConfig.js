/**
 * ============================================================
 * BRIQONA OS
 * Authentication Configuration
 * ============================================================
 */

const AuthConfig = {
  tokenKey: "briqona_access_token",

  refreshTokenKey: "briqona_refresh_token",

  sessionKey: "briqona_session",

  rememberMeKey: "briqona_remember_me",

  loginRoute: "/login",

  workspaceRoute: "/app",

  masterRoute: "/master",

  logoutRoute: "/",

  sessionTimeout: 60 * 60 * 1000, // 1 Hour

  autoLogout: true,

  enableRememberMe: true,

  enableTwoFactor: false,
};

export default AuthConfig;
