<template>
  <main class="main">
    <div class="main__header">
      <Header />
    </div>
    <div class="main__search">
      <Search @search='searchCourse' />
    </div>
    <div class="main__manage">
      <div class="main__manage-count">{{ findedCourses.length }} результатов</div>
      <div class="main__sort">
        <Sort @sort="sortCourses" />
      </div>
    </div>
    <div class="main__cards">
      <Card
        v-for="course in shownCourses"
        :key="course.id"
        :id="course.id"
        :img="course.preview_img_path"
        :title="course.title"
        :cost="course.cost"
        :currency="course.cost_currency"
        :series="course.series"
      />
    </div>
    <div class="main__pagination">
      <MyPaginate :coursesCount="findedCourses.length" @changePage="changeList" />
    </div>
  </main>
</template>

<script>

import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import Sort from "@/components/Sort.vue";
import Card from "@/components/Card.vue";
import MyPaginate from "@/components/MyPaginate.vue";
import courses from "@/mock.js";


export default {
  name: 'App',
  components: { Header, Search, Sort, Card, MyPaginate },
  data() {
    return {
      courses: [],
      range: {},
      sortFunction: null,
      searchText: '',
    };
  },
  methods: {
    sortCourses(sortFunction) {
      this.sortFunction = sortFunction;
    },
    changeList(range) {
      this.range = range;
    },
    searchCourse(text) {
      this.searchText = text;
    }
  },
  computed: {
    findedCourses() {
      let courses = this.courses;
      if (this.searchText) {
        let text = this.searchText.replaceAll(/([\.\?\/\]\[\^\|\*\+\(\)\{\}\\])/g, '\\$1'); // eslint-disable-line
        courses = courses.filter((item) => {
          const finded = item.title.toUpperCase().search(new RegExp(`${text.toUpperCase()}`, 'gi'));
          if (finded > -1) {
            return item;
          }
        })
      }
      return courses;
    },
    shownCourses() {
      let courses = this.findedCourses;
      if (this.sortFunction) {
        this.sortFunction(courses);
      }
      return courses.slice(this.range.from, this.range.to);
    },
  },
  mounted() {
    this.courses = courses;
  }
}
</script>

<style lang="scss">
@import '@/style/style.scss';
</style>
