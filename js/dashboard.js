// counter up at number at 4 cards
$(".counter-up").counterUp({
    delay: 10,
    time: 1000
});

// line cart 
let dateArr = ['Jul 21', 'Jul 20', 'Jul 19', 'Jul 18', 'Jul 17', 'Jul 14', 'Jul 13', 'Jul 12', 'Jul 11'];
let orderCountArr = [7, 5, 6, 4, 8, 6, 8, 9, 1];
let viewerCountArr = [13, 12, 15, 15, 17, 19, 20, 33, 25, 35];

var ctx = document.getElementById('ov').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Order Count',
                data: orderCountArr,
                backgroundColor: [
                    '#007bff30'
                ],
                borderColor: [
                    '#007bff'
                ],
                borderWidth: 1,
                tension: 0,
            },
            {
                label: 'Order Count',
                data: viewerCountArr,
                backgroundColor: [
                    '#28a74530'
                ],
                borderColor: [
                    '#28a745'
                ],
                borderWidth: 1,
                tension: 0,
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: false,
                gridLines: [
                    {
                        display: false
                    }
                ]
            }]
        },
        legend: {
            display: true,
            labels: {
                fontColor: '#333',
            }
        }
    }
});

let orderFromPlace = [5, 15, 4, 9, 7];
let places = ["YGN", "MDY", "NPY", "SHAN", "MGW"];

// Pie Chart
var opChart = document.getElementById('op');
var myChart = new Chart(opChart, {
    type: 'pie',
    data: {
        labels: places,
        datasets: [{
            label: 'Order From Places',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: false,
                gridLines: [
                    {
                        display: false
                    }
                ]
            }]
        },
        legend: {
            display: true,
            labels: {
                fontColor: '#333',
            }
        }
    }
});