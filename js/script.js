document.querySelectorAll('.dropdown-submenu').forEach(function(menu) {
  menu.addEventListener('mouseenter', function() {
    const submenu = this.querySelector('.dropdown-menu');
    submenu.style.display = 'block'; // temporarily show to measure
    const rect = submenu.getBoundingClientRect();
    submenu.style.display = ''; // hide again

    if (rect.right > window.innerWidth) {
      this.classList.add('open-left');
    } else {
      this.classList.remove('open-left');
    }
  });
});
