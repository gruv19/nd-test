<template>
  <div class="sort">
    <p class="sort__label">Сортировать по:</p>
    <a 
      href="#" 
      class="sort__link" 
      v-for="property in properties" 
      :key="property" 
      @click.prevent="sort(property)" 
      :class="property.isActive ? 'sort__link--active' : ''"
    >
      <span class="sort__text">{{ property.title }}</span>
      <svg 
        v-if="property.isActive" 
        class="sort__icon" 
        :class="property.inAscending ? '' : 'sort__icon--up'" 
        viewBox="0 0 7 8" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
      </svg>
    </a>
    <a class="sort__active" @click="openMenu">
      <span class="sort__text">{{ active.title }}</span>
      <svg class="sort__icon" :class="active.inAscending ? '' : 'sort__icon--up'" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
      </svg>
    </a>
    <div class="sort__menu" :class="menuIsOpen ? 'sort__menu--active' : ''">
      <div class="sort__list" v-for="property in properties" :key="property">
        <a href="#" class="sort__item" @click.prevent="sortMobile(property, 'descending')">
          <span class="sort__text">{{ property.title }}</span>
          <svg class="sort__icon sort__icon--up" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 0V7M3.5 7L1 4.5M3.5 7L6 4.5" stroke="#EB3737"/>
          </svg>
        </a>
        <a href="#" class="sort__item" @click.prevent="sortMobile(property, 'ascending')">
          <span class="sort__text">{{ property.title }}</span>
          <svg class="sort__icon" viewBox="0 0 7 8" xmlns="http://www.w3.org/2000/svg">
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
          inAscending: false,
          ascending: sortCostAscend,
          descending: sortCostDescend,
          isActive: false,
        },
        {
          title: 'Алфавиту',
          inAscending: true,
          ascending: sortAlphabetAscend,
          descending: sortAlphabetDescend,
          isActive: true,
        },
      ],
      active: {},
      menuIsOpen: false,
    };
  },
  methods: {
    sort(property) {
      this.unactivate();
      property.isActive = true;
      if (property.inAscending) {
        this.clearSortOrder();
        property.inAscending = false;
        this.$emit('sort', property.descending);
      } else {
        this.clearSortOrder();
        property.inAscending = true;
        this.$emit('sort', property.ascending);
      }
      this.active = property;
    },
    sortMobile(property, sortOrder) {
      this.unactivate();
      property.isActive = true;
      property.inAscending = sortOrder === 'ascending' ? true : false;
      this.active = property;
      this.$emit('sort', property[sortOrder]);
      this.menuIsOpen = false;
    },
    openMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    unactivate() {
      this.properties = this.properties.map((property) => {
        property.isActive = false;
        return property;
      });
    },
    clearSortOrder() {
      this.properties = this.properties.map((property) => {
        property.inAscending = false;
        return property;
      });
    },
  },
  mounted() {
    this.$emit('sort', this.properties[1].ascending);
    this.active = this.properties[1];
  }
}
</script>