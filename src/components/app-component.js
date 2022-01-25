import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class AppComponent extends LitElement {
    
    static properties = {
    };

    static styles = css`
        .container {
            width: 50vw;
            margin: 0 auto;
        }
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

                title: "How do we add new containers to project?",
                content: "Lorem ipsum dolor sit amet, vel error alienum sententiae in, laudem insolens definitiones ad nec. Doctus malorum labores vel ne. Cu est euismod eruditi, altera aeterno consulatu quo no. Nulla facilisi maluisset mei at. Cu bonorum vivendum has, dico accusamus ut duo.",
                tags: ["ACS", "Assays"],
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
                        .title=${post.title}
                        .content=${post.content}
                        .tags=${post.tags}
                    >
                    </post-component>
                `)}
            </div>
        `;
    }
}

customElements.define("app-component", AppComponent);
