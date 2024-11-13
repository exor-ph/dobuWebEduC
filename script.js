document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in Animation on Scroll
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    function checkFadeIn() {
        const viewportBottom = window.scrollY + window.innerHeight;
        fadeInElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top + window.scrollY;
            if (elementTop < viewportBottom) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Initial check on page load

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.textContent = 'Top';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Social Media Redirection
    document.getElementById("facebookButton").onclick = function() {
        window.open("https://www.facebook.com", "_blank");
    };

    document.getElementById("twitterButton").onclick = function() {
        window.open("https://www.twitter.com", "_blank");
    };

    document.getElementById("tiktokButton").onclick = function() {
        window.open("https://www.tiktok.com", "_blank");
    };

    // Form Submission with Success Message
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from actually submitting
        alert('Message sent successfully!');
        this.reset(); // Reset the form fields after submission
    });
});
