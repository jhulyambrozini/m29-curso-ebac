import styled from 'styled-components'
import { Props } from './Paragrapho'

export const ParagraphoStyle = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.colorType === 'principal' ? '#282a35' : '#949494')}
  line-height: 22px;
`
