window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const menuView = document.getElementById('menuView');
  const menuLeft = document.getElementById('menuLeft');
  const menuRight = document.getElementById('menuRight');

  menuButton.addEventListener('click', (event) => {
    if (!event.target.matches('#menuButton'))
      return;
    menuButton.classList.toggle('active');
    menuView.classList.add('active', 'opacity-100', 'z-50');

    setTimeout(function(){
      menuLeft.classList.remove('translate-y-full');
      menuRight.classList.remove('-translate-y-full');
    }, 150);
  });
}); 