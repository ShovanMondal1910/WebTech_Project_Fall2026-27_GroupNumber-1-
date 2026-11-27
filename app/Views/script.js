if (window.self !== window.top) 
{
    window.top.location.href = window.location.href;
}

// Fetch and load the navbar if placeholder exists
if (document.getElementById('navbar-placeholder')) {
    fetch('layouts/navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Error loading navbar:', err));
}


document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;

    const target = link.getAttribute('target');
    const href = link.getAttribute('href');

    if (target === 'contentFrame') {
        const frame = document.getElementById('contentFrame');
        const home = document.getElementById('home-content');
        if (frame) frame.style.display = 'block';
        if (home) home.style.display = 'none';
    } else if (href === 'index.html' || href === '../index.html' || href === '../../index.html') {
        const frame = document.getElementById('contentFrame');
        const home = document.getElementById('home-content');
        if (frame && home) {
            e.preventDefault();
            frame.style.display = 'none';
            frame.src = 'about:blank';
            home.style.display = 'block';
        }
    }        
});
