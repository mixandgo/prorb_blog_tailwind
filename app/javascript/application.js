// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "./controllers";
import "flowbite";
// import "flowbite/dist/datepicker";
import Datepicker from "flowbite-datepicker/Datepicker";

document.addEventListener("turbo:render", () => {
  document.querySelectorAll("[datepicker]").forEach(function (datepickerEl) {
    new Datepicker(datepickerEl);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[datepicker]").forEach(function (datepickerEl) {
    new Datepicker(datepickerEl);
  });
});
