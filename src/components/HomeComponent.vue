<script setup lang="ts">
import HeaderComponent from './HeaderComponent.vue';
import CardItem from './CardItem.vue';
import FooterComponent from './FooterComponent.vue';

</script>

<template>
  <div class="container bg-primary">
    <HeaderComponent />
    <main>
      <!-- Chamar os cards aqui -->
      <!--
      <CardItem>
        <template #icon>
          <DocumentationIcon />
        </template> <template #heading>Documentation</template>
</CardItem>
-->
    </main>
    <FooterComponent />
  </div>
</template>
