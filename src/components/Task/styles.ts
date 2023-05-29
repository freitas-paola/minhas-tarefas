import styled from 'styled-components'
import { Button } from '../../styles'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/Task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameters: 'status' | 'priority'
}

function returnBackgroundColor(props: TagProps): string {
  if (props.parameters === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.vermelho
    if (props.priority === enums.Priority.IMPORTANTE) return variables.laranja
  } else {
    if (props.status === enums.Status.PENDENTE) return variables.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variables.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  display: inline-block;
  margin-right: 16px;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const ButtonCancelAndRemove = styled(Button)`
  background-color: ${variables.vermelho};
`
