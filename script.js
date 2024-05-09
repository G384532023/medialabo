document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category--fade-right");
  let delay = 0;

  categories.forEach((category) => {
    setTimeout(function () {
      category.style.opacity = "1";
    }, delay);
    delay += 500; // 0.5秒ごとに遅延
  });
});
