document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header .dropdown_btn').addEventListener('click', function () {
    let tg = this;
    if (!(tg.classList.contains('active'))) {
      tg.classList.add('active');
      document.querySelector('#header .nav_dropdown').classList.add('on');
    } else {
      tg.classList.remove('active');
      document.querySelector('#header .nav_dropdown').classList.remove('on');
    }
  });
});