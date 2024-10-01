function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}