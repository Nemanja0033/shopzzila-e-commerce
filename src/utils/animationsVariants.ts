export const sectionAnimation = {
  initial: { y: -40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.8, 0.25, 1], // custom bezier za smooth izlaz
    delay: 0.1 // kratko kašnjenje za “pop-in” efekat
  }
};
