import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class TagComponent extends LitElement {
    
    static properties = {
        text: { type: String },
    };

    static styles = css`
        .tag {
            display: inline-block;
            background-color: lightgrey;
            border: solid 2px grey;
            border-radius: 20px;
            padding: 0.5%;
            min-width: 50px;
            margin-right: 20px;
        }

        .hashtag {
            color: blue;
        }
    `;

    /**
     * Contructor of the class.
     */
    constructor() {
        super();

        this.text = "";
    }

    /**
     * Renders the component.
     * 
     * @returns {HTMLElement} - The HTML of the component to be rendered. 
     */
    render() {
        return html`
            <div class="tag">
                <span class="hashtag">#</span>
                <span class="text">${this.text}</span>
            </div>
        `;
    }
}

customElements.define("tag-component", TagComponent);
