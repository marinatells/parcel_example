import Chart from 'chart.js/auto';

const config = {
    type: 'line',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {}
};

class Graph {
    constructor() {
        this.container = null;
        this.chart = null;
    }

    render(parentNode) {
        const container = document.createElement("div");
        container.classList.add("graph");

        const canvas = document.createElement("canvas");
        const chart = new Chart(canvas, config);

        container.append(canvas);
        parentNode.append(container);

        this.container = container;
        this.chart = chart;
    }
}


export default Graph;