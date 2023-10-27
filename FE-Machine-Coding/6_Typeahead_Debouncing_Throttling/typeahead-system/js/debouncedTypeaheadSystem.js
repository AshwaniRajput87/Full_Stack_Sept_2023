// end points: https://jsonplaceholder.typicode.com/users`;

/**
 *  What is fetch API?
 *   -> Fetch API is the part of browser not the JS.
 *   -> Use to call the end points or submitting the data as well
 *   -> Fetch API
 *       fetch(url, options)
 * 
 *           url: resources that you want to fetch
 *           options(Optional): an option for addtional settings for the request you will be making such as headers, request Methods(POST, PUT, DELETE)
 * 
 *           const options = {
 *               header: 'Bearer JWT token',
 *               method: 'POST'
 *           }
 * 
 *         fetch() -> retuns promise, then you need to consume the promise to get the data that will returning via ends
 * 
 *         fetch('API end points').
 *          then((response)=>{
 *             // put your logic here
 *          }).catch((error) => {
 *             // put the logic of error handling
 *          });
 * 
 *               or 
 * 
 *           can consume promise via async/await
 * 
 *     What is typeahead system?
 *         ->  shows suggestions when you typing in search box or input box
 */

import { debounce } from "../utils/debouncing.js";
class Typeahead {
    constructor() {
       this.searchInput = document.getElementById('searchInput');
       this.results = document.getElementById('results');

       // implement or use debouncing

       this.debouncedHandleInput = debounce(this.handleInput.bind(this), 300);

       this.searchInput.addEventListener('input', this.debouncedHandleInput);
    }

    async handleInput() {
        const query = this.searchInput.value.trim();

        if(!query.length) {
            return;
        }

        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`);
            const data = await response.json();

            this.displayResults(data); 

        } catch(error) {
           console.error(error);
        }
    }

    displayResults(data) {

        this.clearResults();
       
        const fragment = document.createDocumentFragment();

        data.forEach((user)=>{
            // inserting the fetched dynamic data in fragment.
          const resultItem = document.createElement('div');

          resultItem.className = 'result-item';
          
          resultItem.textContent = user.name;

          fragment.appendChild(resultItem);

          resultItem.addEventListener('click', ()=>{
             this.searchInpu.value = user.name;
             this.clearResults();
          });

        });

        console.log(fragment);

        this.results.appendChild(fragment);
       
    }

    clearResults() {
        this.results.innerHTML = '';
    }

} 


new Typeahead();