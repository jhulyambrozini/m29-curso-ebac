import styled from 'styled-components'
import { Props } from './Paragrapho'

export const ParagraphoStyle = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.colorType === 'principal'
      ? props.theme.colorPrincipal
      : props.theme.colorSecundary};
  line-height: 22px;
`
