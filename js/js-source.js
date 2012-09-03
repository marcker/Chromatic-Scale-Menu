/*
Chromatic Scale Menu 1.0
              by Marcker
     marckfree@gmail.com
     
                Dez-2011
             MIT License
         
         js/js-source.js
*/

function create_menu(color, mode) {
    function random() { return Math.random();}
    function floor(x) { return Math.floor(x);}
    function generate_random_hex_color(hex_values) {
        return '#' + hex_values[floor(random()*hex_values.length)] + hex_values[floor(random()*hex_values.length)] +
                     hex_values[floor(random()*hex_values.length)] + hex_values[floor(random()*hex_values.length)] +
                     hex_values[floor(random()*hex_values.length)] + hex_values[floor(random()*hex_values.length)];
        }

    var i, j, li;
        li = document.querySelector('#menu').getElementsByTagName('li');

    if (mode === 'random') {
        for (i = 0; i < li.length; i += 1) {
            li[i].style.background = generate_random_hex_color([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']);
        }
    }
    else {
        color = color.split();
        var hex_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'].reverse();

        for (i = 0; i < li.length; i += 1) {
            if (i > 9) {
                for (j = 0; j < li.length - i; j += 1) {
                    li[i].style.background = '#' + j + color[0][2] + color[0][3];   
                }
            }
            else {
                li[i].style.background = '#' + i + color[0][2] + color[0][3];
            }
        }
    }
}

DomReady.ready(function() {
    create_menu('#190');
});