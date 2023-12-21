import instance from "./axios.api";

export const fetchMaterialTypes = async () => {
    try {
        const response = await instance.get("/materialTypes")
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
        throw error
    }
}
