export const api = 'b6b0a6bcbf7ed2836babc0bfaad9a9e4'
//This API key is only for personal use and not for commercial use !!!
const baseURl = `https://api.themoviedb.org/3`

export const mountURL = `${baseURl}/trending/movie/week?api_key=${api}`
export const changeURL = `${baseURl}/search/movie?query=`
export const fallBackURL = `${baseURl}/trending/movie/week?api_key=${api}`
export const genreURL = `${baseURl}/genre/movie/list?language=en-US&api_key=${api}`