/**
 *   What is intersection observer API? 
 * 
 *      -> It's a browser API which is not the part of JS.
 *      -> allows you to watch or respond when the element(tags) enters or leaves visible area of its container.
 *      -> Use cases:
 *          1. Lazy loading of your images/videos.
 *          2. Lazy loading of the components (Will see in React)
 * 
 *     -> How to implement it?
 *        1. Create Observer instance.
 *           const observer  = new IntersectionObserver(handleIntersection, options);
 * 
 *           1.1. Define handle intersection
 * 
 *                handleIntersection(entries, observer){
 * 
 *                entries.forEach((entry)=>{
 *                   if(entry.isIntersecting) {
 *                     console.log(entry.target)
 *                     observer.observe();
 *                     observer.disconnect(); // observer.unobserve();
 *                   } else {
 *                      console.log('Diplay the task ahs done');
 *                   }
 *                })
 *               }
 *            1.2. options:
 * 
 *                  const options: {
 *                      root: document.querySelector('.scroll-container');
 *                      rootMargin: '200px'; // any value you can provide.
 *                      threshold: [0, 0.25, 0.5, 0.75, 1]
 *                  }
 * 
 *                  -> threshold means at which point the callback(handleIntersection) should be triggered.
 *                  -> By setting multiple thresholds, you can define specific points at which you want the callback to be invoked.
 * 
 * 
 *         2. Observe the elements:
 *            start observing the elements: observer.observe();
 * 
 *         3. Unobserve the elements: (Optiional)
 *               observer.unobserve();
 * 
 *         4. Disconnect the intersection observer:
 *              Disconnect the observer when you are done with observing multiple elements.
 *              observer.disconnect();
 * 
 *         5. Select the target element:
 *               const targetElem = document.querSelector('img[data-src]');
 *           
 */

class IntersectionObserverUtils {
   
    constructor(callback, options){
        this.callback = callback;
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
    }

    handleIntersection(entries) {
        entries.forEach(entry => {

            if(entry.isIntersecting) {
                this.callback(entry.target);
                this.unobserve(entry.target);
            }
        });
    }

    observe(target) {
        if(target instanceof Element) {
            this.observer.observe(target);
        } else {
            console.error("Invalid target element:", target);
        }
    }

    unobserve(target) {
       if(target instanceof Element) {
          this.observer.unobserve(target);
       } else {
         console.error("Invalid target element,", target);
       }
    }

    disconnect(){
       this.observer.disconnect();
    }
}

export default IntersectionObserverUtils;
