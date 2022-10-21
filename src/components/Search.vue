<template>
  <div class="search">
    <form action="#" class="search__form" @submit.prevent="search">
      <input type="text" class="search__input" :class="text ? 'search__input--filled' : ''" v-model.trim="text" @input="search">
      <div class="search__label-box">
        <label class="search__label">Поиск катлогу</label>
      </div>
      <button type="submit" class="search__button">
        <svg class="search__button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13.5" cy="10.5" r="5.5" stroke="#0066B3" stroke-width="2"/>
          <line x1="9.70711" y1="15.7071" x2="4.70711" y2="20.7071" stroke="#0066B3" stroke-width="2"/>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search", // eslint-disable-line
  data() {
    return {
      text: '',
    };
  },
  methods: {
    search() {
      this.$emit('search', this.text);
    }
  },
}
</script>