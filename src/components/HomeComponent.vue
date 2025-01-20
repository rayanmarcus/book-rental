<script setup lang="ts">
import HeaderComponent from './HeaderComponent.vue';
import CardItem from './CardItem.vue';
import FooterComponent from './FooterComponent.vue';
import { onMounted, ref } from 'vue';
import { fetchBooks } from '@/api/book';
import type { BookCollection } from '@/logic/types/books';

const booksData = ref<BookCollection[] | null>(null)
const loading = ref<boolean>(true)

onMounted(async () => {
  try {
    booksData.value = await fetchBooks();
    loading.value = false
  } catch (error) {
    console.error('Erro ao carregar os livros:', error);
  }
});

</script>

<template>
  <div class="bg-primary">
    <HeaderComponent />
    <main class="mb-24 flex justify-center">
      <img v-if="loading" src="@/assets/reload.gif" alt="Imagem de carregando" class="w-16">
      <CardItem v-else :books="booksData" />
    </main>
    <FooterComponent />
  </div>
</template>
