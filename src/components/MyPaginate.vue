<template>
  <Paginate
    v-model="currentPage"
    :page-count="myPageCount"
    :page-range="myPageRange"
    :margin-pages="1"
    :click-handler="choosePage"
    :container-class="'my-paginate'"
    :prev-text="prevIcon"
    :next-text="nextIcon"
    :page-class="'my-paginate__item'"
    :prev-class="'my-paginate__item my-paginate__item--prev'"
    :next-class="'my-paginate__item my-paginate__item--next'"
    :page-link-class="'my-paginate__link'"
    :prev-link-class="'my-paginate__link my-paginate__link--prev'"
    :next-link-class="'my-paginate__link my-paginate__link--next'"
  />
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
  name: 'MyPaginate',
  components: { Paginate },
  props: {
    coursesCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      prevIcon: `<svg class="my-paginate__link-icon my-paginate__link-icon--prev" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.06066 0.93934C2.47487 0.353553 1.52513 0.353553 0.93934 0.93934C0.353553 1.52513 0.353553 2.47487 0.93934 3.06066L3.06066 0.93934ZM6 6L7.06066 7.06066C7.64645 6.47487 7.64645 5.52513 7.06066 4.93934L6 6ZM0.93934 8.93934C0.353553 9.52513 0.353553 10.4749 0.93934 11.0607C1.52513 11.6464 2.47487 11.6464 3.06066 11.0607L0.93934 8.93934ZM0.93934 3.06066L4.93934 7.06066L7.06066 4.93934L3.06066 0.93934L0.93934 3.06066ZM4.93934 4.93934L0.93934 8.93934L3.06066 11.0607L7.06066 7.06066L4.93934 4.93934Z"/>
      </svg>`,
      nextIcon: `<svg class="my-paginate__link-icon my-paginate__link-icon--next" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.06066 0.93934C2.47487 0.353553 1.52513 0.353553 0.93934 0.93934C0.353553 1.52513 0.353553 2.47487 0.93934 3.06066L3.06066 0.93934ZM6 6L7.06066 7.06066C7.64645 6.47487 7.64645 5.52513 7.06066 4.93934L6 6ZM0.93934 8.93934C0.353553 9.52513 0.353553 10.4749 0.93934 11.0607C1.52513 11.6464 2.47487 11.6464 3.06066 11.0607L0.93934 8.93934ZM0.93934 3.06066L4.93934 7.06066L7.06066 4.93934L3.06066 0.93934L0.93934 3.06066ZM4.93934 4.93934L0.93934 8.93934L3.06066 11.0607L7.06066 7.06066L4.93934 4.93934Z"/>
      </svg>`,
      myPageRange: 3,
      myPageCount: 0,
      elemOnPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    choosePage(pageNum) {
      this.currentPage = pageNum;
      const lastElement = pageNum * this.elemOnPage > this.coursesCount ? this.coursesCount : pageNum * this.elemOnPage;
      const firstElement = (pageNum - 1) * this.elemOnPage === 0 ? 0 : (pageNum - 1) * this.elemOnPage;
      this.$emit('changePage', { from: firstElement, to: lastElement});
      window.localStorage.setItem('page', this.currentPage);
      window.localStorage.setItem('elem_on_page', this.elemOnPage);
    },
  },
  mounted() {
    if (window.innerWidth > 767) {
      this.myPageRange = 5;
      this.elemOnPage = 6;
    }
    if (window.innerWidth > 1365) {
      this.elemOnPage = 9;
    }
    let page = +window.localStorage.getItem('page');
    let elemOnPage = +window.localStorage.getItem('elem_on_page');
    if (elemOnPage === this.elemOnPage) {
      this.currentPage = page;
    }
  },
  updated() {},
  watch: {
    coursesCount() { // eslint-disable-line
      this.myPageCount = Math.ceil(this.coursesCount / this.elemOnPage);
      if (this.currentPage === 0) {
        this.currentPage = 1;
      }
      if (this.currentPage >= this.myPageCount) {
        this.currentPage = this.myPageCount;
      }
      this.choosePage(this.currentPage);
    }
  },
}
</script>