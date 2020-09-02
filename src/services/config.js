// --------------------- Axios -----------------------------------
const axios = require("axios").default;
// Set config defaults when creating the instance
export const instance = axios.create({
    //baseURL: "http://gws.garland.pt/APPS/K2API_Dev/api"
    baseURL: "http://localhost:58283/api"
});
// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = `Basic R2FybGFuZEsyQXBpOlBNQHE1NDdQS0YpIngkUkY=`;
// ----------------------------------------------------------------