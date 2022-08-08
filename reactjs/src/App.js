import DataFetch from "./components/header";
import LogIn from "./components/logIn"
import { Routes, Route } from "react-router-dom"
import LogInContext from "./components/logIn/logInContext";
import { useState } from "react";


function App(){

const [emailContext, setEmailContext] = useState()

  return (
   <div> 
    <LogInContext.Provider value={[emailContext, setEmailContext]}>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/posts" element={<DataFetch />} />
    </Routes>     
    </LogInContext.Provider>
   </div>
  )
}

export default App
