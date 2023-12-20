<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from './Features/user/store/authStore';
import { onMounted } from 'vue';

const router = useRouter();
const authStore = useAuthStore();
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/" class="justify-between">
        DEZIGN
      </router-link>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <router-link to="/login" class="justify-between">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>