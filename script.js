document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query !== '') {
      alert(`Ai căutat: ${query}`);
      e.target.value = '';
    }
  }
});

document.getElementById('advancedSearchBtn').addEventListener('click', function () {
  const input = document.getElementById('advancedSearchInput');
  const query = input.value.trim();
  if (query !== '') {
    alert(`Căutare avansată: ${query}`);
    input.value = '';
  }
});
