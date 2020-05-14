var ctx = $("#chartBar");
var genderdataFront = $('#chartBar')
var maleforJS = genderdataFront.data("male")
var femaleforJS = genderdataFront.data("female")
var chartBar = new Chart(ctx, {
    type: 'bar',
    data: {
       labels: [ "male", "female"],
       datasets: [
           {
            label: "gender mojority",
           data:[ maleforJS, femaleforJS ],
           fill:false,
           backgroundColor: [
                        '#26de81',
                        '#fd9644',
           ],
           borderColor: [],
           borderWidth: 2,
           hoverBorderColor: 'rgba(255, 99, 132, 1)',
           hoverBorderWidth: 5,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var RecupId = $('#doughnut')
var lu = RecupId.data("lu")
var nonLu = RecupId.data('messagenonlu')
new Chart($("#doughnut"), {
    type: 'doughnut',
    data: {
       labels: [ "Lu", "nnLu"],
       datasets: [{
           data:[ lu , nonLu],
           backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
           ],
           borderColor: ['rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)'],
           borderWidth: 4,
           hoverBorderColor: 'rgba(255, 99, 132, 1)',
           hoverBorderWidth: 3,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var RecupId = $('#pie')
var exp = RecupId.data("exp")
var nnexp = RecupId.data('nnexp')
new Chart($("#pie"), {
    type: 'pie',
    data: {
       labels: [ "Exp", "nnExp"],
       datasets: [{
           data:[ exp , nnexp],
           backgroundColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
           ],
           borderColor: [
            'rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)'
//             '#fc5c65',
//              '#0fa859',
//              '#e07828',
//              '#dd252b',
//              '#304256',
//             '#4b6584',
        ],
           borderWidth: 3,
           hoverBorderColor: 'rgba(54, 162, 235, 1)',
           hoverBorderWidth: 3,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var RecupId = $('#linechart')
var dataca = RecupId.data("dataca")
console.log(dataca)
var userCountByMonthLabels = []
var userCountByMonthDataResults = []

for(var i =0;i<dataca.length;i++){
    var date = new Date((dataca[i]._id.year), (dataca[i]._id.month-1),1)
    var annee = date.toLocaleString('defaut', {year:'numeric'})
    var month = date.toLocaleString('defaut', {month:'long'})
    userCountByMonthLabels.push(month)
    userCountByMonthDataResults.push(dataca[i].ca)
    console.log(date, dataca[i]._id.month)

    new Chart($("#linechart"), {
    type: 'line',
    data: {
       labels: userCountByMonthLabels ,
       datasets: [{
           label : ["Année", annee],
           data: userCountByMonthDataResults,
           backgroundColor: 'rgba(54, 162, 235, 1)',
           borderWidth: 2,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        // legend: {
        //     display: false,
        // }
    }
});
}