<script setup>
import { useCategoryStore } from '../user/store/categoryStore'
import { useMaterialStore } from '../user/store/materialStore';
import { useMeubilaireStore } from '../user/store/storeMeubilaire';
import { reactive ,ref, onMounted} from 'vue';
const categoryStore = useCategoryStore()
const meubilaireStore = useMeubilaireStore()
console.log(categoryStore);
console.log('proute,', categoryStore.categories);
const materialStore = useMaterialStore()
const meubilaire = reactive({
    name: '',
    file: null,
    category: '',
    materials: [],
    description: ''

})

console.log('iicicicic fuck',materialStore.materials);
const handleFileChange = (event) => {
    const file = event.target.files[0];
    meubilaire.file = file;
    console.log("Nom du fichier :", file.name);
};

const organizedMaterials = ref([]);

onMounted(() => {
    organizedMaterials.value = [];

    materialStore.materials.forEach((material) => {
        const materialType = material.materialType.name;
        const typeIndex = organizedMaterials.value.findIndex((group) => group[0]?.materialType.name === materialType);

        if (typeIndex === -1) {
            organizedMaterials.value.push([material]);
        } else {
            organizedMaterials.value[typeIndex].push(material);
        }
    });
});

const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', meubilaire.name);
    formData.append('description', meubilaire.description);
    formData.append('category', meubilaire.category);

    meubilaire.materials.forEach((materialId) => {
        formData.append('materials[]', materialId);
    });

    formData.append('files', meubilaire.file);

    try {
        await meubilaireStore.postMeubilaire(formData);
        console.log('Meubilaire ajouté avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'ajout du meubilaire:', error);
    }
};
</script>

<template>
    <div class="container">
        <h1>Ajouter un meuble</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-input">
                <input type="text" placeholder="Nom" v-model="meubilaire.name"
                    class="input input-bordered w-full max-w-xs" />

            </div>

            <div class="form-input">
                <textarea class="textarea textarea-bordered w-80 h-64" placeholder="Bio"
                    v-model="meubilaire.description"></textarea>
            </div>

            <div  class="form-input">
                <select class="select select-bordered w-full max-w-xs" v-model="meubilaire.category">
                    <option class=" text-white" disabled selected value="">Category</option>
                    <option v-for="category in categoryStore.categories" :key="category._id" :value="category._id">
                        {{ category.name }}
                    </option>
                 </select>
            </div>
         
            <div  class="form-input"> 
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="handleFileChange" />
            </div>
            
            <label class="text-left">Matériaux</label>
            <div class="form-input">
                
                <div class="flex flex-row justify-content-center">
                    <div class="flex-column m-4" v-for="(group, index) in organizedMaterials" :key="index">
                        <strong>{{ group[0]?.materialType.name }}</strong>
                        <div>
                            <label v-for="material in group" :key="material._id">
                                <input type="checkbox" v-model="meubilaire.materials" :value="material._id" />
                                {{ material.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Ajouter</button>
        </form>
    </div>
</template>

<style scoped>
.container {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border: 2px solid black;
    margin: auto;
}

.form-input {
    margin: 1rem;
}
</style>