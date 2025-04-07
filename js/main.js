const labels = [
    "dvd-player",
    "cd-player",
    "radio",
    "stations",
];

const data = {
    labels: labels,

    datasets:[
        {
            label: "Most used",
            data: [1000, 5000, 6000, 1000, 2000,],
            backgroundColor: ['#8F87F1', '#C68EFD','#E9A5F1', '#FED2E2' ],
        }
    ]
}

const config = {
    type: 'doughnut',
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);