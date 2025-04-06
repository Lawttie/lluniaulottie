const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('.content');

toggleSidebar.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        content.classList.remove('expanded');
    } else {
        sidebar.style.left = '0px';
        content.classList.add('expanded');
    }
});