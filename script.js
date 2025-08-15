const hotspots = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

// Tooltip behavior
hotspots.forEach(hs => {
    hs.addEventListener('mouseenter', () => {
        tooltip.innerText = hs.getAttribute('data-text');
        tooltip.style.display = 'block';
    });

    hs.addEventListener('mousemove', (e) => {
        tooltip.style.top = (e.pageY + 10) + 'px';
        tooltip.style.left = (e.pageX + 10) + 'px';
    });

    hs.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Click to open modal
    hs.addEventListener('click', () => {
        modalText.innerText = hs.getAttribute('data-detail');
        modal.style.display = 'block';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
