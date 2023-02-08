import { GridComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { ordersGrid } from '../data/dummy'

export const Orders = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}
