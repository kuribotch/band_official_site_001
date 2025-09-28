document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const sideMenu = document.getElementById('side-menu');
    const mainHeader = document.querySelector('.main-header');
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    // ハンバーガーメニューの開閉
    menuIcon.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
    });

    // スクロール時のヘッダー表示・非表示
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            mainHeader.style.opacity = 0;
        } else {
            mainHeader.style.opacity = 1;
        }
        lastScrollY = window.scrollY;
    });

    // ローディング画面の制御
    window.addEventListener('load', function() {
        setTimeout(() => {
            loaderWrapper.style.opacity = 0;
            loaderWrapper.style.visibility = 'hidden';
        }, 500);
    });

    // スムーズスクロール
    document.querySelectorAll('.side-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            sideMenu.classList.remove('active'); // クリック後メニューを閉じる
        });
    });
});