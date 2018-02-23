var selected = [];

var grid = fillableGrid(10,10,function(el,row,col,i) {
    console.log("You've selected:", selected.toString());
    el.className = 'selected';
    selected.push(i);
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
            cell.addEventListener('click', (function(el, r, c, i) {
                return function() {
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}
