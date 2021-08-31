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
};
