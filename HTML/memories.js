
document.addEventListener("DOMContentLoaded", () => {
    const memoryBox = document.getElementById("memoryBox");
    const photoGallery = document.getElementById("photoGallery");
    const polaroids = document.querySelectorAll(".polaroid");
    const backToBoxButton = document.getElementById("backToBox");

    memoryBox.addEventListener("click", () => {
        memoryBox.style.display = "none"; // Hide memory box

        photoGallery.style.visibility = "visible";
        photoGallery.style.opacity = "1";

        polaroids.forEach((polaroid, index) => {
            setTimeout(() => {
                polaroid.style.animation = "filmRollOpen 0.3s forwards"; // Apply opening animation
            }, index * 150);
        });

        backToBoxButton.style.display = "block"; // Show the "Back to Box" button
    });

    backToBoxButton.addEventListener("click", () => {
        polaroids.forEach((polaroid, index) => {
            setTimeout(() => {
                polaroid.style.animation = "filmRollClose 0.3s forwards"; // Apply closing animation
            }, index * 150);
        });

        setTimeout(() => {
            photoGallery.style.opacity = "0";
            photoGallery.style.visibility = "hidden";
            memoryBox.style.display = "flex"; // Show memory box again
            backToBoxButton.style.display = "none"; // Hide button

            // Reset images for next reveal
            polaroids.forEach((polaroid) => {
                polaroid.style.animation = ""; // Clear animation
            });
        }, 1500);
    });
});


