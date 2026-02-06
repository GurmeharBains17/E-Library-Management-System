<!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("modal");
        const seeMoreBtn = document.getElementById("seeMoreBtn");
        const closeBtn = document.querySelector(".close");
    
        // Open Modal
        seeMoreBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });
    
        // Close Modal
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    
        // Close modal when clicking outside
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
</script>

<script>
    document.querySelector('.search-input').addEventListener('focus', function () {
        document.querySelector('.search-options').style.display = 'block';
    });

    document.querySelector('.close-button').addEventListener('click', function () {
        document.querySelector('.search-options').style.display = 'none';
    });

    document.querySelectorAll('.search-option').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.search-option').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
</script>