import api from "./api";

type registerProps = {
    email: string,
    password: string
}

type loginProps = {
    email: string,
    password: string
}

export async function register({email, password}: registerProps) {
    try {
        const response = await api.post("/api/register", { email, password });
        return response.data;
    } catch (error: any) {
        console.error("Ошибка регистрации");
    }
};

export async function login({email, password}: loginProps) {
    try {
        const response = await api.get(`/api/login&email=${email},password=${password}`);
        return response.data;
    } catch (error: any) {
        console.error("Ошибка входа")
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/logout");
        return response.data;
    } catch (error: any) {
        console.error("Ошибка выхода")
    }
}