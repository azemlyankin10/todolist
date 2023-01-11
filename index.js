import { setChildren, el } from 'redom'
import './index.scss'
import { Form } from './src/components/form'
import { importantList } from './src/components/importantList'
import { mainList } from './src/components/mainList'
import { NavBar } from './src/components/nav'

const app = document.querySelector('.app')

setChildren(app, [
  NavBar,
  el('.container', [
    Form,
    el('.row', [
      mainList,
      el('.col-md-5', [
        el('h2', 'Important tasks'),
        importantList
      ])
    ])
  ])
])