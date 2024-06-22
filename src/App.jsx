import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import Provider from './redux/provider'

function App() {
  return (
    <>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
