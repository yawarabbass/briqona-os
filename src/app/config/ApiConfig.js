/**
 * ============================================================
 * BRIQONA OS
 * API Configuration
 * ============================================================
 */

const ApiConfig = {
  baseURL: "",

  version: "v1",

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  endpoints: {
    auth: "/auth",
    master: "/master",
    workspace: "/workspace",
    companies: "/companies",
    users: "/users",
    modules: "/modules",
    industries: "/industries",
    billing: "/billing",
    ai: "/ai",
  },
};

export default ApiConfig;
