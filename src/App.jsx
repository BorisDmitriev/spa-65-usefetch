import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StarwarsCharacterProvider from "./context/StarwarsCharacterProvider";
import About from "./pages/About";
import CharacterDetails from "./pages/CharacterDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SharedLayout from "./pages/SharedLayout";
import StarwarsCharacter from "./pages/StarwarsCharacter";

function App() {
    return (
        <BrowserRouter>
            <StarwarsCharacterProvider>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<SharedLayout />}>
                            <Route index element={<Home />} />
                            <Route path="/about" element={<About />} />

                            <Route
                                path="/starwarsCharacter"
                                element={<StarwarsCharacter />}
                            />
                            <Route
                                path="/starwarsCharacter/:Id"
                                element={<CharacterDetails />}
                            />

                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </div>
            </StarwarsCharacterProvider>
        </BrowserRouter>
    );
}

export default App;
