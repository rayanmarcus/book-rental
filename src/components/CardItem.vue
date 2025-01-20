<script setup lang="ts">
import { FormatHelper } from '@/logic/helpers/format';
import type { BookCollection } from '@/logic/types/books';
import ModalComponent from './ModalComponent.vue';
import { ref } from 'vue';

const showModal = ref<boolean>(false)
const bookSelected = ref<BookCollection | null>(null)

defineProps<{
  books: BookCollection[] | null
}>()

const openModal = ((book: BookCollection) => {
  bookSelected.value = book
  showModal.value = true
})

const closeModal = (() => {
  showModal.value = false
  bookSelected.value = null
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <div v-for="book in books" :key="book.id" @click="openModal(book)"
      class="flex flex-col justify-center sm:w-1/2 2xl:w-1/3 lg:w-1/3 w-full max-w-sm bg-white rounded-lg gap-2 p-2 cursor-pointer border-2 border-transparent duration-300 hover:border-slate-400">
      <div class="flex justify-center">
        <img :src="book.img" alt="imagem do livro"
          class="max-w-64 w-full rounded-lg transition-transform duration-200 ease-in-out transform hover:-rotate-3" />
      </div>
      <div>
        <h1 class="text-md leading-tight text-primary font-medium">
          {{ book.title }}
        </h1>
        <h2 class="text-sm text-secondary font-light">
          por {{ book.author }}
        </h2>
        <div class="text-2xl text-primary font-extrabold text-end">
          {{ FormatHelper.formatMoney(book.price) }}
        </div>
      </div>
    </div>

    <ModalComponent :is-visible="showModal" :book="bookSelected" @close="closeModal" />
  </div>
</template>
