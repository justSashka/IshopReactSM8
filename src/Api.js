class API {
  constructor(data) {
    this.baseUrl = data.baseUrl
    this.headers = data.headers
  }

  async signUp(email, password) {
    try {
      const response = await fetch(`${this.baseUrl}/signup`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          email,
          group: 'sm8',
          password,
        }),
      })

      if (response.status === 409) {
        throw new Error('This user already registred')
      } else if (response.status === 400) {
        throw new Error('Wrong email or password')
      }
      return response
    } catch (error) {
      return error.message
    }
  }

  async signIn(email, password) {
    try {
      return await fetch(`${this.baseUrl}/signin`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          email,
          password,
        }),
      })
    } catch (error) {
      return error.message
    }
  }

  async getProducts() {
    const token = window.localStorage.getItem('token')
    try {
      return await fetch(`${this.baseUrl}/products`, {
        method: 'GET',
        headers: { headers: this.headers, authorization: `Bearer ${token}` },
      })
    } catch (error) {
      return error.message
    }
  }

  async getProfile() {
    try {
      const token = window.localStorage.getItem('token')
      return await fetch(`${this.baseUrl}/v2/sm8/users/me`, { method: 'GET', headers: { headers: this.headers, authorization: `Bearer ${token}` } })
    } catch (error) {
      return error.message
    }
  }
}

const Api = new API({
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'Content-Type': 'application/json',
  },
  groupId: 'sm8',
})
export default Api
