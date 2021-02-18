function initMap() {
    // The location of Uluru
    const lublin = { lat: 51.24774364382149, lng: 22.56485054750721 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: lublin,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: lublin,
        map: map,
    });
}

// ---------------------------- SLIDE IN EFFECT

// debounce
const debounce = (func, wait = 20, immediate = 20) => {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


document.addEventListener("DOMContentLoaded", () => {
    const sliderElements = document.querySelectorAll(".slide-module");

    const checkSlide = (e) => {
        sliderElements.forEach((slideElement) => {

            //percentage of the element - 25% visible
            const slideInAt = (window.scrollY + window.innerHeight) - (slideElement.offsetHeight * 0.10);
            
            //bootom of the element
            const elementBottom = slideElement.offsetTop + slideElement.offsetHeight;

            //if element is in viewport
            const isHalfShown = slideInAt > slideElement.offsetTop;
            // const isNotScrolledPast = window.scrollY < elementBottom;

            // if (isHalfShown && isNotScrolledPast)
            if (isHalfShown){
                slideElement.classList.add("active");
            } else {
                // slideElement.classList.remove("active");
            }
        });
    };
    
    window.addEventListener("scroll", debounce(checkSlide));
    
    // gotop button

    const checkBtn = (e) => {
        const goTopBtn = document.querySelector(".goTopBtn");
        if (window.scrollY > 500) {
            console.log(window.scrollY);
            goTopBtn.classList.add("sticky");
        } else {
            goTopBtn.classList.remove("sticky");
        }
    }
    
    window.addEventListener("scroll", checkBtn);

    
}
);
