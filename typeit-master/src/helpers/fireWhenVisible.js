export default (element, func) => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          func();
          observer.unobserve(element);
        }
      });
    },
    { threshold: 1.0 }
  );

  observer.observe(element);
}
