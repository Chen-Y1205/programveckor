const buttons = document.querySelectorAll('.difficulty-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }

    this.classList.add('active');
  };
}
