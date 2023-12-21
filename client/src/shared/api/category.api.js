import instance from "./axios.api";


export const fetchCategories = async () => {
    try {
        console.log('okok');
        const response = await instance.get("/categories")
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
        throw error
    }
}