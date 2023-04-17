// Set a cookie with the given name, value, and expiration time (in days)
export function setCookie(name, value, expiresInDays) {
    const expires = new Date();
    expires.setDate(expires.getDate() + expiresInDays);
    const cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    document.cookie = cookie;
}

// Get the value of a cookie with the given name
export function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

