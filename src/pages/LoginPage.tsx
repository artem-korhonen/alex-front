import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
    setIsAuth: (value: boolean) => void;
}

function LoginPage({ setIsAuth }: LoginPageProps) {
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onLoginClick = async () => {
        if (name && email && password) {
            try {
                const response = await login({ username, email, password });
            } catch (error: any) {
                console.error("Ошибка входа:", error);
            } finally {
                setIsAuth(true);
                navigate("/");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen shadow">
            <div className="p-10 border border-[var(--color-primary)] rounded rounded-xl flex flex-col gap-4 items-center]">
                <h1 className="text-[var(--color-text)] text-4xl font-bold">Авторизация</h1>

                <div className="flex flex-col w-full max-w-sm gap-4">
                    <label className="flex flex-col gap-1 text-[var(--color-text)]">
                        <span className="text-2xl font-bold">Имя</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Введите имя"
                            className="h-12 w-full px-4 border border-[var(--color-primary)] rounded-xl bg-[var(--color-bg-black)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-[var(--color-text)]">
                        <span className="text-2xl font-bold">Почта</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Введите email"
                            className="h-12 w-full px-4 border border-[var(--color-primary)] rounded-xl bg-[var(--color-bg-black)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-[var(--color-text)]">
                        <span className="text-2xl font-bold">Пароль</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Введите пароль"
                            className="h-12 w-full px-4 border border-[var(--color-primary)] rounded-xl bg-[var(--color-bg-black)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        />
                    </label>
                </div>

                <button className="text-[var(--color-text)] bg-[var(--color-primary)] font-bold  w-full p-4 border border-[var(--color-primary)] rounded cursor-pointer" onClick={onLoginClick}>Вход</button>
            </div>
        </div>
    )
}


export default LoginPage;
