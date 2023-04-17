// utils/cookie.tsx
export const setCookie = (name, value, maxAge = 30) => {
    const secureFlag = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    document.cookie = `${name}=${value}; Max-Age=${maxAge * 24 * 60 * 60}; Path=/; HttpOnly${secureFlag}`;
};

const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

const eraseCookie = (name) => {
    document.cookie = name + "=; Max-Age=-99999999;";
};

export { getCookie, eraseCookie };
