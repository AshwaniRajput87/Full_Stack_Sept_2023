import IntersectionObserverUtils from "../utils/IntersectionObserverUtils.js";

// Implementing for lazy loading of the images.

const handleImgIntersection = (img) => {
    img.src = img.dataset.src; // img.dataset -> src

    img.onload = ()=> {
        img.removeAttribute('data-src');
    }

    
}

const lazyLoading = () => {
    const intersectionObserver = new IntersectionObserverUtils(handleImgIntersection, {threshold: 0});

    const images = document.querySelectorAll('img[data-src]'); // array of all image elements

    images.forEach((image)=>{
        intersectionObserver.observe(image);
    });
}

lazyLoading();