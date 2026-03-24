import { Home, Layers, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar({ className }: { className?: string}) {
    const location = useLocation();
    const navigate = useNavigate();

    const navBarList = [
        { icon: Home, name: "Главная", path: "/" },
        { icon: Search, name: "Поиск", path: "/search" },
        { icon: Layers, name: "Медиатека", path: "/library" }
    ];
    
    return (
        <div className={`${className} z-1000 p-3 py-5 bg-[var(--color-bg)] border border-[var(--color-border)]`}>
            <ul className="flex justify-around items-center">
                {navBarList.map((element) => {
                    const IconComponent = element.icon;
                    const isActive = element.path === "/" ? location.pathname === "/": location.pathname.startsWith(element.path);

                    return (<li
                        key={`${element.path}-nav`}
                        onClick={() => navigate(element.path)}
                        className={`flex flex-col flex-1 items-center cursor-pointer pb-5 md:pb-0 ${isActive ? "text-[var(--color-primary)] font-bold" : "text-[var(--color-text)]"}`}
                    >
                        <IconComponent size={isActive ? 30 : 27} />
                    </li>);
                })}
            </ul>
        </div>
    )
}

export default NavBar;