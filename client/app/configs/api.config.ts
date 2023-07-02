
// export const API_URL = 'http://localhost:3000/api'
export const API_URL = `http://localhost:3000/api`
export const API_SERVER_URL = `http://localhost:4200/api`
const APP_ENV = 'production'
// const REACT_APP_ENV=production
export const IS_PRODUCTION = APP_ENV === 'production'



export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
