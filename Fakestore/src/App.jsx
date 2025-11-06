
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      { }
      <Navbar />

      { }
      <main className="container my-4">
        <Outlet />
      </main>
    </>
  )
}

export default App