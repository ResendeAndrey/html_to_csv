import { useCallback, useState } from "react";
import Pagination from "../Pagination";
import { TableSC, TableTD, TableTH, TableTR } from "./styled";

export interface ICSVJSONProps {
  act_symbol: string,
  company_name: string
  security_name: string
  exchange: string
  cqs_symbol: string
  etf: string
  nasdaq_symbol: string
  round_lot_size: string
  test_issue: string
}

interface ITableData {
 data: ICSVJSONProps[]
}



const Table = ({data}: ITableData) => {
  const [pagination, setPagination] = useState({
    firstItem: 0,
    nextItem: 20
  })
  const [selected, setSelected] = useState<ICSVJSONProps>({} as ICSVJSONProps)

  const changePagination = useCallback((type: 'next' | 'previous') => {
    if(type === 'next') {
      setPagination(old => ({
        firstItem: old.firstItem + 20,
        nextItem:  old.nextItem + 20
      }))
    } else {
      setPagination(old => ({
        firstItem: old.firstItem - 20,
        nextItem:  old.nextItem - 20
      }))
    }
  },[])

  const handleViewItemByClick = (item: ICSVJSONProps) => {
    alert(`you are clicked in ${item.company_name}`)
  }


  return (
    <>
    <TableSC>
      <thead>
         <TableTR>
          <TableTH>ACT Symbol</TableTH>
          <TableTH>Comany Name</TableTH>
          <TableTH>CQS Symbol</TableTH>
          <TableTH>ETF</TableTH>
          <TableTH>Exchange</TableTH>
          <TableTH>NASDAQ Symbol</TableTH>
          <TableTH>Security Name</TableTH>
          <TableTH>Test Issue</TableTH>
         </TableTR>

      </thead>
      <tbody>
          {data.slice(pagination.firstItem, pagination.nextItem).map((item) => (
        <TableTR onClick={() => handleViewItemByClick(item)}>

          <TableTD>{item.act_symbol}</TableTD>
          <TableTD>{item.company_name}</TableTD>
          <TableTD>{item.cqs_symbol}</TableTD>
          <TableTD>{item.etf}</TableTD>
          <TableTD>{item.exchange}</TableTD>
          <TableTD>{item.nasdaq_symbol}</TableTD>
          <TableTD>{item.security_name}</TableTD>
          <TableTD>{item.test_issue}</TableTD>



          </TableTR>
          ))}

      </tbody>
    </TableSC>
    <Pagination
    totalPages={Math.round(data.length / 20)}
      pagination={pagination}
      changePagination={changePagination}
    />
    </>
  )
}

export default Table;