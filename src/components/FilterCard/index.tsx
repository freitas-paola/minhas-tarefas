import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const FilterCard = ({ label, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter: filterValue, tasks } = useSelector(
    (state: RootReducer) => state
  )

  const verifyActive = () => {
    const sameCriterio = filterValue.criterio === criterio
    const sameValor = filterValue.valor === valor

    return sameCriterio && sameValor
  }

  const countTasks = () => {
    if (criterio === 'todas') return tasks.items.length
    if (criterio === 'prioridade') {
      return tasks.items.filter((item) => item.priority === valor).length
    }
    if (criterio === 'status') {
      return tasks.items.filter((item) => item.status === valor).length
    }
  }

  const filter = () => {
    dispatch(
      changeFilter({
        criterio,
        valor
      })
    )
  }

  const active = verifyActive()
  const counter = countTasks()

  return (
    <S.Card active={active} onClick={filter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
