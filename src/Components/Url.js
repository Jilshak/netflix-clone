import { API_KEY } from "../Constants/Constants";

export const Originals = `discover/tv?api_key=${API_KEY}&with_networks=213&page=${Math.floor(Math.random() * 10) + 1}`
export const Action = `discover/movie?api_key=${API_KEY}&with_genres=28&page=${Math.floor(Math.random() * 10) + 1}`
export const Fantasy = `discover/movie?api_key=${API_KEY}&with_genres=14&page=${Math.floor(Math.random() * 10) + 1}`
export const Documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99&page=${Math.floor(Math.random() * 10) + 1}`
export const History = `discover/movie?api_key=${API_KEY}&with_genres=36&page=${Math.floor(Math.random() * 10) + 1}`
export const Mystery = `discover/movie?api_key=${API_KEY}&with_genres=9648&page=${Math.floor(Math.random() * 10) + 1}`
export const Science_fiction = `discover/movie?api_key=${API_KEY}&with_genres=878&page=${Math.floor(Math.random() * 10) + 1}`
export const Horror = `discover/movie?api_key=${API_KEY}&with_genres=27&page=${Math.floor(Math.random() * 10) + 1}`