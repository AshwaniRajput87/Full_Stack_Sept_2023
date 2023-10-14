/**
 *  PS: Implement the Count down timer.
 * 
 *  Requirements:
 *    pass values: in mins and seconds input fields
 *    play , stop, reset
 *    validation on each input fields -> no -ve  values are allowed
 *    
 *    good to have:
 *      reset the timer
 * 
 *    Approach:   min : sec
 *     test case: 10 : 00, get the values from each input filed of mins and secs
 *                minLSB, minMSB, secMSB, secLSB
 *     3 - Buttons
 *        - start - to start the timer
 *        - stop - to stop the timer 
 *        - reset - to reset the input values
 */

class Timer {
    constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display){
        this.minMSB = document.getElementById(minMSB);
        this.minLSB = document.getElementById(minLSB);
        this.secMSB = document.getElementById(secMSB);
        this.secLSB = document.getElementById(secLSB);

        this.start = document.getElementById(start);
        this.stop = document.getElementById(stop);
        this.reset = document.getElementById(reset);

        this.display = document.getElementById(display);

        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;

        this.onStart = this.onStart.bind(this);

        this.start.addEventListener('click', this.onStart);
        this.stop.addEventListener('click', this.onStop);
        this.reset.addEventListener('click', this.onReset);

    }

    onStart(event) {
        event.stopPropagation();
        this.setTime();
        this.startTimer();
    }

    setTime() {
       this.minutes = parseInt(this.minMSB.value)*10 + parseInt(this.minLSB.value);
       this.seconds = parseInt(this.secMSB.value)*10 + parseInt(this.secLSB.value);
    }

    startTimer() {
        if(this.minutes === 0 && this.seconds === 0) {
            this.onReset();
            return;
        }

        this.intervalId = setInterval(()=> {
            this.seconds-=1;

            if(this.seconds < 0) {
                this.seconds = 59;
                this.minutes-=1;
            }

            this.setDisplay(this.minutes, this.seconds);
        }, 1000);
    }

    setDisplay(mins, secs) {
        this.minMSB.value = String(Math.floor(mins/10));
        this.minLSB.value = String(mins%10);
        this.secMSB.value = String(Math.floor(secs/10));
        this.secLSB.value = String(secs%10);
    }

    onStop(event) {
      
    }

    onReset(event) {

    }


}

new Timer('minMSB', 'minLSB', 'secMSB', 'secLSB', 'start', 'stop', 'reset', 'dispaly');


