import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import CreateRecipe  from "./pages/CreateRecipe";
import  Navbar from "./component/Navbar";
import SavedRecipes from "./pages/SavedRecipes";
import Footer from "./component/Footer"
import Home from "./pages/Home";
import Auth  from "./pages/Auth";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create-recipe" element={<CreateRecipe/>} />
          <Route path="/saved-recipe" element={<SavedRecipes/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
        <Footer/> 
      </Router>
    </div>
  );
}


export default App;
