document.addEventListener("DOMContentLoaded", function() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const nextPage1Button = document.getElementById('nextPage1');
    const prevPage2Button = document.getElementById('prevPage2');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    
    nextPage1Button.addEventListener('click', () => changePage(1));
    prevPage2Button.addEventListener('click', () => changePage(-1));
    prevPageButton.addEventListener('click', () => changePage(-1));
    nextPageButton.addEventListener('click', () => changePage(1));

    let currentPage = 1;

    function changePage(step) {
        if (currentPage === 1 && step === -1) return;
        if (currentPage === 2 && step === 1) return;

        currentPage += step;

        page1.style.display = 'none';
        page2.style.display = 'none';

        if (currentPage === 1) {
            page1.style.display = 'block';
        } else if (currentPage === 2) {
            page2.style.display = 'block';
        }
    }
});
