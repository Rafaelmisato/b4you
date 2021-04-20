import { Container } from './styles'

interface Props {
  user: string
  team: { name: string; img: string }[]
}

const Team: React.FC<Props> = ({ user, team }) => {
  const totalTeamMenbers = team.length - 6

  return (
    <Container>
      <div className="team-wraper">
        <div className="user">
          <img src={user} alt="Imagem usuário" />
        </div>
        <div className="team">
          {team[0] && <img src={team[0].img} alt={team[0].name} />}
          {team[1] && <img src={team[1].img} alt={team[1].name} />}
          {team[2] && <img src={team[2].img} alt={team[2].name} />}
          {team[3] && <img src={team[3].img} alt={team[3].name} />}
          {team[4] && <img src={team[4].img} alt={team[4].name} />}
          {team[5] && <img src={team[5].img} alt={team[5].name} />}
          {team[6] && <div className="menbers"> + {totalTeamMenbers}</div>}
        </div>
      </div>
      <div className="names">
        {team[0] && `${team[0].name}, `}
        {team[1] && `${team[1].name}, `}
        {team[2] && `${team[2].name}`}
        {team[3] && '...'}
      </div>
    </Container>
  )
}

export default Team
