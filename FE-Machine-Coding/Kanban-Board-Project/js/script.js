class KanbanBoard {

    constructor() {
        this.toolboxContainer = document.querySelector('.toolbox-cont');
        this.modal = document.querySelector('.modal-overlay');
        this.closeModalBtn = document.querySelector('.modal-close-btn');
        this.addCardBtn = document.querySelector(".add-card");
        this.textArea = document.querySelector(".modal-textarea");
        this.mainCont = document.querySelector(".main-cont");
        this.allPriorityColorElems = document.querySelectorAll('.priority-color');
        console.log(this.allPriorityColorElems);

        this.addModal = true;
        this.colors = ['red', 'blue', 'green', 'black'];
        this.modalPriorityColor = 'red';

        this.toolboxContainer.addEventListener('click', this.handleToolboxClick.bind(this));
        this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));
        this.addCardBtn.addEventListener('click', this.handleAddCardClick.bind(this));

        for(const  priorityColorElem of this.allPriorityColorElems) {
            priorityColorElem.addEventListener('click', this.handlePriorityColorClick.bind(this, priorityColorElem));
        }
    }
    
    handleToolboxClick(event) {
        // console.log('toolbox clicked');
        
        const targetClassList = event.target.classList;

        if(targetClassList.contains('fa-plus')) {
            // open the modal
            console.log('plus icon is only clicked');

            this.toggleModal();
        } 
    }

    toggleModal() {
        this.modal.style.display = this.addModal ? 'block' : 'none';
        this.addModal = !this.addModal;
    }

    closeModal() {
        this.toggleModal();
    }

    handleAddCardClick() {
        const task = this.textArea.value.trim();

        if(task.length) {
            this.createTicket(task);
        }
    }

    createTicket(task) {
        const id = new ShortUniqueId().randomUUID();
        const ticketCont = this.createTicketElement(task, id, this.modalPriorityColor);
        this.mainCont.appendChild(ticketCont); 
        this.toggleModal(); 
        this.clearTextarea();
    }

    createTicketElement(task, id, color) {

        const ticketCont = document.createElement('div');
        ticketCont.className = 'ticket-cont';

        ticketCont.innerHTML = `
            <div class="ticket-color ${ color.length ? color : ''}"></div>
            <div class="ticket-id">#${id}</div>
            <div class="ticket-task">${task}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `;

        return ticketCont;
    }

    clearTextarea() {
        this.textArea.value = '';
    }

    handlePriorityColorClick(priorityColorElem) {
        //console.log(priorityColorElem);
        this.decActivatePriorityColors();
        this.activatePriorityColor(priorityColorElem);
        this.modalPriorityColor = priorityColorElem.classList[1];
    }

    decActivatePriorityColors(){
        for(const priorityColorElem of this.allPriorityColorElems) {
            priorityColorElem.classList.remove('active');
        }
    }

    activatePriorityColor(priorityColorElem) {
        priorityColorElem.classList.add('active');
    }





}

new KanbanBoard();


