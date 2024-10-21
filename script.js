document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menuicon');
    const menuItems = document.getElementById('menuitems');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseEndX = 0;

    // Toggle mobile menu
    if (menuIcon && menuItems) {
        menuIcon.addEventListener('click', function() {
            menuItems.classList.toggle('active');
            const isActive = menuItems.classList.contains('active');
            menuIcon.setAttribute('aria-expanded', isActive);
        });
    }

    // Function to move to a specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // Update slider position
    function updateSlider() {
        const offset = -currentSlide * 100;
        document.querySelector('.slider').style.transform = `translateX(${offset}vw)`;
    }

    // Navigate to next or previous slide
    function moveSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        updateSlider();
    }

    // Swipe functionality for touch devices
    function handleTouchStart(event) {
        touchStartX = event.changedTouches[0].screenX;
    }

    function handleTouchMove(event) {
        touchEndX = event.changedTouches[0].screenX;
    }

    function handleTouchEnd() {
        if (touchEndX < touchStartX) {
            moveSlide(1); // Swipe left, move to next slide
        } else if (touchEndX > touchStartX) {
            moveSlide(-1); // Swipe right, move to previous slide
        }
    }

    // Swipe functionality for mouse (left-click + drag)
    function handleMouseDown(event) {
        if (event.button === 0) { // Check if left mouse button is pressed
            isMouseDown = true;
            mouseStartX = event.clientX;
        }
    }

    function handleMouseMove(event) {
        if (isMouseDown) {
            mouseEndX = event.clientX;
        }
    }

    function handleMouseUp() {
        if (isMouseDown) {
            if (mouseEndX < mouseStartX) {
                moveSlide(1); // Drag left, move to next slide
            } else if (mouseEndX > mouseStartX) {
                moveSlide(-1); // Drag right, move to previous slide
            }
            isMouseDown = false;
        }
    }

    // Two-finger swipe on touchpad is usually handled natively by most modern browsers
    // and will already trigger the 'touch' events.

    // Add event listeners for touch
    document.querySelector('.slider-container').addEventListener('touchstart', handleTouchStart);
    document.querySelector('.slider-container').addEventListener('touchmove', handleTouchMove);
    document.querySelector('.slider-container').addEventListener('touchend', handleTouchEnd);

    // Add event listeners for mouse (left-click + drag)
    document.querySelector('.slider-container').addEventListener('mousedown', handleMouseDown);
    document.querySelector('.slider-container').addEventListener('mousemove', handleMouseMove);
    document.querySelector('.slider-container').addEventListener('mouseup', handleMouseUp);

    // Add click event listeners to menu items
    document.querySelectorAll('#menuitems .btn').forEach((menuItem, index) => {
        menuItem.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
            // Close mobile menu if open
            menuItems.classList.remove('active');
        });
    });

    // Add event listeners to navigation buttons
    document.querySelectorAll('.arrow').forEach(button => {
        button.addEventListener('click', function() {
            const direction = this.classList.contains('left') ? -1 : 1;
            moveSlide(direction);
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (e.key === 'ArrowRight') {
            moveSlide(1);
        }
    });

    // Update slider on window resize
    window.addEventListener('resize', updateSlider);

    // Initialize slider
    updateSlider();
});