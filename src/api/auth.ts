import api from "./api";

type registerProps = {
    name: string,
    email: string,
    password: string
}

type loginProps = {
    name: string,
    email: string,
    password: string
}

export async function register({name, email, password}: registerProps) {
    try {
        const response = await api.post("/api/register", { name, email, password });
        return response.data;
    } catch (error: any) {
        console.error("Ошибка регистрации");
    }
};


export async function login({name, email, password}: loginProps) {
    try {
        const response = await api.get(`/api/login?name=${name},email=${email},password=${password}`);
        return response.data;
    } catch (error: any) {
        console.error("Ошибка входа");
        throw error;
    }
}


export async function logout() {
    try {
        const response = await api.get("/api/logout");
        return response.data;
    } catch (error: any) {
        console.error("Ошибка выхода")
        throw error;
    }
}
