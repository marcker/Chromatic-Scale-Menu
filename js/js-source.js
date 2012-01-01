/*
Chromatic Scale Menu 1.0
              by Marcker
     marckfree@gmail.com
     
                Dez-2011
             MIT License
         
         js/js-source.js
*/

function create_menu(color, mode) {
    function random() { return Math.random()*9;}
    function floor(x) { return Math.floor(x);}
    function generate_color() {
            return'#' + floor(random()) + floor(random()) + // R
                        floor(random()) + floor(random()) + // G
                        floor(random()) + floor(random());  // B
        }

    var i,
        j,
        li = document.getElementById('menu').getElementsByTagName('li');
    
    if (mode == 'random') {        
        for (i = 0; i <= li.length - 1; i++) {
            li[i].style.background = generate_color();    
        }     
    }    
    else {
        color = color.split();
        var hex_letters = ['A', 'B', 'C', 'D', 'E', 'F'].reverse();

        // Hexadecimal Numbers [0-9];
        for (i = 0; i <= li.length - 1; i++) {
            if (i > 9) {
                // Hexadecimal Letters [A-F];
                for (j = 0; j <= (li.length - 1) - i; j++) {
                    if (j > 5) {
                        break;
                    }
                    else {
                        li[i].style.background = color[0][0] + hex_letters[j] + color[0][2] + color[0][3];
                    }
                }
            }
            else {
                li[i].style.background = color[0][0] + i + color[0][2] + color[0][3];
            }
        }
    }
}

DomReady.ready(function() {
    create_menu('#0A8', 'random');
});