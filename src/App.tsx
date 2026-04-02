import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import MiniPlayer from "./components/MiniPlayer";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LibraryPage from "./pages/LibraryPage";
import ScrollToTop from "./utils/ScrollToTop";
import PlaylistPage from "./pages/PlaylistPage";
import ReleasePage from "./pages/ReleasePage";
import ArtistPage from "./pages/ArtistPage";
import LoginPage from "./pages/LoginPage";
import { useState, type JSX } from "react";


function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const MainLayout = () => (
        <div className="shine-effect p-5 pb-50 min-h-screen flex flex-col bg-[var(--color-bg-black)]">
            <Outlet />

            <div className="fixed w-full left-0 bottom-0 flex flex-col gap-2">
                <MiniPlayer
                    id={1}
                    name={"omg"}
                    cover={"/"}
                    artists={["abc", "abcd", "abcdewwwwwwwwwwwwwwwwwwww"]}
                    is_liked={true}
                />
                <NavBar />
            </div>
        </div>
    );

    const PublicRoute = ({ children }: { children: JSX.Element }) => {
        return !isAuth ? children : <Navigate to="/" />;
    };

    const PrivateRoute = ({ children }: { children: JSX.Element }) => {
        return isAuth ? children : <Navigate to="/login" />;
    };

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage setIsAuth={setIsAuth} />
                        </PublicRoute>
                    }
                />

                <Route
                    element={
                        <PrivateRoute>
                            <MainLayout />
                        </PrivateRoute>
                    }
                >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/playlist/:id" element={<PlaylistPage />} />
                    <Route path="/release/:id" element={<ReleasePage />} />
                    <Route path="/artist/:id" element={<ArtistPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;