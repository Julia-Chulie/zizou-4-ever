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

export const fetchMaterials = async () => {
    try {
        const response = await instance.get("/materials")
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération des matériaux", error);
        throw error
    }
}

export const createMeubilaire = async (meubilaire) => {
    try {
        const response = await instance.post("/meubilaires", meubilaire)
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération des matériaux", error);
        throw error
    }
}