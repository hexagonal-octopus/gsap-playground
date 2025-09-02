document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const contentWrapper = document.querySelectorAll(".content-row");

  contentWrapper.forEach((content) => {
    const image = content.querySelector(".content-image img");
    const title = content.querySelectorAll(".title span");
    const counter = content.querySelector(".subtitle span");
    const description = content.querySelector(".desc");
    const action = content.querySelector(".content-action");
    const subtitle = content.querySelector(".subtitle");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: content,
          start: "center-=100 center",
          end: "center top",
          scrub: 0.2,
          pin: content,
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        [subtitle, title, description, action],
        { autoAlpha: 0, y: 100, stagger: 0.2 },
        { autoAlpha: 1, y: 0, stagger: 0.2 },
        "0"
      )
      .fromTo(counter, { autoAlpha: 0 }, { autoAlpha: 1 }, "0")
      .fromTo(
        image,
        { autoAlpha: 0, scale: 1.5 },
        { autoAlpha: 1, scale: 1 },
        "0"
      );
  });

  gsap.to(".slider-progress-bar", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      scrub: 1,
    },
  });
});
