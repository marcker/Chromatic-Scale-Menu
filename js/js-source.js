/*
Chromatic Scale Menu 1.0
              by Marcker
     marckfree@gmail.com
     
                Dez-2011
             MIT License
         
         js/js-source.js
*/

function create_menu(color) {
    color = [color];
    var i,
        j,
        hex_letters = ['A', 'B', 'C', 'D', 'E', 'F'].reverse(),
        li = document.getElementById('menu').getElementsByTagName('li');

    // Hexadecimal Numbers [0-9];
    for (i = 0; i <= li.length - 1; i++) {
        if (i > 9) {
            // Hexadecimal Letters [A-F];
            for (j = 0; j <= (li.length - 1) - i; j++) {
                if (j > 5) {
                    break;
                }
                else {
                    li[i].style.background = color[0][0] +
                                                hex_letters[j] +
                                                     color[0][2] +
                                                         color[0][3];
                }
            }
        }
        else {
            li[i].style.background = color[0][0] +
                                        i + 
                                            color[0][2] +
                                                color[0][3];
        }
    }
}

DomReady.ready(function() {
    // color = '#0[ [0-9][A-F] ][ [0-9][A-F] ] e.g #08A or #0AB;
    create_menu('#0A8');
});