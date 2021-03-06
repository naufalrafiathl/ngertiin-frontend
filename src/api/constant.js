/* eslint-disable no-undef */
export const isDevelopment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"

const developmentConstants = {
  API_BASE_URL: "https://ngerti-in-backend.herokuapp.com"
}

const productionConstants = {
  API_BASE_URL: "https://ngerti-in-backend.herokuapp.com"
  // API_BASE_URL: "https://ngertiin.netlify.app/api
}

export default isDevelopment ? developmentConstants : productionConstants