<script>
        // JavaScript for the books carousel
        function scrollBooks(direction) {
            const container = document.getElementById('booksWrapper');
            const scrollAmount = container.clientWidth;
            
            if (direction === 'next') {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    </script>