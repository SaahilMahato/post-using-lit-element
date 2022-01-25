import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class TagComponent extends LitElement {
    
    static properties = {
        text: { type: String },
    };

    static styles = css`
        .tag {
            background-color: lightgrey;
            border: solid 2px grey;
            border-radius: 20px;
            padding: 2%;
            min-width: 80px;
            margin-right: 20px;
        }

        .hashtag {
            color: blue;
        }
    `;

    constructor() {
        super();

        this.text = "";
    }

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
