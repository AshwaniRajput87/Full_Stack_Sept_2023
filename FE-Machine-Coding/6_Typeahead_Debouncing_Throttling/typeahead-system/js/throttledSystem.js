import { throttle } from '../utils/throttling.js';



const fn = () => {
    console.log('Scroll event triggering');
}

let throttledScroll = throttle(fn, 300);

// throttledScroll = null;

window.addEventListener('scroll', throttledScroll);



/**
 *   What is the difference b/w debouncing and throttling?
 * 
 *     Debouncing focuses on waiting for a pause before executing.
 * 
 *     Throttling focuses on the limiting the rate of execution 
 *     within a specified interval.
 */