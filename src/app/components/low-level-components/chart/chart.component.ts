// import { animate } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import ApexCharts, { ApexOptions } from 'apexcharts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit {
  chart!: ApexCharts;
  options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    series: [],
    labels: [],
    colors:[]
  };
  ngAfterViewInit(): void {
    this.chart = new ApexCharts(document.querySelector('#chart'), this.options);
    this.chart.render();
  }
}





