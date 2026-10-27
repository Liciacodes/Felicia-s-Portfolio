export const EASE_SIGNATURE = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.15,
  medium: 0.25,
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

export const fadeInLeft = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.medium, ease: EASE_SIGNATURE },
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

// Critically damped: settles quickly without overshooting.
export const springSnappy = { type: "spring", stiffness: 400, damping: 40 };
