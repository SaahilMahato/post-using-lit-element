import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class ContentComponent extends LitElement {
    
    static properties = {
        title: { type: String },
        content: { type: String },
        tags: { type: Array },
    };

    static styles = css`
        .main {
            display: flex;
            justify-content: space-between;
        }

        .img-container {
            width: 20%;
            display: flex;
            justify-content: center;
        }

        .flag {
            width: 32px;
            height: 32px;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: solid 1px grey;
            margin: 0 1.5%;
        }

        .title {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }

        .content {
            color: grey;
        }

        .tags {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-left: 11.5%;
            margin-top: 2%;
        }
    `;

    constructor() {
        super();

        this.title = "";
        this.content = "";
        this.tags = [];
    }

    render() {
        return html`
            <div class="content-wrapper">
                <div class="main">
                    <div class="img-container">
                        <img class="flag" src="./src/images/flag.png">
                    </div>
                    <div class="text">
                        <p class="title">${this.title}</p>
                        <p class="content">${this.content}</p>
                    </div>
                </div>
                <div class="tags">
                    ${this.tags.map(text => html`
                        <tag-component
                            .text=${text}
                        >
                        </tag-component>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define("content-component", ContentComponent);
