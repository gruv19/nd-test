<template>
  <main class="main">
    <div class="main__header">
      <Header />
    </div>
    <div class="main__search">
      <Search />
    </div>
    <div class="main__manage">
      <div class="main__manage-count">{{ courses.length }} результатов</div>
      <div class="main__sort">
        <Sort @sort="sortCourses" />
      </div>
    </div>
    <div class="main__cards">
      <Card
        v-for="course in courses"
        :key="course.id"
        :id="course.id"
        :img="course.preview_img_path"
        :title="course.title"
        :cost="course.cost"
        :currency="course.cost_currency"
        :series="course.series"
      />
    </div>
    <div class="main__pagination"></div>
  </main>
</template>

<script>

import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Sort from "@/components/Sort.vue";
import Card from "@/components/Card.vue";
import courses from "@/mock.js";

export default {
  name: 'App',
  components: { Header, Search, Sort, Card },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    sortCourses(sortFunction) {
      console.log(sortFunction(this.courses));
    }
  },
  mounted() {
    this.courses = courses;
  }
}
</script>

<style lang="scss">
@import '@/style/style.scss';
</style>
