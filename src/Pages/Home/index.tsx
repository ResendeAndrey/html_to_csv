import { useCallback, useEffect, useState } from "react";
import Table, { ICSVJSONProps } from '../../Components/Table';
import Title from "../../Components/Title";

import api from "../../services/api";
import { HomePageSC } from './styled';

const HomePage = () => {
  const [CsvData, setCsvData] = useState<ICSVJSONProps[]>([])

  const formatHeadersToRemoveSpace = (header: string) => {
    return header.replace(/ /g,"_").replace(/[\s]+[,]+|[,]+[\s]+/g, ',').trim().toLocaleLowerCase()
  }
  const ConvertCsvToJson = (csv: string ) => {
    const lines = csv.split("\n")
        const result = []
        const headers = lines[0].split(',')
        for(let i = 1; i<lines.length; i++) {
          if(!lines[i])
          continue
        var obj = {} as any
          const currentLine = lines[i].split(',')
          for (let j = 0; j < headers.length; j++) {
            obj[formatHeadersToRemoveSpace(headers[j])] = currentLine[j]
        }
          result.push(obj)
        }
return result as ICSVJSONProps[]

  }

  const handleGetCsvDataFromAPI = useCallback(async () => {
    try{
      const response = await api.get('/core/nyse-other-listings/other-listed_csv/data/9f38660d84fe6ba786a4444b815b3b80/other-listed_csv.csv')

      if(response.data) {
        const result = ConvertCsvToJson(response.data)
        setCsvData(result)
      }

    }catch (e){
      console.log(e, "error")
    }
  },[])

  useEffect(() => {handleGetCsvDataFromAPI()},[handleGetCsvDataFromAPI])
  return (
    <HomePageSC>
      <Title title="CSV Database"/>
      <Table data={CsvData}/>
    </HomePageSC>
  )
}

export default HomePage;