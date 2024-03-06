
document.addEventListener("DOMContentLoaded", function() {
    const countDisplay = document.getElementById("count");
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");
    const resetBtn = document.getElementById("resetBtn");

    let count = 0;

    // Function to update count display
    function updateCount() {
        countDisplay.textContent = count;
    }

    // Increment count
    incrementBtn.addEventListener("click", function() {
        count++;
        updateCount();
    });

    // Decrement count
    decrementBtn.addEventListener("click", function() {
            count--;
            updateCount();
        
    });

    // Reset count
    resetBtn.addEventListener("click", function() {
        count = 0;
        updateCount();
    });
});



