const api = process.env.CATEGORIES_API_URL || 'http://localhost:3001'
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

export const getAll = () =>
  fetch(`${api}/categories`, { headers })