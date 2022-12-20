import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type Priority = 'primary' | 'secondary'
@customElement('my-button')
export class MyButton extends LitElement {

  @property()
  priority: Priority = 'primary'

  render() {
    return html`
      <button class=${this.priority}><slot></slot></button>
    `
  }

  static styles = css`
    button {
      appearance: none;
      border: none;
      border-radius: 0.5rem;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.5rem 1rem;
      transition: background-color 50ms;
    }
    .primary {
      background-color: #55c500;
    }
    .primary:hover {
      background-color: #46a900;
    }
    .secondary {
      background-color: #4790db;
    }
    .secondary:hover {
      background-color: #3683bf;
    }
  `
}
