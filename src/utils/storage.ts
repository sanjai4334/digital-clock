export const getStoredItem = (key: string): string | null => {
    try {
        return window.localStorage.getItem(key);
    } catch {
        // Accessing localStorage itself can throw in sandboxed iframes.
        return null;
    }
};

export const setStoredItem = (key: string, value: string): void => {
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // Settings still work in memory when persistence is unavailable.
    }
};
