document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const openModalButton = document.getElementById('openModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
        showSlide(currentSlide);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });

    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

    function changeSlide(step) {
        showSlide(currentSlide + step);
    }
});
