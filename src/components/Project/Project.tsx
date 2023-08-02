import Title from '../Title/Title'
import Paragrapho from '../Paragrapho/Paragrapho'
import { ButtonLink, Card } from './styles'

const Project = () => (
  <Card>
    <Title fontSize={16}>Projeto da lista de tarefas</Title>
    <Paragrapho colorType="secundary">
      Listas de tarefas feitas com vue.js
    </Paragrapho>
    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)

export default Project
