import { Component, Input, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { Socket } from 'socket.io-client';
import { SocketService } from '../../../_core/services/socket.service';

@Component({
  selector: 'app-sensor-chart',
  templateUrl: './gyroscope-chart.component.html',
  styleUrls: ['./gyroscope-chart.component.scss'],
})
export class GyroscopeChartComponent {
  socket: Socket;
  @Input() link: string;
  @Input() sensor: string;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'X Coordinate',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [],
        label: 'Y Coordinate',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [],
        label: 'Z Coordinate',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private socketService: SocketService) {
    this.socketService.init();
    this.socket = this.socketService.socket;
    Chart.register(Annotation);
  }

  ngOnInit(): void {
    this?.socket?.on(this?.link + this.sensor, (data: any) => {
      this.pushOne(data);
    });
  }

  public pushOne(data: { x: number; y: number; z: number }): void {
    const len = this.lineChartData.datasets[0].data.length;
    if (len > 20) {
      this.lineChartData.datasets[0].data =
        this.lineChartData.datasets[0].data.slice(1);
      this.lineChartData.datasets[1].data =
        this.lineChartData.datasets[1].data.slice(1);
      this.lineChartData.datasets[2].data =
        this.lineChartData.datasets[2].data.slice(1);
      this.lineChartData.labels = this.lineChartData.labels.slice(1);
    }
    this.lineChartData.datasets[0].data.push(data.x);
    this.lineChartData.datasets[1].data.push(data.y);
    this.lineChartData.datasets[2].data.push(data.z);
    this.lineChartData?.labels?.push(
      new Date(Date.now()).getMinutes() +
        ':' +
        new Date(Date.now()).getSeconds() +
        ':' +
        new Date(Date.now()).getMilliseconds()
    );

    this.chart?.update();
  }
}
