const animate = async () => {
  const tl = gsap.timeline();
  tl.from(".nav-list", {
    y: -100,
    stagger: 0.3,
    duration: 0.2,
    delay: 0.1,
    autoAlpha: 0,
    ease: "power1.in",
  })
    .from(
      ".topic",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "<"
    )
    .from(
      ".subTopic",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "<"
    )
    .from(
      ".createAccount,.flowerImage,.navbar",

      {
        autoAlpha: 0,
        duration: 1,
      },
      "<"
    );
  const intro =
    "Inspiring results from day one without the pain.Get your own customer dashboard and start building amazing services.";
  const splittedIntro = intro.split(" ");
  console.log(splittedIntro);
  console.log(splittedIntro.length);

  const contentText = document.querySelector(".content");

  for (let i = 0; i < splittedIntro.length; i++) {
    const addElem = document.createElement("span");
    addElem.className = "contentText";
    addElem.textContent = splittedIntro[i] + " ";

    // Append each word as a new <p> element
    contentText.appendChild(addElem);

    // Optionally, you can animate each word after adding

    // Add a delay before the next word appears
  }
  gsap.from(
    ".contentText",
    {
      autoAlpha: 0,
      x: -100,
      duration: 0.2,
      stagger: 0.2,
      ease: "power1.in",
    },
    "<"
  );

  const tl1 = gsap.timeline();
  tl1.from(".productList", {
    autoAlpha: 0,
    ease: "power1.in",
    duration: 3,
    scrollTrigger: {
      trigger: ".productList",
      start: "top 50%",
      end: "+=500",
      toggleActions: "play pause play pause",
      scrub: 1,
    },
  });
};

animate();
