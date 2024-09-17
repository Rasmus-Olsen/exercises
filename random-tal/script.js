function randomTal(max, selector) {
  const tal = Math.round(Math.random() * max);
  document.querySelector(selector).textContent = tal;

  console.log(tal);
}

randomTal(100, "h1");
randomTal(50, "p");
