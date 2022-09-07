import {Component} from '@angular/core';
import {LegendLabelsContentArgs, SeriesType} from "@progress/kendo-angular-charts";

@Component({
  selector: 'my-chart',
  templateUrl: './mychart.component.html'
})
export class MyChartComponent {
  typeChart: SeriesType = "bar"
  public data = [
    {name: "Angular", value: 75, color: "red"},
    {name: "React", value: 15, color: "blue"},
    {name: "Svelte", value: 5, color: "orange"},
  ];

  public label(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.name}`;
  }
}
