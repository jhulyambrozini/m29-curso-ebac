import styled from 'styled-components'
import { Props } from './Title'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.colorPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
