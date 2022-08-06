import DataFetch from "./components/header";
import LogIn from "./components/logIn"
import { Routes, Route } from "react-router-dom"


function App(){
  return (
   <div> 
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/posts" element={<DataFetch />} />
    </Routes>
   </div>
  )
}

export default App

//Я не знала, как показать две страницы без роутинга, поэтому одну просто закомментировала