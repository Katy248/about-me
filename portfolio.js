// Измените эти значения, чтобы заполнить портфолио.
export const portfolio = {
  firstName: "Антон",
  lastName: "Петров",
  initials: "АП",
  introduction: "Разработчик, увлечённый backend-разработкой.",
  about: {
    description:
      "Разработчик, увлечённый backend-разработкой. В последнее время работаю с Go, интересуюсь архитектурой распределённых систем, API и взаимодействием сервисов.\n" +
      "У меня есть опыт в DevOps и системном администрировании, мне интересно не только писать код, но и разбираться как приложения разворачиваются, работают и взаимодействуют с инфраструктурой.\n" +
      "Особое место в моих интересах занимает Open Source. Мне нравится изучать чужие проекты, находить возможности для улучшений и вносить собственный вклад в развитие программного обеспечения.",
    topics: ["backend", "frontend", "инфраструктура", "open-source"],
    technologies: ["GO", ".NET", "JS", "Docker", "REST API", "Vue"],
  },
  work: {
    experience: [
      {
        company: "РЕД СОФТ",
        role: "Инженер",
        period: "февраль 2024 - сентябрь 2026",
        description:
          "Настройка демонстрационных стендов, подготовка ПО, разработка прикладного ПО",
      },
    ],
    projects: [
      {
        title: "iCenter",
        description: "Интернет-магазин, интегрированный с 1С",
        role: "Бекенд и частично фронтенд, поддержание инфраструктуры",
        url: "https://shop-icentr.pro",
        openSourceContribution: false,
      },
      {
        title: "Сэр Кролик",
        description: "Сайт ресторана",
        role: "Поддерживаю инфраструктуру сайта ресторана, администрирую CMS",
        url: "https://sir-rabbit.ru",
      },
      {
        title: "ШИП-монитор",
        description: "Система мониторинга морозильных камер",
        role: "Бекенд, инфраструктура",
        url: "https://ship-monitor.ru",
        openSourceContribution: false,
      },
      {
        title: "USBIP GUI",
        description: "Графическая обёртка для модуля ядра usbip",
        role: "Локализовал приложение, перенёс на более современную систему сборки",
        url: "https://github.com/K-Francis-H/usbip-gui",
        openSourceContribution: true,
      },
      // {
      //   title: "Art gallery",
      //   description: "Веб-приложение для публикации картинок",
      //   url: "https://github.com/Katy248/art-gallery",
      // },
    ],
  },
  contact: {
    links: [
      { label: "Email", url: "mailto:petrovanton247@gmail.com" },
      { label: "Telegram", url: "https://t.me/antonpethrow" },
      { label: "GitHub", url: "https://github.com/katy248" },
      { label: "Телефон", url: "tel:+79588039295" },
    ],
  },
};
