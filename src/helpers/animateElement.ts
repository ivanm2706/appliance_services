export const animateElement = (elem: HTMLElement | null) => {
  if (elem === null) {
    return;
  }

  const distanceToAnimateBottom =
    elem.getBoundingClientRect().top - window.innerHeight;
  const distanceToAnimateTop = elem.getBoundingClientRect().bottom;

  if (distanceToAnimateBottom + 100 <= 0 && distanceToAnimateTop - 100 >= 0) {
    return true;
  }

  if (
    (distanceToAnimateBottom - 300 >= 0 && distanceToAnimateTop + 300 >= 0) ||
    (distanceToAnimateBottom - 100 <= 0 && distanceToAnimateTop + 100 <= 0)
  ) {
    return false;
  }
};
