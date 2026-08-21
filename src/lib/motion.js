export const EASE_SIGNATURE = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.15,
  base: 0.4,
  slow: 0.7,
};

export const viewportOnce = { once: true, margin: "-80px", amount: 0.15 };

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_SIGNATURE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_SIGNATURE },
  },
};

export const staggerContainer = (staggerAmount = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerAmount },
  },
});

export const springSnappy = { type: "spring", stiffness: 300, damping: 20 };
