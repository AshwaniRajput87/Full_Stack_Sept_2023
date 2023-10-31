/***
 *  what is drag and drop API?
 * 
 *     -> Provided by browser not the part of JS.
 *     -> Allows users to drag and drop the elements in a specified target area.
 * 
 *     drag and drop events name:
 *       1. dragstart: fires when the elements start dragging.
 *       2. dragend: fires when the element drag operation is done.
 *       3. dragover: fires repeatedly while the dragged element is being dragged over a valid target area.
 *       4. dragenter: fires when the dragged element enters a valid drop target.
 *       5. dragleave: fires when the drag element leaves a valid drop area.
 *       6. drop: fires when the dragged element is released over a valid drop target. 
 * 
 *     How to implement the drag and drop?
 * 
 *       step-1: set up the HTML structure:
 *                   <div id="draggable" draggable="true">Drag me</div>
 *                   <div id="drop-target">Drop</div>
 *       step-2: add CSS syling (optional)
 * 
 *       step-3: attach drag and drop events via addEventListener('dragstart', ()=>{
 *                    // the logic will come here to be executed
 *        })
 * 
 */