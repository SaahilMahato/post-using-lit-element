import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class PostComponent extends LitElement {
    
    static properties = {
        status: { type: String },
        userName: { type: String },
        postedTime: { type: String },
        numberOfAnswers: { type: Number },
        profilePictureUrl: { type: String },

        title: { type: String },
        content: { type: String },
        tags: { type: Array },
    };

    static styles = css`
        
    `;

    constructor() {
        super();

        this.status = "";
        this.userName = "";
        this.postedTime = "";
        this.profilePictureUrl = "";

        this.numberOfAnswers = 0;

        this.title = "";
        this.content = "";
        this.tags = [];
    }

    render() {
        return html`
            <header-component
                .status=${this.status}
                .userName=${this.userName}
                .postedTime=${this.postedTime}
                .numberOfAnswers=${this.numberOfAnswers}
                .profilePictureUrl=${this.profilePictureUrl}
            ></header-component>
            
            <content-component
                .title=${this.title}
                .content=${this.content}
                .tags=${this.tags}
            ></content-component>
        `;
    }
}

customElements.define("post-component", PostComponent);
