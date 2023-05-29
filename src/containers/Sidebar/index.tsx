import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/FilterCard'
import { RootReducer } from '../../store'
import { changeTermo } from '../../store/reducers/filter'
import * as S from './styles'
import { Button, Input } from '../../styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(changeTermo(e.target.value))}
            />
            <S.Filters>
              <FilterCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                label="pendentes"
              />
              <FilterCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                label="concluídas"
              />
              <FilterCard
                valor={enums.Priority.URGENTE}
                criterio="prioridade"
                label="urgentes"
              />
              <FilterCard
                valor={enums.Priority.IMPORTANTE}
                criterio="prioridade"
                label="importantes"
              />
              <FilterCard
                valor={enums.Priority.NORMAL}
                criterio="prioridade"
                label="normal"
              />
              <FilterCard criterio="todas" label="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
