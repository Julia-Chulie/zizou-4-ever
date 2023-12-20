import instance from "./axios.api";

export const fetchMeubilairesByMaterial = async () => {
    try {
        const response = await instance.get("/statistics/meubilaires_by_material");
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des meubles", error);
        throw error
    }
}

export const fetchMeubilairesByCategory = async () => {
    try {
        const response = await instance.get("/statistics/meubilaires_by_category")
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
        throw error
    }
}