/***
 *  Interviewer: Problem statement: Star rating component
 * 
 *  Requirements:
 *  
 *     What are features the you would like to implement?
 * 
 *     Must have features:
 *      * rating from 1 to 5
 *      * when click -> rating should appear
 *      * a hover effect should be there
 * 
 *     Good to have features:
 *     * optimisation, web accessibility,
 *     * put emojis instead a number.
 *     * put slider based ratings
 * 
 *    Approach:
 *     1. click -> give ratings and fill the starts with yellow color and update the rating count.
 *     2. mouseover -> we have have to fill the stars by yellowish color.
 *     edge case:
 *     3. mouseleave -> move back to gray color
 * 
 */


class StarRating {

    constructor(containerId) {
        this.container = document.querySelector(containerId);
        this.stars = this.container.querySelectorAll('.star');
    
        this.filled = 0;

        this.bindEvents();
    }

    bindEvents() {
       this.container.addEventListener('click', (event) => {this.onStarClick(event)});
       this.container.addEventListener('mouseover', (event) => {this.starUnselect(event)});
       this.container.addEventListener('mouseleave', () => this.restoreRating());
    }

    onStarClick(event) {
        const classElem = event.target.classList[0];
        if(classElem !== 'star') return;
        const currentClicked = event.target.dataset.index;
        this.fillStars(currentClicked);
        this.filled = currentClicked;
        this.updateRatingsCount(this.filled);
   
    }

    fillStars(count) {
        for(let i = 0; i < 5; i++) {
            this.stars[i].classList.remove('star-filled');
        }

        for(let i = 0; i < count; i++) {
            this.stars[i].classList.add('star-filled');
        }
    }

    updateRatingsCount(count) {
        document.getElementById('count').innerText = `Rating Count: ${count}`;
    }

    starUnselect(event) {
        const currElemHovered = event.target.dataset.index;
        this.fillStars(currElemHovered);
    }

    restoreRating() {
        this.fillStars(this.filled);
    }
}

new StarRating('#star-container');

