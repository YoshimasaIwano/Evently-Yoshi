function showDetails(itemId) {
    const item = document.getElementById(`title${itemId}`);
    const date = document.getElementById(`date${itemId}`);
    const location = document.getElementById(`location${itemId}`);

    document.getElementById("title").textContent = item.textContent;
    document.getElementById("date").textContent = date.textContent;
    document.getElementById("location").textContent = location.textContent;

    document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

// Initialize the overlay functionality
function initializeOverlay() {
    function showDetails(itemId) {
        const item = document.querySelector(`.result-item[data-id="${itemId}"]`);
        if (item) {
            const title = item.querySelector(".item-title").textContent;
            const date = item.querySelector(".item-date").textContent;
            const location = item.querySelector(".item-location").textContent;
    
            document.getElementById("title").textContent = title;
            document.getElementById("date").textContent = date;
            document.getElementById("location").textContent = location;
    
            document.getElementById("overlay").style.display = "block";
        }
    }

    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }

    // Attach click event listeners to result items
    const resultItems = document.querySelectorAll(".result-item");
    resultItems.forEach((item) => {
        item.addEventListener("click", () => {
            const itemId = item.getAttribute("data-id");
            showDetails(itemId);
        });
    });

    // Attach click event listener to the close button
    const closeButton = document.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", closeOverlay);
    }
}

document.addEventListener("DOMContentLoaded", initializeOverlay);

