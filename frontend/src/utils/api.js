const api = process.env.CATEGORIES_API_URL || 'http://localhost:3001'
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers })

export const getCategoryPosts = categoryId =>
  fetch(`${api}/${categoryId}/posts`, { headers })

export const createPost = data =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

export const votePost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  })
