$(document).ready(function () {
    $('.nk-product-rating, .nk-review-rating').each(function() {
        let rate = $(this).attr('data-rating');
        for (let i = 1; i <= 5; i++) {
            if (rate < i - 0.5)
                $(this).append('<i class="far fa-star"></i>');
            else if (rate >= i)
                $(this).append('<i class="fa fa-star"></i>');
            else
                $(this).append('<i class="fas fa-star-half"></i>');
        }
    });
});
