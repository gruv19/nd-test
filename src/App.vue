<template>
  <main class="main">
    <div class="main__header">
      <Header />
    </div>
    <div class="main__search">
      <Search />
    </div>
    <div class="main__manage">
      <div class="main__manage-count">100 результатов</div>
      <Sort />
    </div>
    <div class="main__cards">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="main__pagination"></div>
  </main>
</template>

<script>

import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Sort from "@/components/Sort.vue";
import Card from "@/components/Card.vue";

export default {
  name: 'App',
  components: { Header, Search, Sort, Card },
}
</script>
