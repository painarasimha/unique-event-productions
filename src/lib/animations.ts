export const fadeSlideUp = (node: HTMLElement, { delay = 0 }) => ({
  delay, 
  duration: 600,
  css: (t: number) => `opacity: ${t}; transform: translateY(${(1-t) * 20}px)`
});