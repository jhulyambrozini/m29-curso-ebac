import Avatar from '../../components/Avatar/Avatar'
import Paragrapho from '../../components/Paragrapho/Paragrapho'
import Title from '../../components/Title/Title'
import { ButtonTheme, Description, SidebarContainer } from './styles'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Jhuly Ambrozini</Title>
        <Paragrapho fontSize={16} colorType="secundary">
          jhulyambrozini
        </Paragrapho>
        <Description colorType="principal" fontSize={12}>
          Engenheira Front-End
        </Description>
        <ButtonTheme>Trocar tema</ButtonTheme>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
