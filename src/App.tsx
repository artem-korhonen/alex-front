import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MiniPlayer from "./components/MiniPlayer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LibraryPage from "./pages/LibraryPage";
import ScrollToTop from "./utils/ScrollToTop";
import PlaylistPage from "./pages/PlaylistPage";
import ReleasePage from "./pages/ReleasePage";
import ArtistPage from "./pages/ArtistPage";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="shine-effect p-5 pb-50 min-h-screen flex flex-col bg-[var(--color-bg-black)]">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/playlist/:id" element={<PlaylistPage />} />
                    <Route path="/release/:id" element={<ReleasePage />} />
                    <Route path="/artist/:id" element={<ArtistPage />} />
                </Routes>

                <div className="fixed w-full left-0 bottom-0 flex flex-col gap-2">
                    <MiniPlayer id={1} name={"omg"} cover={"/"} artists={["abc", "abcd", "abcdewwwwwwwwwwwwwwwwwwww"]} is_liked={true} />
                    <NavBar />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;