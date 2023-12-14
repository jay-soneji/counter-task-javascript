var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

document.querySelector("#increaseBy2").addEventListener("click", () => {
  changeCount(2);
});

changeCount = (number0) => {
  count += number0;
  document.querySelector("#count").textContent = count;
};

changeBackground = () => {
  const body = document.querySelector("body");

  if (count % 2 === 0) {
    body.style.backgroundImage = "url('image/imagageo.jpg')";
  } else {
    body.style.backgroundImage = "url('image/imagageo.jpg')";
  }
};
