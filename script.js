let boxes = document.querySelectorAll('.boxes');
        let imgs = document.querySelectorAll('.images');
        let currentIndex = 0;

        function updateActiveClasses() {
            // Remove active classes from current elements
            boxes.forEach(box => box.classList.remove('active'));
            imgs.forEach(img => img.classList.remove('img-active'));

            // Add active classes to the current elements
            boxes[currentIndex].classList.add('active');
            imgs[currentIndex].classList.add('img-active');

            // Update the index for the next iteration
            currentIndex = (currentIndex + 1) % boxes.length;
        }

        // Start the interval to update the active classes
        let intervalId = setInterval(updateActiveClasses, 2000);

        // Add click event listeners to the boxes
        boxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                clearInterval(intervalId); // Stop the interval
                boxes.forEach(box => box.classList.remove('active')); // Remove all active classes
                imgs.forEach(img => img.classList.remove('img-active'));
                box.classList.add('active'); // Set active class to clicked box
                imgs[index].classList.add('img-active'); // Set active class to corresponding image
                currentIndex = index; // Update currentIndex to clicked box index
            });
        });

        // Set initial active classes
        updateActiveClasses();