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