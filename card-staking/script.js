document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollSection = document.querySelectorAll(".scroll-section");

  scrollSection.forEach((section) => {
    const wrapper = section.querySelector(".wrapper");
    const items = wrapper.querySelectorAll(".list_item");

    // initialize
    let direction = null;

    if (section.classList.contains("vertical-section")) {
      direction = "vertical";
    } else if (section.classList.contains("horizontal-section")) {
      direction = "horizontal";
    }

    initScroll(section, items, direction);
  });

  function initScroll(section, items, direction) {
    // initial state
    items.forEach((item, index) => {
      if (index !== 0) {
        direction === "horizontal"
          ? gsap.set(item, { xPercent: 100 })
          : gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      defaults: {
        ease: "none",
      },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.8,
        borderRadius: "20px",
      });

      direction == "horizontal"
        ? timeline.to(
            items[index + 1],
            {
              xPercent: 0,
            },
            "<"
          )
        : timeline.to(
            items[index + 1],
            {
              yPercent: 0,
            },
            "<"
          );
    });
  }
});
