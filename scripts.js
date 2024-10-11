/**
 * DigitalSync©️
 * Copyright (c) 2024 DigitalSync©️
 * 
 * This project is licensed under a Custom License. 
 * Please see the LICENSE file for details on usage restrictions.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.services-section, .developers-section, .about-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1; 
            section.classList.add('fade-in');
        }, index * 500); 
    });
});

document.querySelectorAll('.animate').forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});