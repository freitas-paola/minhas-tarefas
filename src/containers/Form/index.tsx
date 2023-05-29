import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, MainContainer, Title } from '../../styles'
import { Input } from '../../styles'
import { NewForm, Options, Option } from './styles'
import * as enums from '../../utils/enums/Task'
import { register } from '../../store/reducers/tasks'

export const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerTask = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <NewForm onSubmit={registerTask}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((p) => (
            <Option key={p}>
              <input
                value={p}
                name="prioridade"
                type="radio"
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                id={p}
                defaultChecked={p === enums.Priority.NORMAL}
              />{' '}
              <label htmlFor={p}>{p}</label>
            </Option>
          ))}
        </Options>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </NewForm>
    </MainContainer>
  )
}
