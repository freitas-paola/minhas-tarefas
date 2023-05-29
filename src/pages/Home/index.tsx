import AddButton from '../../components/AddButton'
import Sidebar from '../../containers/Sidebar'
import TasksList from '../../containers/TasksList'

const Home = () => (
  <>
    <Sidebar showFilters />
    <TasksList />
    <AddButton />
  </>
)

export default Home
