import styled from 'styled-components'

interface PaginationBTNProps {
  disabledBtn: boolean
}
export const PaginationSC = styled.div `
margin-top: 2rem;
display: flex;
align-items: center;
gap: 1rem;

`

export const PaginationBTN = styled.button<PaginationBTNProps>`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  cursor: ${(props) => props.disabledBtn === true ? 'not-allowed' : 'pointer'};
`