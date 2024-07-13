export const buttonAnimation = {
  scaleUp: {
    y: [-150, 0],
    scale: [1, 1, 1, 1.2, 1],
    boxShadow: [
      "0px 0px 0px rgba(255, 105, 180, 0)", // Starting with no shadow
      "0px 0px 10px rgba(255, 105, 180, 0.0)", // Initial pink glow
      "0px 0px 10px rgba(255, 105, 180, 0.0)", // Sustained pink glow
      "0px 0px 20px rgba(255, 105, 180, 1)", // Maximum pink glow
      "0px 0px 0px rgba(255, 105, 180, 0)", // Ending with no shadow
    ],
    transition: {
      delay: 0.3,
    },
  },
};

export const emailStatusAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const socialLinksAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
