import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/create" element={<create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
