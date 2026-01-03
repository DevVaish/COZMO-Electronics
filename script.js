// Redirect button
function goToProducts() {
  window.location.href = "products.html";
}

// GSAP animations to closely match the video behavior
if (typeof gsap === "undefined") {
  console.warn("GSAP not loaded — animations will not run.");
} else {
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

  /* --------------------------------------------------
      NAVBAR + HERO (your old animations)
  -------------------------------------------------- */
 window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

  tl.from(".logo", { y: -18, opacity: 0, duration: 0.6 }, 0);
  tl.from(".main-nav li", { y: -8, opacity: 0, stagger: 0.08, duration: 0.5 }, 0.05);
  tl.from(".nav-actions .icon-btn", { y: -8, opacity: 0, stagger: 0.08, duration: 0.45 }, 0.12);

  tl.from(".small", { y: 18, opacity: 0, duration: 0.6 }, 0.4);
  tl.from(".title", { y: 30, opacity: 0, scale: 0.98, duration: 0.9, ease: "power4.out" }, 0.55);
  tl.from(".bg-word", { opacity: 0, y: 20, duration: 1.1 }, 0.7);
  tl.from(".btn-primary", { y: 16, opacity: 0, scale: 0.98, duration: 0.6 }, 0.95);
  tl.from(".hero-image", { x: 160, opacity: 0, duration: 1.0, ease: "power3.out" }, 0.6);

  // Image hover effect
  const img = document.querySelector(".hero-image");
  if (img) {
    img.addEventListener("mouseenter", () => 
      gsap.to(img, { scale: 1.02, duration: 0.45, ease: "power2.out" })
    );
    img.addEventListener("mouseleave", () => 
      gsap.to(img, { scale: 1, duration: 0.45, ease: "power2.out" })
    );
  }

  // Category cards animation
  tl.from(".category-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
  }, ">");

  /* --------------------------------------------------
        YOUR NEW SECTION ANIMATIONS (Features + Banner + Brands)
  -------------------------------------------------- */

  // Features section
  tl.from(".feature-box", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2
  }, ">");

  // Banner left + right text animation
tl.from(".banner-left", {
  opacity: 0,
  x: -60,
  duration: 1.2,
  ease: "power3.out"
}, ">");

tl.from(".banner-right", {
  opacity: 0,
  x: 60,
  duration: 1.2,
  ease: "power3.out"
}, "<");

// Banner center image animation
tl.from(".banner-center img", {
  opacity: 0,
  scale: 0.7,
  duration: 1.3,
  ease: "back.out(1.9)"
}, "<0.2");


  // Brands logos
  tl.from(".brands img", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.1
  }, ">");

  /* --------------------------------------------------
      Sticky header behaviour
  -------------------------------------------------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
}
