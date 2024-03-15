
        document.addEventListener("DOMContentLoaded", function() {

            function orderNowClicked(AddToCart) {
                alert("Item is added to Cart");
            }

            var orderNowButton = document.querySelector('.button__primary');
            orderNowButton.addEventListener('click', orderNowClicked);
        });

        document.addEventListener("DOMContentLoaded", function() {

            function orderNowClicked(Buy) {
                alert("Thank you for your purchase! Your order has been placed.");
            }
            
            var orderNowButton = document.querySelector('.button__secondary');
            orderNowButton.addEventListener('click', orderNowClicked);
        });

        document.addEventListener("DOMContentLoaded", function() {

            function orderNowClicked(OrderNow) {
                alert("Your order has been placed successfully! Thank you for choosing our products/services. An email confirmation will be sent shortly.");
            }

            var orderNowButton = document.querySelector('.button__tertiary');
            orderNowButton.addEventListener('click', orderNowClicked);

        });

