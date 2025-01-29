// 當頁面加載完成後，顯示歡迎信息
document.addEventListener('DOMContentLoaded', function() {
    alert('歡迎來到健康與健身生活網站！讓我們一起變得更健康！');
});

// 滾動到頁面頂部的功能
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 在頁面右下角添加滾動到頂部按鈕
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '回到頂部';
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.backgroundColor = '#4CAF50';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollToTopButton);

// 當用戶滾動到一定位置顯示按鈕
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// 點擊按鈕時滾動到頁面頂部
scrollToTopButton.addEventListener('click', scrollToTop);
