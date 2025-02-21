document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('المزيد من التفاصيل حول هذا الخبر قادمة قريبًا!');
        });
    });
});