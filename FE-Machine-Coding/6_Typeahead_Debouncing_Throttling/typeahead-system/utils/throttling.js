/***
 *  What is throttling?
 * 
 *    -> Throttling means restricts the function execution at a defined interval.
 * 
 *    -> Uses cases:
 *        1. Prevention quick button clicks via mouse
 *        2. mousemove events
 *        3. Limiting scroll event triggers.
 */

export const throttle = (cb, delay) => {

    let lastExecutedTime = 0;

    return function(...args) {
        const currentTime = Date.now();
        const elapsed = currentTime - lastExecutedTime;

        if(elapsed >= delay) {
            cb.apply(this, args);
            lastExecutedTime = currentTime;
        }
    }
}

