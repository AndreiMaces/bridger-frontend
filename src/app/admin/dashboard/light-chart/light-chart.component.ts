import { Component, Input, ViewChild } from '@angular/core';
import { Socket } from 'socket.io-client';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SocketService } from '../../../_core/services/socket.service';
import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-light-chart',
  templateUrl: './light-chart.component.html',
  styleUrls: ['./light-chart.component.scss'],
})
export class LightChartComponent {
  socket: Socket;
  @Input() link: string;
  sensor = 'lightSensor';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Illuminance',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
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

  public pushOne(data: { illuminance: number }): void {
    this.lineChartData.datasets[0].data.push(data.illuminance);
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
