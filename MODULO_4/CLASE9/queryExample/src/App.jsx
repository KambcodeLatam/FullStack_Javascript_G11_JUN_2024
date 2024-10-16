import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchParam from "./components/searchParam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchParam/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
