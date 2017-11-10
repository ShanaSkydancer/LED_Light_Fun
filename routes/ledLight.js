var board = new five.Board();

board.on('ready', () => {
    var pin = new five.Pin(9);
    // the light will switch on
    pin.high();
    // the light will switch off after 2 seconds
    setTimeout(() => {
        pin.low()
    }, 2000);
});

class LedLight {
    constructor(state, count){  
        // var elem = document.getElementById(id);
        // elem.classList.add('light-background');
        // var lightElem = document.createElement('div');
        // lightElem.classList.add('light');
        // lightElem.classList.add(color);
        // elem.appendChild(lightElem);
        // this.color = color;
        this.state = 'off';
        this.count = 0;
    }

    on(){
        // var lightElem = document.querySelector('.light');        
        // lightElem.classList.add('on');        
        this.state = 'on';
    }

    off(){
        // var lightElem = document.querySelector('.light');                
        // lightElem.classList.remove('on');                
        this.state = 'off';
    }

    blink(){
        setInterval(() => {
            if (this.state === 'on') {
                this.off();
            } else {
                this.on();
            };

        }, 1000);
    }

    blink_fast(){
        setInterval(() => {
            if (this.state === 'on') {
                this.off();
            } else {
                this.on();
            };

        }, 500);
    }
    
    blink_slow(){
        setInterval(() => {
            if (this.state === 'on') {
                this.off();
            } else {
                this.on();
            };

        }, 5000);
    }

    on_count(){
        let count = 0;
        // var counter = document.getElementsByClassName('counter');       
        // counter.classList.add('number');

        if (this.state === 'on') {
            count ++;
        } else {
            this.state === 'off'
            count = 0;
        }

        // return `<p>
        //     The light is currently ${this.state} with the count of: ${this.count}
        //     </p>`
    }

    reset_count(){
        this.count = 0
    }

    status(){
        return "The light is currently " + this.state + " with the count of: " + this.count
    }
};


// let light = new LedLight(7);
// light.on();
// light.off();
// light.blink();
console.log(LedLight.state);
console.log(LedLight.count);
console.log(LedLight.status());