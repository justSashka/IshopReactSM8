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
    } catch (error) {
      alert(error)
    }
  }

  async signIn(email, password) {
    try {
      const response = await fetch(`${this.baseUrl}/signin`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          email,
          password,
        }),
      })
      if (response.status !== 200) {
        throw new Error()
      }
      response.json().then((json) => localStorage.setItem('token', json.token))
    } catch (error) {
      throw new Error(error)
    }
  }

  getProducts() {
    const response = fetch(`${this.baseUrl}/products`, {
      headers: this.headers,
    }).then((res) => res.json())
      .then((result) => result.products)
    return response
  }

  getUser() {
    const data = fetch(`${this.baseUrl}/v2/sm8/users/me`, {
      headers: this.headers,
    }).then((res) => res.json())
      .then((result) => result)
    return data
  }
}

const Api = new API({
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
  groupId: 'sm8',
})
export default Api
