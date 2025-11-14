export const environment = {
  apiBaseUrl:
    (window as Window & { __API_BASE_URL__?: string }).__API_BASE_URL__ ??
    'http://localhost:8080',
};

