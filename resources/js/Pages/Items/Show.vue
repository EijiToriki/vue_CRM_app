<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';

defineProps({
  item:Object
})
</script>

<template>
    <Head title="商品詳細登録" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                商品詳細登録
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <section class="text-gray-600 body-font relative">
                          <form @submit.prevent="storeItem">
                            <div class="container px-5 py-8 mx-auto">
                              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                                <div class="flex flex-wrap -m-2">
                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label for="name" class="leading-7 text-sm text-gray-600">商品名</label>
                                      <div id="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        {{ item.name }}
                                      </div>
                                    </div>
                                  </div>

                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label for="memo" class="leading-7 text-sm text-gray-600">メモ</label>
                                      <div id="memo" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
                                        {{ item.memo }}
                                      </div>
                                    </div>
                                  </div>

                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label for="price" class="leading-7 text-sm text-gray-600">価格</label>
                                      <div id="price" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        {{ item.price }}
                                      </div>
                                    </div>
                                  </div>

                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label for="status" class="leading-7 text-sm text-gray-600">価格</label>
                                      <div id="status" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        <span v-if="item.is_selling === 1">販売中</span>
                                        <span v-if="item.is_selling === 0">停止中</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="p-2 w-full">
                                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">商品登録</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
