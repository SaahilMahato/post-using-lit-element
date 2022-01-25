import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class AppComponent extends LitElement {
    
    static properties = {
    };

    static styles = css`
        
    `;

    constructor() {
        super();

        this.posts = [
            {
                status: "In progress",
                userName: "Mikolaj Gonzalez",
                postedTime: "November 9, 2020 at 6:35pm",
                numberOfAnswers: 8,
                profilePictureUrl: "./src/images/user_1.jpg",
            },
        ];
    }

    render() {
        return html`
            <div class="container">
                ${this.posts.map(post => html`
                    
                    <post-component
                        .status=${post.status}
                        .userName=${post.userName}
                        .postedTime=${post.postedTime}
                        .numberOfAnswers=${post.numberOfAnswers}
                        .profilePictureUrl=${post.profilePictureUrl}
                    >
                    </post-component>
                `)}
            </div>
        `;
    }
}

customElements.define("app-component", AppComponent);
