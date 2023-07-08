// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Animasi Ketika video di hover 1
const clip = document.querySelectorAll('.video-recom');
for(let i = 0; i<clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
        clip[i].play()
    })
    clip[i].addEventListener('mouseout', function(e){
        clip[i].pause()
    })
}

// Animasi Ketika video di hover 2
const clip2 =document.querySelector('.bubble-list-video');
clip2.addEventListener('mouseenter', function(e){
    clip2.play()
})
clip2.addEventListener('mouseout', function(e){
    clip2.pause()
})