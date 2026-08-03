/**
 * ============================================================
 * BRIQONA OS
 * Global Application Configuration
 * ============================================================
 */

const AppConfig = {
  app: {
    name: "BRIQONA OS",
    version: "1.0.0",
    environment: "development",
  },

  company: {
    name: "BRIQONA",
    website: "https://briqona.com",
  },

  routes: {
    public: "/",
    login: "/login",
    workspace: "/app",
    master: "/master",
  },

  features: {
    ai: true,
    notifications: true,
    realtime: true,
  },
};

export default AppConfig;
