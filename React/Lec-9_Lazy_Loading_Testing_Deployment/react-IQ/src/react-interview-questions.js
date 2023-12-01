/**
 *  What is purpose of react that you have learnt so far?
 *    -> To build and updates the UIs for web appps with efficient rendering and to follow component-based architecture.
 * 
 *  What is VDOM? How does it works?
 *   -> In-memory representation of real DOM.
 *   -> This is a representation of UI which kept in the memory and later at some point in time it sync with real DOM.
 * 
 *  What is benefit of VDOM in react?
 *   -> improves the web performance of updating the UI.
 *   -> Changes are first made in the VDOM before applying on the actual/Real DOM.
 * 
 *  How VDOM works in react?
 *  
 *   1. Initial Rendering:
 *         - When we create a react component, it creates a VDOM tree.
 *         - The entire VDOM is rendered and converted into the real DOM.
 *   2. Component updates:
 *         - When the state or props change in a component, the react re-renders the component.
 *         - Instead of directly the changes in real DOM, first it creates a new VDOM that represents the updated component.
 *   3. Reconciliation (or Diffing Algorithm)O(n):
 *         - Then, react compares the new VDOM with the previous VDOM, this process is known as Reconciliation.
 *         - It uses a 'diffing algo' to identify the difference between the two VDOMs efficiently.
 *   4. Minimizing DOM updates:
 *         - Only the differences b/w the new and previous VDOM are applied on the real DOM.
 *         - This minimizes the number of updates and improve performance. 
 *   What is custom hook?
 *         - A custom hook in react is JS function that starts and leverages the buit-in hooks and other custom hooks
 *           to encapsulate and share the reusable logic accoss the components.
 * 
 *         - Custom hooks help to keep the component clean, maintainable and promote the code reusability.
 * 
 *         - Implementation - Please refer the custom hook by useFetch() and its usage in e-commerce project.
 *    What is useState() hook?
 *         - useState() hook allows you to add the state in the functional components only.
 *         - returns an array of 2 elements: the current state value and a function to udate the state.
 *            eg: const [count, setCount] = useSate(intialState value);
 *         - Whenever the setState is called then component will get re-render.
 *         - refer counter example.
 * 
 *    What is react perf?
 *         - React perf is the practice of optimizing the speed and efficiency of react web apps 
 *           to ensure the smooth user experience.
 * 
 *           what are the techniques do you follow while building any react apps for making react apps more performant?
 *         
 *             1. useRef() hook.
 *             2. Memoisation in react
 *                 1. useMemo() hook
 *                 2. useCallback() hook
 *                 3. React.memo() -> HOC
 *             3. code splitting - next class
 *             4. lazy loading - next class
 * 
 *    What is useRef()? Explain about usage when to use it?
 *       - it's built-in hook in react that allows you to persist the value between the renders.
 *       - used to store the mutable value that does not cause the re-render when updated.
 *       - with help of useRef(), you can direcly access the DOM element.
 * 
 *       - Usage - refer code.
 * 
 *    What is memoisation?
 *      - optimisation technique that can also be used in react and many other programming as well to the performance of 
 *        expensive function calls by caching their results.
 *         
 *        1. useMemo(()=> {expensive computation}, [dependencies]) hook
 *             - It caches the result the function or computation and returns the cached result when the dependencies are not being changed.
 *             - So, it is used to cache the values or results from an expensive function calls.
 *        2. useCallback(()=> {expensive computation}, [dependencies]) hook
 *             - memoizes a callback function and returns the same memoised function b/w the renders if the dependencies are not being changed. 
 *             - So, it caches or memoise the whole callback function itself.
 *        Usages - refer the code.
 * 
 *    What is React.memo()?
 *       - it's a HOC that memoizes the whole functional component to avoiding the re-rendering unless the props are not going to be changed.
 *       - usage - refer the code of UsageOfUseMemo component
 *    
 */