document.addEventListener('DOMContentLoaded', function() {
    // Efek Mengetik (Typing Effect)
    const typingText = document.getElementById('typing-text');
    const words = ["Sensi Settings Android", "Sensi Settings Emulator"]; // Ganti dengan peran Anda
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Hapus karakter
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Tambah karakter
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Jeda sejenak setelah kata selesai diketik
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }

    // Panggil fungsi typing jika elemennya ada
    if (typingText) {
        type();
    }

    // Animasi saat Scroll
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Muncul saat 10% bagian terlihat
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Tombol "Scroll to Top"
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };
});
