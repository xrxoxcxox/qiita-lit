import { html } from 'lit-html'
import './my-button'

export default {
  title: 'my-button',
}

export const PrimaryL = () => html`<my-button size='l'>My button</my-button>`

export const PrimaryM = () => html`<my-button>My button</my-button>`

export const PrimaryS = () => html`<my-button size='s'>My button</my-button>`

export const SecondaryL = () => html`<my-button priority='secondary' size='l'>My button</my-button>`

export const SecondaryM = () => html`<my-button priority='secondary'>My button</my-button>`

export const SecondaryS = () => html`<my-button priority='secondary' size='s'>My button</my-button>`
