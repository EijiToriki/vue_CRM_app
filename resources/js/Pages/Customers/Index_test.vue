<script setup>
import FlashMessage from '@/Components/FlashMessage.vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Pagination from '@/Components/Pagination.vue'

defineProps({
  customers: Object
})
</script>

<template>
  <ul v-for="customer in customers.data" :key="customer.id">
    <li>{{ customer.id }}</li>
    <li>{{ customer.name }}</li>
  </ul>
  <Pagination class="mt-6" :links="customers.links"></Pagination>
</template>
