var height = 10
var width = 20
var selected = []
var input = Array.apply(null, Array(height)).map(Number.prototype.valueOf, 0)

var raytracer
var grid = fillableGrid(height,width,function(el,row,col,i) {
    if(selected.includes(i)) {
        el.className = '';
        selected.splice(selected.indexOf(i), 1);
        input[height-1-row] -= Math.pow(2, width-col-1);
    } else {
        el.className = 'selected';
        selected.push(i);
        input[height-1-row] += Math.pow(2, width-col-1);
    }
    console.log("You've selected:", selected.toString());
    console.log("The input will be:", input.toString());
});

document.body.appendChild(grid);

function fillableGrid(rows, cols, callback) {
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for(var r=0; r<rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for(var c=0; c<cols; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
            i++;
            cell.addEventListener('click', (function(el, r, c, i) {
                return function() {
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}
