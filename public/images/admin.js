<script>
function showThankYouMessage(event) {
    event.preventDefault();  // Prevent the form from actually submitting
    alert("Thank you for your suggestions!\nYour feedback has been successfully submitted.");
    
    // Redirect to index.html after the alert
    window.location.href = 'index.html';
}
</script>