/* -----------------------------
   Loader Animation
-------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if(loader){
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1000); // Loader visible for 1 second
    }
});
