document.getElementById('searchinput').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let items = document.querySelectorAll('.Gallery-item');

    items.forEach(item => {
        let title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});