const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.querySelector(".top_btn").addEventListener("click", () => {
  scrollToTop();
});
