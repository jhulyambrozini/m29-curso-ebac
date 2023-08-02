import { ParagraphoStyle } from './styles'

export type Props = {
  children: string
  colorType?: 'principal' | 'secundary'
  fontSize?: number
}

const Paragrapho = ({ children, colorType = 'principal', fontSize }: Props) => (
  <ParagraphoStyle colorType={colorType} fontSize={fontSize}>
    {children}
  </ParagraphoStyle>
)

export default Paragrapho
