<!-- Recebe os dados dos livros via propos aqui -->
<template>
  <div class="item">
    <h1 class="text-accent">
      JESUS É BOM E SALVA!
    </h1>
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>
