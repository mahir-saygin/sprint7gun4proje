import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login'
import Success from './Components/Success'
import Error from './Components/Error'
import { Switch,Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route exact path="/error">
            <Error/>
          </Route>    
    </Switch>
    </BrowserRouter>
    </>
  )
}
 
export default App
