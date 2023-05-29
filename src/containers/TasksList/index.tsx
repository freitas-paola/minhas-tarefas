import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = items

    if (termo !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.priority === valor)
      } else if (criterio === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === valor)
      }
      return filteredTasks
    } else {
      return items
    }
  }

  const showFilterResults = (quantidade: number) => {
    let message = ''
    const complement =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      message = `${quantidade} tarefa(s) encontrada(s) como: todas ${complement}`
    } else {
      message = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio} = ${valor}`}" ${complement}`
    }

    return message
  }
  const tasks = filterTasks()
  const message = showFilterResults(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            {' '}
            <Task
              id={t.id}
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TasksList
