<script setup lang="ts">
const currentYear: number = new Date().getFullYear();

</script>

<template>
  <footer class="bg-terciary">
    <div class="flex flex-wrap justify-center sm:justify-between items-center gap-8 min-h-52 px-10">
      <div class="flex flex-col gap-2 mt-5">
        <h3 class="text-2xl font-bold text-white">Redes sociais</h3>
        <div class="flex gap-2">
          <a href="#">
            <img src="@/assets/logos/instagram.svg" alt="Logo Instagram" class="max-w-10" />
          </a>
          <a href="#">
            <img src="@/assets/logos/facebook.svg" alt="Logo Facebook" class="max-w-10" />
          </a>
          <a href="#">
            <img src="@/assets/logos/x.svg" alt="Logo X" class="max-w-10" />
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center text-center gap-2">
        <img src="@/assets/logos/logo.svg" alt="Logo Instagram" class="max-w-24" />
        <h4 class="text-2xl font-bold text-white">Meu Livro Alugado</h4>
      </div>
    </div>
    <div class="flex justify-center">
      <span class="text-white font-light">
        Copyright &copy; {{ currentYear }} meulivroalugado.com.br
      </span>
    </div>
  </footer>
</template>