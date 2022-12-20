import { html } from 'lit-html'
import './my-button'

export default {
  title: 'my-button',
}

export const Primary = () => html`<my-button>My button</my-button>`
export const Secondary = () => html`<my-button priority='secondary'>My button</my-button>`
