<script setup>
const props = defineProps({
  item: Object
});

const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
        modal.showModal();
    }
}
console.log("hahahahah =>>>" , props.item);
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
                        <button  class="badge badge-outline m-1" @click="() => openModal('modal-' + material._id)">
                            {{ material.name }}
                        </button>
                    </div>
                    <dialog :id="'modal-' + material._id" class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">{{material.name}}</h3>
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