document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menuicon');
    const menuItems = document.getElementById('menuitems');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

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