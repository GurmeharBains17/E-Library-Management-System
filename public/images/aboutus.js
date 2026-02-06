<script>
        function subscribe() {
            const email = document.querySelector('.subscribe-form input').value;
            if (email) {
                alert(Thank you for subscribing with ${email}!);
            } else {
                alert('Please enter your email address.');
            }
        }
    </script>