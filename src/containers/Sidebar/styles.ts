import styled from 'styled-components'
import { ParagraphoStyle } from '../../components/Paragrapho/styles'

export const Description = styled(ParagraphoStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.colorBackground};
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colorPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  top: 80px;
  left: 0;
  position: sticky;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
