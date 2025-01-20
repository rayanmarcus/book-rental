<script setup lang="ts">
import HeaderComponent from './HeaderComponent.vue';
import CardItem from './CardItem.vue';
import FooterComponent from './FooterComponent.vue';
import { onMounted, ref } from 'vue';
import { fetchBooks } from '@/api/book';
import type { BookCollection } from '@/logic/types/books';

const booksData = ref<BookCollection[] | null>(null)


onMounted(async () => {
  try {
    booksData.value = await fetchBooks();
  } catch (error) {
    console.error('Erro ao carregar os livros:', error);
  }
});

</script>

<template>
  <div class="bg-primary">
    <HeaderComponent />
    <main class="mb-20">
      <CardItem :books="booksData" />
    </main>
    <FooterComponent />
  </div>
</template>
