const publicPath = process.env.NODE_ENV === "production" ? "/nd-test-catalog/" : "/";

const courses = [
  {
    id: 3,
    preview_img_path: `${publicPath}course-images/06.jpg`,
    title: "Базовые принципы разработки решений с блокчейн",
    cost: 135000,
    cost_currency: "₽",
    series: "Программирование",
  },
  {
    id: 8,
    preview_img_path: `${publicPath}course-images/08.jpg`,
    title:
      "Базовые принципы разработки решений с блокчейн. Продвинутый уровень",
    cost: 80000,
    cost_currency: "₽",
    series: "Программирование",
  },
  {
    id: 1,
    preview_img_path: `${publicPath}course-images/02.jpg`,
    title: "Как добывают нефть",
    cost: 135000,
    cost_currency: "₽",
    series: "Профессия",
  },
  {
    id: 6,
    preview_img_path: `${publicPath}course-images/03.jpg`,
    title: "Как добывают нефть. Продвинутый уровень",
    cost: 150000,
    cost_currency: "₽",
    series: "Профессия",
  },
  {
    id: 2,
    preview_img_path: `${publicPath}course-images/07.jpg`,
    title: "Основы искусственного интеллекта и машинного обучения с Python",
    cost: 135000,
    cost_currency: "₽",
    series: "Программирование",
  },
  {
    id: 7,
    preview_img_path: `${publicPath}course-images/09.jpg`,
    title:
      "Основы искусственного интеллекта и машинного обучения с Python. Продвинутый уровень",
    cost: 150000,
    cost_currency: "₽",
    series: "Программирование",
  },
  {
    id: 4,
    preview_img_path: `${publicPath}course-images/04.jpg`,
    title: "Продажи от «А» до «Я»",
    cost: 135000,
    cost_currency: "₽",
    series: "Бизнес навыки",
  },
  {
    id: 9,
    preview_img_path: `${publicPath}course-images/05.jpg`,
    title: "Продажи от «А» до «Я». Продвинутый уровень",
    cost: 160000,
    cost_currency: "₽",
    series: "Бизнес навыки",
  },
  {
    id: 10,
    preview_img_path: `${publicPath}course-images/10.jpg`,
    title: "Прокрастинация: как не откладывать дела",
    cost: 135000,
    cost_currency: "₽",
    series: "Бизнес навыки",
  },
  {
    id: 5,
    preview_img_path: `${publicPath}course-images/01.jpg`,
    title: "Прокрастинация: как не откладывать дела. Продвинутый уровень",
    cost: 150000,
    cost_currency: "₽",
    series: "Бизнес навыки",
  },
];

export default courses;