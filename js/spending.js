const defaultLabel = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']

const spendingDefaultData = [84, 0, 0, 0, 87, 0, 0, 0, 27, 0, 0, 0, 40, 0, 0, 0, 65, 0, 0, 0, 56, 0, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 47, 0, 0, 0, 99, 0, 0, 0, 99, 0, 0, 0, 12, 0, 0, 0, 19, 0, 0, 0, 7, 0, 0, 0, 37, 0, 0, 0, 77, 0, 0, 0, 27, 0, 0, 0, 39, 0, 0, 0, 67, 0, 0, 0, 7, 0, 0, 0, 54, 0, 0, 0, 38, 0, 0, 0, 60, 0, 0, 0, 78, 0, 0, 0, 68, 0, 0, 0, 91, 0, 0, 0, 93, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 77, 0]

const title = 'Spending History'
const xLabel = 'Week'
const yLabel = 'Dollars Spent (CAD)'

// <block:setup:1>
const data = {
    labels: defaultLabel,
    datasets: [{
        label: '',
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        data: spendingDefaultData
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: title
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: yLabel
                }
            },
            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: xLabel
                }
            }
        }
    }
};
// </block:config>