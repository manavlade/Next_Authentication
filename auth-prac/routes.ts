/** 
An array of routes that are accesible to every user 
These routes do not rerquire authentication 
 @type {string[]}
*/
export const publicRoutes = [
    "/"
];


/** 
An array of routes that are used for authentication
These routes will redirect logged in users to /settings page
 @type {string[]}
*/
export const authRoutes = [
    "auth/login",
    "auth/register",
];

/** 
The Prefix for API authentication routes 
routes that start with this prefix are used for API authentication purposes
 @type {string}
*/
export const apiAuthPrefix = "/api/auth";


/***
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"