
function filterStudents() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.student-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.student-details h3').textContent.toLowerCase();
        card.style.display = name.includes(input) ? 'block' : 'none';
    });
}

