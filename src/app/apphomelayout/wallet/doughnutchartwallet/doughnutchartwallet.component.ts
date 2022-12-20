import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import {  BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-doughnutchartwallet',
  templateUrl: './doughnutchartwallet.component.html',
  styleUrls: ['./doughnutchartwallet.component.scss']
})
export class DoughnutchartwalletComponent implements OnInit {

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    backgroundColor: '#FFBD17',
  };
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLegend = false;
  doughnutChartPlugins = [];
 
  doughnutChartData: ChartDataset[] = [
    { data: [55, 25, 10, 10], label: 'My Expenses' }
  ];

  constructor() { }

  ngOnInit(): void {

  }


}
