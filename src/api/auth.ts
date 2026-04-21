import api from "./api";

type registerProps = {
    username: string,
    email: string,
    password: string
}

type loginProps = {
    username: string,
    email: string,
    password: string
}

export async function register({username, email, password}: registerProps) {
    try {
        const response = await api.post("/api/users", { username, email, password });
        return response.data;
    } catch (error: any) {
        console.error("Ошибка регистрации");
    }
};


export async function login({username, email, password}: loginProps) {
    try {
        const response = await api.get(`/api/users?username=${username},email=${email},password=${password}`);
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
