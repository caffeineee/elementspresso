import { LitElement, html, css, nothing } from "https://cdn.jsdelivr.net/gh/lit/dist@2.6.1/core/lit-core.min.js";
import { socialIcons } from 'https://caffeineee.github.io/elementspresso/elements/assets/social-icons.js'
export class rowMenu extends LitElement {
    static properties = {
        links: { type: Array, attribute: "links" }
    };
    static styles = css`
        :host {
            font: inherit;
        }
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            padding: 0;
            margin: 0;
        }
        li {
            display: flex;
        }
        a {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            color: inherit;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-alt);
            cursor: pointer;
        }
        ul > *::after {
            content: "·";
            padding-inline: 0.5rem;
            cursor: text;
        }
        ul > *:last-child:after {
            content: "";
        }
        ul img {
            height: 1.2rem;
        }
        @media only screen and (max-width: 600px) {
            ul {
                flex-direction: column;
                gap: 0.25rem;
            }
            ul > *::after {
                content: "";
            }
        }
    `;
    constructor() {
        super();
        this.links = [];
    }
    render() {

        return html`
            <ul>
                ${this.links.map((link) => {
                    if(link.icon) {
                        var glyph = document.createElement('img')
                        glyph.src = socialIcons.find(({title})=>title.includes(link.icon)).url
                    }
                    return html`
                        <li>
                            <a href=${link.link}>
                            ${glyph ? glyph : nothing}
                            ${link.content}
                            </a>
                        </li>
                    `;
                })}
            </ul>
        `;
    }
}
customElements.define("row-menu", rowMenu);
