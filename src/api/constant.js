/* eslint-disable no-undef */
export const isDevelopment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"

const developmentConstants = {
  API_BASE_URL: "http://127.0.0.1:8000"
}

const productionConstants = {
  API_BASE_URL: "http://127.0.0.1:8000"
  // API_BASE_URL: "https://ngertiin.netlify.app/api
}

export default isDevelopment ? developmentConstants : productionConstants