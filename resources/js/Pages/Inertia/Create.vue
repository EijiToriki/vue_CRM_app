<script setup>
import { reactive } from "vue";
import { Inertia } from '@inertiajs/inertia';

defineProps({
  errors:Object
})


const form = reactive(
  {
    title: null,
    content: null
  }
);

const submitFunction = () => {
  Inertia.post('/inertia', form)
}


</script>

<template>
  <form @submit.prevent="submitFunction" >
    <input name="title" v-model="form.title"><br>
    <div v-if="errors.title">{{ erros.title }}</div>
    <input name="content" v-model="form.content"><br>
    <div v-if="errors.content">{{ erros.content }}</div>
    <button>送信</button>
  </form>

</template>