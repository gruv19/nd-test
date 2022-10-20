<template>
  <div class="card">
    <img src="https://imgholder.ru/336x300/412234/b49fcc.jpg&text=IMAGE&font=arial" alt="Картинка курса" class="card__img">
    <a href="#" class="card__overlay">
      <div class="card__series">Бизнес навыки</div>
      <h5 class="card__title">Коммерческие переговоры</h5>
      <div class="card__cost">21 000 ₽</div>
      <div class="card__detail">
        Подробнее
        <svg class="card__detail-icon" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H19M19 5L15.1 9M19 5L15.1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card", // eslint-disable-line
}
</script>