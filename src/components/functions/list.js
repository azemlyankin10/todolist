import { mount } from "redom"
import { createListElement } from "../listElement"
import { mainList } from "../mainList"
import { updateStat } from "../stats"

export const addNewTask = ({text, id}) => {
  updateStat()
  mount(mainList, createListElement({text, id}))
}