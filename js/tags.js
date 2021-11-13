
const favouriteTags = ['Adventure', 'Indie', 'Multiplayer', 'Puzzle', 'Single-player', 'Strategy']
const tagData = [1, 20, 30, 40, 50, 60]
const bgColours = ['rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)']

const borderColours = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
]
// <block:setup:1>
const data = {
    labels: favouriteTags,
    datasets: [{
        label: 'Play Time',
        backgroundColor: bgColours,
        // borderColor: borderColours,
        hoverOffset: 4,
        data: tagData
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'doughnut',
    data: data,
};
// </block:config>

module.exports = {
    actions: [],
    config: config,
};
