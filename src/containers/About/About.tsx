import Title from '../../components/Title/Title'
import Paragrapho from '../../components/Paragrapho/Paragrapho'
import { GitHubSection } from './styles'

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragrapho colorType="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae
        sit aperiam suscipit! Alias, laboriosam expedita maxime dignissimos
        praesentium nostrum, delectus minima qui ullam error perferendis
        incidunt aliquid unde similique!
      </Paragrapho>
      <GitHubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=jhulyambrozini&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jhulyambrozini&layout=compact&langs_count=7&theme=tokyonight" />
      </GitHubSection>
    </section>
  )
}

export default About
