import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-button')
export class MyButton extends LitElement {
  render() {
    return html`
      <button><slot></slot></button>
    `
  }

  static styles = css`
    button {
      appearance: none;
      background-color: #55c500;
      border: none;
      border-radius: 0.5rem;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.5rem 1rem;
      transition: background-color 50ms;
    }
    button:hover {
      background-color: #46a900;
    }
  `
}
