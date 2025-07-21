export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Generates a style object for a shine border effect.
 * @param {Object} options
 * @param {number} [options.borderWidth=1]
 * @param {number} [options.duration=14]
 * @param {string|string[]} [options.shineColor="#000000"]
 * @param {Object} [options.style]
 * @returns {React.CSSProperties}
 */
export function getShineBorderStyle({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  style = {},
} = {}) {
  return {
    "--border-width": `${borderWidth}px`,
    "--duration": `${duration}s`,
    backgroundImage: `radial-gradient(transparent,transparent, ${
      Array.isArray(shineColor) ? shineColor.join(",") : shineColor
    },transparent,transparent)`,
    backgroundSize: "300% 300%",
    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    padding: "var(--border-width)",
    ...style,
  };
}