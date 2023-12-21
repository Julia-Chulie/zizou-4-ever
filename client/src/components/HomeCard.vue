<script setup>
const props = defineProps({
  item: Object
});

const openModal = () => {
  const modal = document.getElementById('material_modal');
  if (modal) {
    modal.showModal();
  }
}
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl m-4">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ item.name }}
            <div class="badge badge-secondary">{{ item.category.name }}</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button v-for="material in item.material" :key="material.id" class="badge badge-outline" @click="openModal">
                    {{ material.name }}
                </button>
            </div>
            <dialog id="material_modal" class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Hello!</h3>
                    <p class="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button></button>
                </form>
            </dialog>
        </div>
    </div>
</template>

<style scoped>
</style>