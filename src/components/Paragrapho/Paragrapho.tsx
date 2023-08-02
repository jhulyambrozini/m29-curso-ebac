import { ParagraphoStyle } from './styles'

export type Props = {
  children: string
  colorType?: 'principal' | 'secundary'
}

const Paragrapho = ({ children, colorType = 'principal' }: Props) => (
  <ParagraphoStyle colorType={colorType}>{children}</ParagraphoStyle>
)

export default Paragrapho
