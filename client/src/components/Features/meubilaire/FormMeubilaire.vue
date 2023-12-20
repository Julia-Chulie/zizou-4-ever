<script setup>
const ref('a')
</script>

<template>
    <div class="container">
        <h1>Ajouter un meuble</h1>
        <form>
            <div class="form-input">
                <input type="text" placeholder="Nom" class="input input-bordered w-full max-w-xs" />

            </div>

            <div class="form-input">
                <textarea class="textarea textarea-bordered w-80 h-64" placeholder="Bio"  ></textarea>
            </div>
            <div class="form-input">
                <label>noyer</label>
                <input type="radio" name="radio-1" class="radio m-1" checked />
                <label>Aluminium</label>
                <input type="radio" placeholder="Aluminium" name="radio-1" class="radio " />
            </div>
             
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
        </form>
    </div>
</template>

<style scoped>

.container {
    text-align: center;
    padding: 2rem;
    border: 2px solid black;
    margin: auto;
}
.form-input {
    margin: 1rem;
}
</style>