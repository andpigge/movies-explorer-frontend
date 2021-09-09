// Закрытие меню по нажатию на esc
const closeMenuOnEsc = (e, setActiveMenu, activeMenu) => {
  console.log(1)
  if (activeMenu && e.key === 'Escape') {
    setActiveMenu(false)
  }
}

export default closeMenuOnEsc;
