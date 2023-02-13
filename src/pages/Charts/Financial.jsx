import {
  CandleSeries,
  Category,
  ChartComponent,
  Crosshair,
  HiloSeries,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  Zoom,
} from '@syncfusion/ej2-react-charts'
import { Tooltip } from '@syncfusion/ej2-react-popups'
import { Header } from '../../components'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'

export const Financial = () => {
  const primaryxAxis = { valueType: 'Category', title: 'Months' }
  const primaryyAxis = { labelFormat: '{value}mm', edgeLabelPlacement: 'Shift', title: 'Rainfall' }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="" />
      <ChartComponent
        id="charts"
        style={{ textAlign: 'center' }}
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        /* legendSettings={legendSettings} */
        title="Maximum and Minimum Rainfall"
      >
        <Inject services={[CandleSeries, Tooltip, Category, Crosshair, Zoom]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            enableSolidCandles={true}
            dataSource={financialChartData}
            xName="x"
            yName="low"
            name="SHIRPUR-G"
            type="Candle"
            low="low"
            high="high"
            open="open"
            close="close"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
