document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.fonts.ready.then(() => {
    gsap.set("[text-split]", { opacity: 1 });

    document.querySelectorAll("[text-split]").forEach((el) => {
      new SplitText(el, {
        types: "words, chars, lines",
        tag: "span",
        wordsClass: "word",
        charsClass: "char",
        mask: "word",
      });
    });

    // slide words up animation
    document.querySelectorAll("[words-slide-up]").forEach((el) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: { amount: 0.6 },
      });
      createScrollTrigger(el, tl);
    });

    document.querySelectorAll("[words-rotate-in]").forEach((el) => {
      let tl = gsap.timeline({ paused: true });
      tl.set(el.querySelectorAll(".word"), { transformPerspective: 1000 });

      tl.from(el.querySelectorAll(".word"), {
        rotationX: -90,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.6 },
      });

      createScrollTrigger(el, tl);
    });

    document.querySelectorAll("[words-slides-from-right]").forEach((el) => {
      let tl = gsap.timeline({ paused: true });

      tl.from(el.querySelectorAll(".word"), {
        opacity: 0,
        x: 50,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 },
      });

      createScrollTrigger(el, tl);
    });

    document.querySelectorAll("[letters-fade-in]").forEach((el) => {
      let tl = gsap.timeline({ paused: true });

      tl.from(el.querySelectorAll(".char"), {
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
        stagger: { amount: 0.8 },
      });

      createScrollTrigger(el, tl);
    });

    document.querySelectorAll("[letters-fade-in-random]").forEach((el) => {
      let tl = gsap.timeline({ paused: true });

      tl.from(el.querySelectorAll(".char"), {
        opacity: 0,
        duration: 0.1,
        ease: "power1.out",
        stagger: { amount: 0.4, from: "random" },
      });

      createScrollTrigger(el, tl);
    });

    document.querySelectorAll("[scrub-each-word]").forEach((el) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "center top",
          scrub: true,
        },
      });

      tl.from(el.querySelectorAll(".word"), {
        opacity: 0.2,
        duration: 0.2,
        ease: "power1.out",
        stagger: { each: 0.4 },
      });
    });

    function createScrollTrigger(triggerElement, timeline) {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        markers: true,
        onLeaveBack: () => {
          timeline.progress(0).pause();
        },
      });

      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top center",
        markers: true,
        onEnter: () => timeline.play(),
      });
    }
  });
});
