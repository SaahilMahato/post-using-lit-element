import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class PostComponent extends LitElement {
    
    static properties = {
        status: { type: String },
        userName: { type: String },
        postedTime: { type: String },
        numberOfAnswers: { type: Number },
        profilePictureUrl: { type: String },
    };

    static styles = css`
        
    `;

    constructor() {
        super();

        this.status = "";
        this.userName = "";
        this.postedTime = "";
        this.numberOfAnswers = 0;
        this.profilePictureUrl = "";

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
        `;
    }
}

customElements.define("post-component", PostComponent);
