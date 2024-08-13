import { api } from "./axiosConfig";

let isRefreshing = false;
let refreshSubscribers: Array<() => void> = [];

// Add a callback to be called when the token is refreshed
const onRefreshToken = (cb: () => void) => {
  refreshSubscribers.push(cb);
};

// Notify all subscribers that the token has been refreshed
const notifySubscribers = () => {
  refreshSubscribers.forEach((cb) => cb());
  refreshSubscribers = []; // Clear subscribers once notified
};

// Function to refresh the token
const refreshToken = async (): Promise<void> => {
  if (isRefreshing) {
    // If a refresh is already in progress, add a callback to be called when the refresh completes
    return new Promise((resolve) => {
      onRefreshToken(() => resolve());
    });
  }

  isRefreshing = true;

  try {
    const response = await api.post("/auth/refresh");

    if (response.status === 200) {
      notifySubscribers(); // Notify all subscribers that refresh was successful
    } else {
      notifySubscribers(); // Notify all subscribers that refresh failed
      throw new Error("Token refresh failed");
    }
  } catch (error) {
    notifySubscribers(); // Notify all subscribers that refresh failed
    throw error;
  } finally {
    isRefreshing = false; // Reset flag to allow future refreshes
  }
};

export { refreshToken };
