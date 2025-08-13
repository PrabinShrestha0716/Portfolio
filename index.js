    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for in‑page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
          e.preventDefault();
          document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const gh = document.getElementById('gh');
    const li = document.getElementById('li');
    if (gh && gh.getAttribute('href') === '#') gh.setAttribute('href', 'https://github.com/PrabinShrestha0716');