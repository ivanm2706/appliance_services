export const handleOverflow = (isActive: boolean) => {
  if (isActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
