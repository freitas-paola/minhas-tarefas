import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { remove, edit, alterStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, ButtonSave } from '../../styles'

type Props = TaskClass

const Task = ({
  description: descriptionOG,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOG.length > 0) {
      setDescription(descriptionOG)
    }
  }, [descriptionOG])

  function CancelEditing() {
    setIsEditing(false)
    setDescription(descriptionOG)
  }

  function changeStatus(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatus}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameters="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameters="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    id,
                    priority,
                    status,
                    title
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelAndRemove
              onClick={() => {
                CancelEditing()
              }}
            >
              Cancelar
            </S.ButtonCancelAndRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.ButtonCancelAndRemove onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelAndRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
