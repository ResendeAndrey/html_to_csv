import styled from 'styled-components'
export const TableTR = styled.tr `
width: 100%;
cursor: pointer;
:hover {
  background-color: darkgray;
}
`

export const TableTD = styled.td `
text-align: center;
border: 1px solid gray;
background-color: #fff;

`

export const TableTH = styled.th`
border: 1px solid gray;
background-color: darkgray;
font-weight: bold;
`
export const TableSC = styled.table  `
min-width: 1200px;
width: 100%;
border-collapse: collapse;
`

export const BTNDownload = styled.button `
background-color: green;
border: none;
padding: 1rem 2rem;
margin-bottom: 1rem;
color: white;
font-size: 1.15rem;
font-weight: bold;
cursor: pointer;
`