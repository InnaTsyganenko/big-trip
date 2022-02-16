import SmartView from './smart-view';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {calcDuration} from '../utils/common';


const renderMoneyChart = (barHeight, moneyCtx, typeByMoneySorting) => {
  moneyCtx.height = barHeight;

  return new Chart(moneyCtx, {
    plugins: [ChartDataLabels],
    type: 'horizontalBar',
    data: {
      labels: typeByMoneySorting.map((items) => items[0]).map((item) => item.toUpperCase()),
      datasets: [{
        data: typeByMoneySorting.map((items) => items[1]),
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        anchor: 'start',
        barThickness: 44,
        minBarLength: 50,
      }],
    },
    options: {
      responsive: false,
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: '#000000',
          anchor: 'end',
          align: 'start',
          formatter: (val) => `€ ${val}`,
        },
      },
      title: {
        display: true,
        text: 'MONEY',
        fontColor: '#000000',
        fontSize: 23,
        position: 'left',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#000000',
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

const renderTypeChart = (barHeigth, typeCtx, typeByTransportSorting) => {
  typeCtx.height = barHeigth;

  return new Chart(typeCtx, {
    plugins: [ChartDataLabels],
    type: 'horizontalBar',
    data: {
      labels: typeByTransportSorting.map((items) => items[0]).map((item) => item.toUpperCase()),
      datasets: [{
        data: typeByTransportSorting.map((items) => items[1]),
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        anchor: 'start',
        barThickness: 44,
        minBarLength: 50,
      }],
    },
    options: {
      responsive: false,
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: '#000000',
          anchor: 'end',
          align: 'start',
          formatter: (val) => `${val}x`,
        },
      },
      title: {
        display: true,
        text: 'TYPE',
        fontColor: '#000000',
        fontSize: 23,
        position: 'left',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#000000',
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

const renderTimeChart = (barHeigth, timeCtx, typeByTimeSorting) => {
  timeCtx.height = barHeigth;

  return new Chart(timeCtx, {
    plugins: [ChartDataLabels],
    type: 'horizontalBar',
    data: {
      labels: typeByTimeSorting.map((items) => items[0]).map((item) => item.toUpperCase()),
      datasets: [{
        data: typeByTimeSorting.map((items) => (items[1])),
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        anchor: 'start',
        barThickness: 44,
        minBarLength: 70,
      }],
    },
    options: {
      responsive: false,
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: '#000000',
          anchor: 'end',
          align: 'start',
          formatter: (val) => calcDuration(val),
        },
      },
      title: {
        display: true,
        text: 'TIME',
        fontColor: '#000000',
        fontSize: 23,
        position: 'left',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#000000',
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

const createStatisticsTemplate = (stats) => `<section class="statistics">
  <h2 class="visually-hidden">Trip statistics</h2>

  ${stats.map((value) => `<div class="statistics__item statistics__item--${value}${value === 'time' ? '-spend' : ''}">
    <canvas class="statistics__chart  statistics__chart--${value}" width="900"></canvas>
  </div>`)}
  </section>`;

export default class StatsView extends SmartView {
  #moviesByMoneyChart = null;
  #moviesByTypeChart = null;
  #moviesByTimeChart = null;
  #statsValues = null;

  constructor(points) {
    super();
    this.#statsValues = ['money', 'transport', 'time'];
    this._data = {points};

    this.#setCharts();
  }

  get template() {
    return createStatisticsTemplate(this.#statsValues);
  }

  restoreHandlers = () => {
    this.#setCharts();
  }

  #setCharts = () => {
    const BAR_HEIGHT = 70;
    const {points} = this._data;
    const moneyCtx = this.element.querySelector('.statistics__chart--money');
    const typeCtx = this.element.querySelector('.statistics__chart--transport');
    const timeCtx = this.element.querySelector('.statistics__chart--time');

    const allTypesUniq = [...new Set(points.map((point) => point.type))].map((item) => item.toUpperCase()).flat();
    const barHeigth = BAR_HEIGHT * allTypesUniq.length;

    const counTypeByMoney = points.reduce((acc, el) => {
      acc[el.type] = (acc[el.type] || 0) + el.price;
      return acc;
    }, []);

    const counTypeByTransport = points.reduce((acc, el) => {
      acc[el.type] = (acc[el.type] || 0) + 1;
      return acc;
    }, []);

    const counTypeByTime = points.reduce((acc, el) => {
      acc[el.type] = (acc[el.type] || 0) + el.duration;
      return acc;
    }, []);

    const typeByMoneySorting = Object.entries(counTypeByMoney).sort((a, b) => b[1] - a[1]);
    const typeByTransportSorting = Object.entries(counTypeByTransport).sort((a, b) => b[1] - a[1]);
    const typeByTimeSorting = Object.entries(counTypeByTime).sort((a, b) => b[1] - a[1]);

    this.#moviesByMoneyChart = renderMoneyChart(barHeigth, moneyCtx, typeByMoneySorting);
    this.#moviesByTypeChart = renderTypeChart(barHeigth, typeCtx, typeByTransportSorting);
    this.#moviesByTimeChart = renderTimeChart(barHeigth, timeCtx, typeByTimeSorting);
  }
}
