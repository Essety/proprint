const API_BASE = "http://localhost:8080/api";

export const API = {

  LOGIN: `${API_BASE}/auth/login`,

  REGISTER: `${API_BASE}/auth/register`,

  GOOGLE_LOGIN: `${API_BASE}/auth/google`,

  FACEBOOK_LOGIN: `${API_BASE}/auth/facebook`,

  CART_ITEMS: `${API_BASE}/cart`,

};

export default API;