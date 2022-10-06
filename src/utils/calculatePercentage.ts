function calculatePercentage(
  px: number,
  direction: 'width' | 'height' = 'width'
) {
  return direction === 'width' ? px / 5120 : px / 2880;
}
export default calculatePercentage;
