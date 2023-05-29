import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      description: 'Rever exercícios do módulo 7',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      title: 'Estudar JavaScript '
    },
    {
      id: 2,
      description: 'Fazer tarefa do módulo 30',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE,
      title: 'Estudar TypeScript'
    },
    {
      id: 3,
      description: 'Revisar conceitos',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      title: 'Estudar React'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((tarefa) => tarefa.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const repeatedTask = state.items.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (repeatedTask) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.items[state.items.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.items.push(newTask)
      }
    },
    alterStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.items[taskIndex].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, alterStatus } = tasksSlice.actions
export default tasksSlice.reducer
