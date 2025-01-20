<script setup lang="ts">
import { ref } from 'vue';
import { FormatHelper } from '@/logic/helpers/format';
import type { BookCollection } from '@/logic/types/books';

type IProps = {
  book: BookCollection | null
  isVisible: boolean
}

withDefaults(defineProps<IProps>(), {
  isVisible: false
})

const isDisabled = ref(false);
const buttonText = ref('Alugar livro');
const buttonClass = ref('px-20 py-2 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50');
const showBackButton = ref(false)
const successGetBook = ref(false)

const emit = defineEmits(['close']);

const closeModal = () => {
  isDisabled.value = false
  successGetBook.value = false
  showBackButton.value = false
  emit('close');
};

const descriptionImage = ((titleBook: string | undefined) => `Imagem do livro ${titleBook}`)

const handleClick = () => {
  isDisabled.value = true;
  buttonText.value = '... Falta pouco';

  setTimeout(() => {
    successGetBook.value = true
    showBackButton.value = true
    buttonText.value = 'Alugar livro';
  }, 2000);
};


</script>

<template>
  <div v-if="isVisible && book" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg p-6  mx-2 relative max-w-4xl max-h-[90vh] overflow-auto">
      <div class="flex mb-4 pb-1 border-b border-gray-200">
        <h1 class="text-xl text-primary font-medium">Alugar livro</h1>
        <button @click="closeModal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          &times;
        </button>
      </div>
      <div class="flex flex-col sm:flex-col md:flex-row gap-4 flex-wrap">
        <div class="flex flex-col justify-center   items-center  flex-wrap">
          <img :src="book.img" :alt="descriptionImage(book.title)" class="max-w-52 w-full rounded-lg">
        </div>
        <div class="flex flex-col gap-2">
          <div>
            <h1 class="text-2xl text-secondary font-semibold">{{ book.title }} </h1>
            <h2 class="text-xs text-secondary">por {{ book.author }} </h2>
          </div>
          <hr />
          <div class="flex flex-row flex-wrap justify-between gap-4">
            <div class="text-center leading-none">
              <span class="text-xs text-secondary leading-tight">
                Número de páginas
              </span>
              <span class="flex flex-col text-xs text-secondary font-semibold">
                {{ book.page_count }}
              </span>
            </div>
            <div class="text-center leading-none">
              <span class="text-xs text-secondary">
                Idioma
              </span>
              <span class="flex flex-col text-xs text-secondary font-semibold">
                {{ book.language }}
              </span>
            </div>
            <div class="text-center leading-none">
              <span class="text-xs text-secondary">
                Editora
              </span>
              <span class="flex flex-col text-xs text-secondary font-semibold">
                {{ book.publisher }}
              </span>
            </div>
            <div class="text-center leading-none">
              <span class="text-xs text-secondary">
                Data de publicação
              </span>
              <span class="flex flex-col text-xs text-secondary font-semibold">
                {{ FormatHelper.formatDateString(book.publication_date) }}
              </span>
            </div>
          </div>
          <hr />
          <div class="mb-4">
            <ul class="text-xs text-secondary list-disc list-inside">
              <li>Gênero: {{ book.genre }}</li>
              <li>Prazo para devolução: {{ book.return_period }}</li>
              <li>Qualquer dano ao livro durante o período de locação será cobrado uma multa</li>
            </ul>
          </div>
          <div class="flex flex-col items-center gap-4">
            <span v-if="!successGetBook" class="text-3xl text-accent font-extrabold">
              {{ FormatHelper.formatMoney(book.price) }}
            </span>
            <span v-else class="flex gap-2 text-xl text-accent font-extrabold">
              <img src="@/assets/check.svg" alt="Ícone do check de livro alugado" class="w-6">
              Livro alugado com sucesso
            </span>
            <button v-if="!showBackButton" :disabled="isDisabled" :class="buttonClass" @click="handleClick">
              {{ buttonText }}
            </button>
            <button v-if="showBackButton" @click="closeModal"
              class="text-accent px-20 py-2 border-2 border-blue-500 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
