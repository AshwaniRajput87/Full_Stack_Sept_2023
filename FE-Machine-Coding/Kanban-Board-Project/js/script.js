class KanbanBoard {

    constructor() {
        this.toolboxContainer = document.querySelector('.toolbox-cont');
        this.modal = document.querySelector('.moday-overlay');
        this.closeModalBtn = document.querySelector('.modal-close-btn');

        this.toolboxContainer.addEventListener('click', this.handleToolboxClick.bind(this));
    }

    handleToolboxClick() {
        // console.log('toolbox clicked')
        
    }

}

new KanbanBoard();


