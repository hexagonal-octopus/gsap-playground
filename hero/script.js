document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin("SplitText");
});

document.fonts.ready.then(() => {
  let split = SplitText.create(".text", {
    type: "chars, words",
    wordsClass: "char++",
    mask: "words",
    onSplit: (self) => {
      gsap.from(self.chars, {
        y: 100,
        // duration: 0.2,
        x: 0,
        // rotate:30,
        autoAlpha: 0,
        // stagger:0.05,
        stagger: {
          amount: 0.5,
          from: "beginning",
          // repeat: -1,
          // yoyo: true
        },
        easing: "back.out(2)",
      });
    },
  });
});
