
// Global configuration for Registrar Hub (edit for production)
window.ENABLE_AUTH = false; // switch to true to enforce login
window.MSAL_CONFIG = {
  auth: { clientId: "<your-client-id>", authority: "https://login.microsoftonline.com/<your-tenant-id>", redirectUri: window.location.origin + "/registrar-hub/index.html" },
  cache: { cacheLocation: "localStorage", storeAuthStateInCookie: false },
};
window.MSAL_SCOPES = ["User.Read", "Mail.Send", "Calendars.ReadWrite"];
window.NOTIFY_WEBHOOK_URL = ""; // paste your Power Automate HTTP trigger URL here
