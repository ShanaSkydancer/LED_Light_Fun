'use strict';

const express = require('express');
var five = require("johnny-five");
var app = express();

//Folders being accessed
//'public' is the folder that styling, fonts, images are in
app.use(express.static('public'));
//'views' is the folder where my layouts are in
app.use(express.static('routes'));

//Port and environment variable
app.set('port', (process.env.PORT || 3000));


//Create a new board
var board = new five.Board();

//Normal
board.on('ready', () => {
    var pin = new five.Pin(9);
    

    class LedLight {
        constructor(pin){  
            var pin = new five.Pin(9);
        }

        on(){    
            pin.high();
        }

        off(){       
            pin.low();
        }

        blink_fast(){
            setInterval(() => {
                if (this.pin.on()) {
                    pin.off();
                } else {
                    pin.on();
                };

            }, 500);
        }
        
        blink_slow(){
            setInterval(() => {
                if (this.pin.on()) {
                    pin.off();
                } else {
                    pin.on();
                };

            }, 1000);
        }

        on_count(){
            var count = 0;

            if (pin.on()) {
                count ++;
            } else {
                pin.off();
            }
        }

        reset_count(){
            this.count = 0
        }
    };
        
    var light = new LedLight(9);
    light.on();
    // light.off();
    // light.blink_fast();
    // light.blink_slow();
    // light.on_count();
    // console.log(light.state);
    // console.log(light.count);
    // console.log(light.status());
});

// blink_fast() {
//     led.blink();
//     setInterval(() => { 
//         setTimeout ()) => {
//             led.on();
//         }, 90);
//     })
// }