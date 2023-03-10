import { Route, Routes } from "react-router-dom";
import ProductPicker from "./components/ProductPicker";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ProductPicker />} />
            </Routes>
        </div>
    );
}

export default App;
