let cardType = true;

const alterCardCard = (event) => {
  if (cardType) {
    document.querySelector('#card').src = '../assets/CartaoWhite.png';
  } else {
    document.querySelector('#card').src = '../assets/CataoDefault.png';
  }

  cardType = !cardType;
}

document.querySelector('#card').addEventListener('click', alterCardCard);