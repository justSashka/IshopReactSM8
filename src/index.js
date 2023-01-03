import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient} store={store}>
        <RouterProvider router={router} store={store} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
