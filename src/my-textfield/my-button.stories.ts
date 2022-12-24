import { html } from 'lit-html'
import './my-textfield'

export default {
  title: 'my-textfield',
}

export const Default = () => html`<my-textfield placeholder="Enter your name"></my-textfield>`

export const Error = () => html`<my-textfield placeholder="Enter your name" errorMessage="Incorrect text!"></my-textfield>`
