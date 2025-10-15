import React from "react"
import { Routes, Route } from "react-router"
import RegisterScreen from "./Screens/RegisterScreen/Register.Screen"
import LoginScreen from "./Screens/Login.Screen/Login.Screen"
import AuthMiddleware from "./Middlewares/AuthMiddleware"


function App() {

  return (

    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route element={<AuthMiddleware />}>
        <Route path='/home' element={<h1>Home</h1>} />
      </Route>
    </Routes>

  )
}
export default App
