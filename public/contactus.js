<script>
        function sendMessage() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
    
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before sending.");
                return;
            }
    
            alert("Thank you, " + name + "! Your message has been sent.");
            
            // Clear form fields after submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
        
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
    </script>