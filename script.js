console.log("JavaScript is connected!");

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const backdrop = document.getElementById('backdrop');
const menuCloseBtn = document.getElementById('closeBtn');

if (hamburger && sideMenu && backdrop && menuCloseBtn) {
  hamburger.addEventListener('click', () => {
    sideMenu.classList.add('show');
    backdrop.classList.add('visible');
  });

  menuCloseBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    backdrop.classList.remove('visible');
  });

  backdrop.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    backdrop.classList.remove('visible');
  });
}

// Lightbox gallery — only initialize if lightbox element exists
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const galleryImages = document.querySelectorAll('.gallery-container img');
  const lightboxImg    = document.querySelector('.lightbox-img');
  const lightboxClose  = document.querySelector('.lightbox-close');
  const prevBtn        = document.querySelector('.lightbox .prev');
  const nextBtn        = document.querySelector('.lightbox .next');
  let currentIndex     = 0;

  function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
    lightbox.style.display = 'flex';
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage();
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}

// Highlight active menu tab and toggle content visibility
const tabs = document.querySelectorAll('.tab-nav');
const menuSections = document.querySelectorAll('#food, #drinks, #desserts');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active-tab'));
    tab.classList.add('active-tab');

    // Get the target section ID from the data-target attribute
    const target = tab.getAttribute('data-target');

    // Show only the matching menu section
    menuSections.forEach(section => {
      section.style.display = section.id === target ? 'block' : 'none';
    });
  });
});

// Force scroll to top when clicking "Home" or the logo, even if already on #home
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Show button on scroll
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
