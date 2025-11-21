// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "@popperjs/core";
import "bootstrap";

const stars = document.querySelectorAll(".fas.fa-star.text-secondary.fs-4");

stars.forEach((star) => {
  star.addEventListener("click", (event) => {
    let star_number = event.currentTarget.dataset.star;

    stars.forEach((star) => {
      star.classList.remove("text-warning"),
      star.classList.add("text-secondary");
    });

    while (star_number > 0) {
      const star_dataset = document.querySelector(`.fas.fa-star.text-secondary.fs-4[data-star="${star_number}"]`);
      star_dataset.classList.add("text-warning");
      star_number -= 1;
    }
  });
});
