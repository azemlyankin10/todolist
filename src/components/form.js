import { el } from "redom"
import { addToStorage } from "./functions/api"
import { addNewTask } from "./functions/list"

export const Form = el('form', { style: { maxWidth: '600px' } },
  el('.input-group.mb-3', 
    [
      el('input.form-control', {type: 'text', placeholder: 'input your task'}),
      el('button.input-group-text.btn-light', el('i.fa-solid.fa-plus'))
    ]  
  )
)

Form.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target[0]
  const text = input.value
  if(!text) return
  const task = addToStorage(text)
  addNewTask(task)
  input.value = ''
})