<script setup>
import GuestLayout from '@/Layouts/Guest.vue'
import Label from '@/Components/Label.vue';
import Input from '@/Components/Input.vue';

const emitTest = (e) => {
  console.log(e)
}
</script>

<template>
  <GuestLayout>
    <Label value="件名">タイトル</Label>
    <Input 
      model-value="初期値"
      @update:model-value="emitTest"
    >
    </Input>
  </GuestLayout>
</template>