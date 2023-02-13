import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from '@syncfusion/ej2-react-charts'
import { pieChartData } from '../../data/dummy'
import { Header } from '../Header'

export const Pie = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <AccumulationChartComponent
        id="charts"
        legendSettings={{
          visible: true,
        }}
        enableSmartLabels={true}
        enableAnimation={true}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            type="Pie"
            explode={true}
            explodeOffset="5%"
            explodeIndex={0}
            dataLabel={{
              visible: true,
              position: 'Outside',
              name: 'x',
            }}
            radius="r"
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>{' '}
    </div>
  )
}
