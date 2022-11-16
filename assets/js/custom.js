var options = [];

$( '.dropdown-menu a' ).on( 'click', function( event ) {

var $target = $( event.currentTarget ),
    val = $target.attr( 'data-value' ),
    $inp = $target.find( 'input' ),
    idx;

if ( ( idx = options.indexOf( val ) ) > -1 ) {
    options.splice( idx, 1 );
    setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
} else {
    options.push( val );
    setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
}

$( event.target ).blur();
    
console.log( options );
return false;
});


$(() => {
chart = new Chartist.Bar(
"#custom-line-chart",
{
    labels: ["2022 \n Jan (Overdue)", "2022 \n Feb", 'Sep', 'Oct', 'Nov', 'Dec', "2022 \n Mar", "2022 \n Apr", "2022 \n May"],
    series: [
        [1000, 2000, 0, 0, 0, 0, 600, 800, 2500],
        // [4, 8, 9, 3, 7, 2, 10, 5, 8, 1, 7, 10],
    ],
},
{   
    showLine: true, 
    axisX: { 
        position: "start",
    }, 
    height: 385,
    seriesBarDistance: 500,
    axisY: { 
        position: "end",
        lines: false
    }, 
    high: 3000,
    plugins: [
        Chartist.plugins.tooltip(),
        // Chartist.plugins.ctBarLabels({
        //     position: {
        //         x: function (data) {
        //             return data.x1
        //         },
        //         y: function (data) {
        //             return data.y2 - 20
        //         }
        //     },
        //     labelOffset: {
        //         y: 7
        //     },
        //     labelInterpolationFnc: function (text) { 
        //         return text == 0 ? '' : text
        //     }
        // })
    ] 
}
)
console.log(Chartist, ' <=== chart')

var data1 = {
labels: ['PASSIONFROID PARIS SUD', 'EPISAVEURS AQUITAINE ', 'PASSIONFROID SUD OUEST', 'FRAICHADOUR', 'AXURIA'],
series: [45, 15, 10, 25, 5]
};

new Chartist.Pie('#chart5', data1, {
showLabel: false,
plugins: [
    Chartist.plugins.legend()
]
});



$("#dash-daterange").flatpickr({
altInput: !0,
// mode: "range",
altFormat: "F j, y",
defaultDate: "today"
});

$(document).ready(function() {
    $('#modal-table').dataTable({
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bInfo": false,
        "bAutoWidth": true,
        aoColumnDefs: [
            {
               bSortable: false,
               aTargets: [ -1 ]
            }
          ]
    });
      
    });
})