export function htmlRatingIcons(rate: number): string {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rate < i - 0.5) {
      html += '<i class="far fa-star"></i>';
    } else if (rate >= i) {
      html += '<i class="fa fa-star"></i>';
    } else {
      html += '<i class="fas fa-star-half"></i>';
    }
  }
  return html;
}
