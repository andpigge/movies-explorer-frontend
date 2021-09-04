// Текст ссылок для навигации для компонента navigation в мобильном меню
const textListMenuMobule = [
  'Главная',
  'Фильмы',
  'Сохранённые фильмы',
];

// Ссылки для навигации для компонента navigation в мобильном меню
const navLinkMenuMobule = [
  '/main1',
  '/main',
  '/main3',
];

// Текст ссылок для навигации для компонента navigation
const textList = [
  'Фильмы',
  'Сохранённые фильмы',
];

// Ссылки для навигации для компонента navigation
const navLink = [
  '/main',
  '/main1',
];

// Текст для компонента tech
const techList = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

// Текст ссылок для компонента aboutMe
const aboutMeList = [
  'Vkontakte',
  'Github',
];

// Ссылки для компонента aboutMe
const aboutMeListLink = [
  'https://vk.com/uie_n',
  'https://github.com/andpigge',
];

// Текст ссылок для компонента portfolioList
const portfolioList = [
  'Статичный сайт',
  'Одностраничное приложение на React',
  'Многостраничное приложение на React',
];

// Ссылки для компонента portfolioList
const portfolioListLink = [
  'https://github.com/andpigge/russian-travel-update',
  'https://github.com/andpigge/react-mesto-api-full',
  'https://github.com/andpigge/movies-explorer-frontend',
];

// Необязательный обьект. Устанавливает модификаторы для навигации в мобильном меню
const modifierNavigationClass = {
  navigationClass: 'header__navigation_position_mobule-menu',
  navigationListClass: 'header__navigation-list_position_mobule-menu',
  navigationItemClass: 'header__navigation-item_position_mobule-menu',
  navigationLinkActive: 'header__navigation-link_mobule-menu_active',
};

// Необязательный обьект. Устанавливает модификаторы для ссылки аккаунт в мобильном меню
const modifierProfileLink = {
  profileLink: 'header__profile-link_position_mobule-menu',
};

export {
  textListMenuMobule,
  navLinkMenuMobule,
  modifierNavigationClass,
  modifierProfileLink,
  textList,
  navLink,
  techList,
  aboutMeList,
  aboutMeListLink,
  portfolioList,
  portfolioListLink,
};
