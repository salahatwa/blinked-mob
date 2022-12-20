import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-smallchartwallet',
  templateUrl: './smallchartwallet.component.html',
  styleUrls: ['./smallchartwallet.component.scss']
})
export class SmallchartwalletComponent implements OnInit {
  
  areaChartOptions: ChartOptions = {
    backgroundColor: 'rgba(0, 223, 163, 0.2)',
    borderColor: '#00dfa3',
    responsive: true,
    // labels: ['A', 'B', 'C', 'D'],
    scales: {
      x: { display: false },
      y: {
        display: false,
        position: 'left',
        beginAtZero: true,
        grid: {
          color: 'rgba(100, 100, 100, 0.3)',
        },
        ticks: {
          color: '#666'
        }
      },
    },
    // scales: {
    //   y: [
    //     {
    //       display: false,
    //     }
    //   ],
    //   xAxes: [
    //     {
    //       display: false,
    //     }
    //   ]
    // }
  };
  // areaChartLabels: Label[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
  areaChartType: ChartType = 'line';
  areaChartLegend = false;
  areaChartPlugins = [];

  areaChartData: ChartDataset[] = [
    { data: [55, 35, 45, 26, 60], label: 'Quarterly Result', radius: 1, }
  ];
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomize();
    }, 2000);

  }

  randomize(): void {
    // Only Change 3 values
    this.areaChartData[0].data = [
      Math.round(Math.random() * 100),
      (Math.random() * 10),
      (Math.random() * 40),
      (Math.random() * 50),
      Math.round(Math.random() * 100),
      (Math.random() * 30),
      (Math.random() * 50)
    ];
  }

}
