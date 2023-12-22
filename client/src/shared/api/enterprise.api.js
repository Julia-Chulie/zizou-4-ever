import instance from "./axios.api";

export const fetchEnterpriseByMaterialtype = async (materialType) => {
    try {
        const response = await instance.get(`/enterprises/${materialType}`)
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des entreprises", error);
        throw error
    }
}

export const fetchEnterprises = async () => {
    try {
        const response = await instance.get("/enterprises")
        return response.data

    } catch (error) {
        console.error("Erreur lors de la récupération des entreprises", error);
        throw error
    }
}