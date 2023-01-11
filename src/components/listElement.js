import { el } from "redom";
import { changeElementInStorage, deleteElementInStorage } from "./functions/api";
import { createImportantList } from "./importantList";
import { createList } from "./mainList";
import { updateStat } from "./stats";


export function createListElement({text, id, completed, importanted}, btn = true) {
  let statusClass = ''
  if (importanted && completed) {
    statusClass = 'list-group-item-success'
  } else if (completed) {
    statusClass = 'list-group-item-success'
  } else if (importanted) {
    statusClass = 'list-group-item-warning'
  }

  const className = `${statusClass} list-group-item list-group-item-action d-flex justify-content-between align-items-center`

  if(!btn) {
    return el('li', { className }, text)
  }
  return el('li', { className }, [ text, btnGroup(id) ])
}

function btnGroup(id) {
  const btnSuccess = el('button.btn.btn-success', 
    el('i.fa-sharp.fa-solid.fa-check', {style: {pointerEvents: 'none'}})
  )
  btnSuccess.addEventListener('click', () => {
    changeElementInStorage(id, 'completed')
    createList()
    createImportantList()
    updateStat()
  })

  const btnImportant = el('button.btn.btn-warning', 
    el('i.fa-regular.fa-star', {style: {pointerEvents: 'none'}})
  )
  btnImportant.addEventListener('click', () => {
    changeElementInStorage(id, 'importanted')
    createList()
    createImportantList()
    updateStat()
  })

  const btnDelete = el('button.btn.btn-danger',
    el('i.fa-solid.fa-trash', {style: {pointerEvents: 'none'}})
  )
  btnDelete.addEventListener('click', () => {
    const deleted = deleteElementInStorage(id)
    if(deleted) {
      createList()
      createImportantList()
      updateStat()
    }
  })
  return el('.btn-group', 
    [
      btnSuccess,
      btnImportant,
      btnDelete
    ]
  )
}