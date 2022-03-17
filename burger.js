let visible = false;

function openMenu() {

    const menuOpen = document.getElementById('menuOpenIcon')
    const closeOpen = document.getElementById('menuCloseIcon')

    if (visible) {
        menuOpen.style = 'display: none;'
        closeOpen.style = 'display: block;'
        visible = false;
    } else {
        visible = true;
        menuOpen.style = 'display: block;'
        closeOpen.style = 'display: none;'
    }
}