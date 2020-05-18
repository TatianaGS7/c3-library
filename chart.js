// 1		
		var chart1 = c3.generate({
		    bindto: '#chart1',
		    size: {
		        height: 240,
		        width: 480
		    },
		    padding: {
		        top: 40,
		        right: 100,
		        bottom: 40,
		        left: 100,
		    },
		    data: {
		      columns: [
		        ['data1', 30, 200, 100, 400, 150, 250],
		        ['data2', 50, 20, 10, 40, 15, 25]
		      ],
		      axes: {
		        data2: 'y2'
		      },
		       types: {
		        data2: 'bar' 
		      }
		    },
		    color: {
		      pattern: ['#ffa899', '#33a8ff']
		    },    
		    axis: {
		      y: {
		        label: { 
		          text: 'Y Label',
		          position: 'outer-middle'
		        },
		        tick: {
		          format: d3.format("$,") 
		        }
		      },
		      y2: {
		        show: true,
		        label: { 
		          text: 'Y2 Label',
		          position: 'outer-middle'
		        }
		      }
		    }
		});

function load_char(){
	chart1.load({
	  columns: [
	    ['data3', 300, 100, 250, 150, 300, 150, 500],
	    ['data4', 100, 200, 150, 50, 100, 250]
	  ]
	});	
}

function unload_char(){
	chart1.unload({
	    ids: ['data2', 'data3']
	});	
}


// 2
var chart2 = c3.generate({
	bindto: '#chart2',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    },
    point: {
        show: false
    }
});

setTimeout(function () {
    chart2.load({ // Заргужает новые данные в график
        columns: [
            ['data1', 230, 190, 300, 500, 300, 400]
        ]
    });
}, 1000);

setTimeout(function () {
    chart2.load({
        columns: [
            ['data3', 130, 150, 200, 300, 200, 100]
        ]
    });
}, 1500);

setTimeout(function () {
    chart2.unload({  // Убирает данные из графика
        ids: 'data1'
    });
}, 2000);


// 3
var chart3 = c3.generate({
	bindto: '#chart3', 
    data: {
        x : 'x',
        columns: [
            ['x', 'www.site1.com', 'www.site2.com', 'www.site3.com', 'www.site4.com'],
            ['download', 30, 200, 100, 400],
            ['loading', 90, 100, 140, 200],
        ],
        groups: [
            ['download', 'loading']
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category', // this needed to load string x value
            tick: {
                rotate: 75,
                multiline: false
            },
            height: 130
        }
    }
});


// 4
// Available Values:

//     line
//     spline
//     area-spline
//     step
//     area-step
//     area
//     bar
//     scatter
//     stanford
//     pie
//     donut
//     gauge

var chart4 = c3.generate({
	bindto: '#chart4',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        names: {
            data1: 'Name 1',
            data2: 'Name 2'
        },
        //type: 'spline' // если единый стиль
        types: {
            data1: 'spline',
            data2: 'area-spline'
        }
    }
});

//5
var chart5 = c3.generate({
	bindto: '#chart5',	
    data: {
        xs: {
            'data1': 'x1',
            'data2': 'x2',
        },
        columns: [
            ['x1', 10, 30, 45, 50, 70, 100],
            ['x2', 30, 50, 75, 100, 120],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 20, 180, 240, 100, 190]
        ]
    }
});

// 6
var chart6 = c3.generate({
	bindto: '#chart6',		
    data: {
        columns: [
            ['data1', 30, 200, 100, 290, 150, 250]
        ],
        regions: {
            'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}] // только пунктирные линии-'dashed' доступны
        }
    },
    axis: {
            y: {
            max: 300,
            min: -100,
            // Range includes padding, set 0 if no padding needed
            // padding: {top:0, bottom:0}
        }
    }
});

// 7
var chart7 = c3.generate({
	bindto: '#chart7',	
    data: {
        columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        labels: true,        
        groups: [
            ['data1', 'data2']
        ],
        order: 'desc' // stack order by sum of values descendantly. this is default.
//      order: 'asc'  // stack order by sum of values ascendantly.
//      order: null   // stack order by data definition.
    },
    bar: {
    width: {
        ratio: 0.3 // this makes bar width 30% of length between ticks
    }
    // or
    //width: 100 // this makes bar width 100px
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
}); 


// 8
var chart8 = c3.generate({
	bindto: '#chart8',		
    data: {
        xs: {
            setosa: 'setosa_x',
            versicolor: 'versicolor_x',
        },
        // iris data from R
        columns: [
            ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
            ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ],
        type: 'scatter'
    },
    zoom: {
        enabled: true
    }
});

// 9
var chart9 = c3.generate({
	bindto: '#chart9',
    data: {
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Iris Petal Width"
    }
});

// 10
var chart10 = c3.generate({
	bindto: '#chart10',	
    data: {
        x: 'x',
        columns: [
            ['x', '2013-10-31', '2013-12-31', '2014-01-31', '2014-02-28'],
            ['sample', 30, 100, 400, 150],
        ]
    },
    axis : {
        x : {
            type : 'timeseries',
            tick: {
                fit: true,
                format: "%e %b %y"
            }
        }
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    legend: {
        // show: false
        position: 'right'
    }
});

// 11
var chart11 = c3.generate({
	bindto: '#chart11',		
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        types: {
            data1: 'bar',
        }
    },
    axis: {
        rotated: true
    }
});

// 12
var chart12 = c3.generate({
	bindto: '#chart12',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250]
        ],
        type: 'bar',
        colors: {
            data1: '#e7ff99',
            data2: '#cc0081',
            data3: '#6666ff'
        },
        color: function (color, d) { // затемнение
            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 200) : color;
        }
    }
});

// 13
var chart13 = c3.generate({
	bindto: '#chart13',	
    data: {
        columns: [
            ['data1', 100],
            ['data2', 300],
            ['data3', 200]
        ],
        type: 'pie'
    },
    legend: {
        show: false
    }
});

function toggle(id) {
    chart13.toggle(id);
}

d3.select('.container_char').insert('div', '.chart_custom').attr('class', 'legend').selectAll('span')
    .data(['data1', 'data2', 'data3'])
  .enter().append('span')
    .attr('data-id', function (id) { return id; })
    .html(function (id) { return id; })
    .each(function (id) {
        d3.select(this).style('background-color', chart13.color(id));
    })
    .on('mouseover', function (id) {
        chart13.focus(id);
    })
    .on('mouseout', function (id) {
        chart13.revert();
    })
    .on('click', function (id) {
        chart13.toggle(id);
    });


