import instance from "./axios.api";

export const fetchMeubilaires = async () => {
    try {
        const response = await instance.get("/meubilaires");
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des meubles", error);
        throw error
    }
}

export const fetchCategory = async () => {
    try {
        const response = await instance.get("/categories")
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
        throw error
    }
}

export const fetchMaterial = async () => {
    try {
        const response = await instance.get("/materials")
    } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
        throw error
    }
}