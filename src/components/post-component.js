import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class PostComponent extends LitElement {
    
    static properties = {
        status: { type: String },
        userName: { type: String },
        postedTime: { type: String },
        numberOfAnswers: { type: Number },
        profilePictureUrl: { type: String },
        viewerProfilePicUrls: { type: Array },

        title: { type: String },
        content: { type: String },
        tags: { type: Array },
    };

    static styles = css`
        .post-wrapper {
            background-color: white;
            margin: 10px 0;
            padding: 2%;
            border-radius: 5px;
        }
    `;

    /**
     * Contructor of the class.
     */
    constructor() {
        super();

        // properties for header
        this.status = "";
        this.userName = "";
        this.postedTime = "";
        this.profilePictureUrl = "";

        this.viewerProfilePicUrls = [];

        // properties for content
        this.tags = [];

        this.title = "";
        this.content = "";

        this.numberOfAnswers = 0;        
    }

    /**
     * Renders the component.
     * 
     * @returns {HTMLElement} - The HTML of the component to be rendered. 
     */
    render() {
        return html`
            <div class="post-wrapper">
                <header-component
                    .status=${this.status}
                    .userName=${this.userName}
                    .postedTime=${this.postedTime}
                    .numberOfAnswers=${this.numberOfAnswers}
                    .profilePictureUrl=${this.profilePictureUrl}
                    .viewerProfilePicUrls=${this.viewerProfilePicUrls}
                ></header-component>
                
                <content-component
                    .title=${this.title}
                    .content=${this.content}
                    .tags=${this.tags}
                ></content-component>
            </div>
        `;
    }
}

customElements.define("post-component", PostComponent);
