<template>
  <a href="#" class="card">
    <picture>
      <source
        :srcset="desktopImg"
        media="(min-width: 1366px)"
      />
      <source
        :srcset="tabletImg"
        media="(min-width: 768px)"
      />
      <img
        class="card__img"
        :srcset="img"
      />
    </picture>
    <div class="card__overlay">
      <div class="card__series">{{ series }}</div>
      <h5 class="card__title">{{ title }}</h5>
      <div class="card__cost">{{ cost }} {{ currency }}</div>
      <div class="card__detail">
        Подробнее
        <svg class="card__detail-icon" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H19M19 5L15.1 9M19 5L15.1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card", // eslint-disable-line
  props: {
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
    },
    series: {
      type: String,
      required: true,
    },
  },
  computed: {
    tabletImg() {
      return this.img.replace(/(\.jpg)/g, '-tablet'+'$1')
    },
    desktopImg() {
      return this.img.replace(/(\.jpg)/g, '-desktop'+'$1')
    }
  },
}
</script>