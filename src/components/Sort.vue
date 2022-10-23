<template>
  <div class="sort">
    <p class="sort__label">Сортировать по:</p>
    <a class="sort__menu-activator" @click="openMenu">
      <span class="sort__text">{{ active.title }}</span>
      <svg
        class="sort__icon"
        :class="active.sortOrder === 'ascending' ? '' : 'sort__icon--up'"
        viewBox="0 0 7 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
      </svg>
    </a>
    <div class="sort__menu" :class="menuIsOpen ? 'sort__menu--active' : ''">
      <div class="sort__list" v-for="property in properties" :key="property">
        <a href="#" class="sort__item" @click.prevent="reSort(property, 'descending')">
          <span class="sort__text">{{ property.title }}</span>
          <svg class="sort__icon sort__icon--up" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
          </svg>
        </a>
        <a href="#" class="sort__item" @click.prevent="reSort(property, 'ascending')">
          <span class="sort__text">{{ property.title }}</span>
          <svg class="sort__icon" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
          </svg>
        </a>
        <a
          href="#"
          class="sort__link"
          :class="property.title === active.title ? 'sort__link--active' : ''"
          @click.prevent="reSort(property, property.title === active.title ? changedActiveSortOrder : 'ascending')"
        >
          <span class="sort__text">{{ property.title }}</span>
          <svg
            v-if="property.title === active.title"
            class="sort__icon"
            :class="active.sortOrder === 'ascending' ? '' : 'sort__icon--up'"
            viewBox="0 0 7 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

function sortAlphabetAscend(array) {
  return array.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA < titleB) return -1
    if (titleA > titleB) return 1
    return 0;
  });
}

function sortAlphabetDescend(array) {
  return array.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA > titleB) return -1
    if (titleA < titleB) return 1
    return 0;
  });
}

function sortCostAscend(array) {
  return array.sort((a, b) => {
    const costA = a.cost;
    const costB = b.cost;
    if (costA < costB) return -1
    if (costA > costB) return 1
    return 0;
  });
}

function sortCostDescend(array) {
  return array.sort((a, b) => {
    const costA = a.cost;
    const costB = b.cost;
    if (costA > costB) return -1
    if (costA < costB) return 1
    return 0;
  });
}

export default {
  name: "Sort", // eslint-disable-line
  data() {
    return {
      properties: [
        {
          title: 'Цене',
          ascending: sortCostAscend,
          descending: sortCostDescend,
        },
        {
          title: 'Алфавиту',
          ascending: sortAlphabetAscend,
          descending: sortAlphabetDescend,
        },
      ],
      active: {},
      menuIsOpen: false,
    };
  },
  methods: {
    reSort(property, sortOrder) {
      this.active = property;
      this.active.sortOrder = sortOrder;
      this.$emit('sort', property[sortOrder]);
      window.localStorage.setItem('sort', JSON.stringify(this.active));
      this.menuIsOpen = false;
    },
    openMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  computed: {
    changedActiveSortOrder() {
      if (this.active.sortOrder === 'ascending') {
        return 'descending';
      }
      return 'ascending';
    }
  },
  mounted() {
    let sortActive = window.localStorage.getItem('sort');
    if (sortActive) {
      sortActive = JSON.parse(sortActive);
      const index = this.properties.findIndex(item => item.title === sortActive.title);
      sortActive.ascending = this.properties[index].ascending;
      sortActive.descending = this.properties[index].descending;
      this.reSort(sortActive, sortActive.sortOrder);
    } else {
      this.reSort(this.properties[1], 'ascending');
    }
  }
}
</script>