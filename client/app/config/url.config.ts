
export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getgenreUrl = (slug: string) => `/genre/${slug}`
export const getactorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)