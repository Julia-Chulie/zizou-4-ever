<script setup>
import { useEnterpriseStore } from './Features/user/store/enterpriseStore';
const store = useEnterpriseStore();

const props = defineProps({
  item: Object
});

const openModal = async (material) => {
    console.log(material);
    const materialId = material._id
    const modal =  document.getElementById(materialId);
    const idMaterialType =  material.materialType
    console.log('lalala',idMaterialType);
 await store.fetchEnterprise(idMaterialType)
    if (modal) {
        modal.showModal();
    }
}

console.log('storestore', store.enterprise);
// recuperer le materialType grace a l'id dans item   et ensuite recupéré l'entreprise gace au materialtype id
console.log("ITEM>+" ,props.item);
</script> 

<template>
    <div class="card w-96 bg-base-100 shadow-xl m-4">
        <figure><img :src="`http://localhost:8001/uploads/${item?.file?.originalname}`"    alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ item.name }}
            <div class="badge badge-secondary">{{ item.category.name }}</div>
            </h2>
            <p>{{ item.description }}</p>
            <div class="flex flex-row">
                <div v-for="material in item.material" :key="material.id" >
                    <div class="card-actions justify-end">
                        <button  class="badge badge-outline m-1" @click="(e) => openModal(material)">
                            {{ material.name }}
                        </button>
                    </div>
                    <dialog :id="'modal-' + material._id" class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">{{material.name}}</h3>
                            <div class="badge badge-secondary">{{ store.enterprise.name }}</div>
                            <p class="py-4">{{material.description}}</p>
                        </div>
                        <form method="dialog" class="modal-backdrop">
                            <button></button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>