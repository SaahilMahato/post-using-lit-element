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

    /** 
     * Constructor of the Class.
     */
    constructor() {
        super();

        this.posts = [
            {
                status: "In progress",
                userName: "Mikolaj Gonzalez",
                postedTime: "November 9, 2020 at 6:35pm",
                numberOfAnswers: 8,
                profilePictureUrl: "./src/images/user_1.jpg",
                viewerProfilePicUrls: [
                    "./src/images/user_2.jpg",
                    "./src/images/user_3.jpg",
                    "./src/images/user_4.jpg",
                    "./src/images/user_5.jpg",
                ],

                title: "How do we add new containers to project?",
                content: `Lorem ipsum dolor sit amet, vel error alienum sententiae in, laudem insolens definitiones ad nec. 
                        Doctus malorum labores vel ne. Cu est euismod eruditi, altera aeterno consulatu quo no. Nulla facilisi maluisset mei at. 
                        Cu bonorum vivendum has, dico accusamus ut duo.`,
                tags: ["ACS", "Assays"],
            },
            {
                status: "Completed",
                userName: "Anakin Skywalker",
                postedTime: "November 10, 2021 at 6:35pm",
                numberOfAnswers: 20,
                profilePictureUrl: "./src/images/user_2.jpg",
                viewerProfilePicUrls: [
                    "./src/images/user_1.jpg",
                    "./src/images/user_3.jpg",
                    "./src/images/user_4.jpg",
                    "./src/images/user_5.jpg",
                ],

                title: "What was before the big bang?",
                content: `But before we get to that, let's take a look at how 'material' - physical matter - first came about. 
                        If we are aiming to explain the origins of stable matter made of atoms or molecules, there was certainly none of 
                        that around at the Big Bang, nor for hundreds of thousands of years afterwards.`,
                tags: ["Big bang", "Universe", "Creation", "Nobody knows"],
            },
            {
                status: "Pending",
                userName: "Kassandra",
                postedTime: "January 9, 2022 at 6:35pm",
                numberOfAnswers: 2,
                profilePictureUrl: "./src/images/user_3.jpg",
                viewerProfilePicUrls: [
                    "./src/images/user_2.jpg",
                    "./src/images/user_1.jpg",
                    "./src/images/user_4.jpg",
                    "./src/images/user_5.jpg",
                ],

                title: "How do I defeat the Cult of Kosmos?",
                content: `Every cultist leader is hiding somewhere in the world, and can be uncovered via various clues or 
                        by killing cultists in the same group. Each cultists also carries a piece of Legendary Armor, and defeating the entire group - 
                        including the Cultist Sage that leads them - will unlock the Legendary Set Bonus Engraving.Cultists has a minimum level, 
                        but like most enemies in the game, they will auto-level alongside you if you do not kill them at their base level, and their 
                        legendary armor will also adjust in level too.`,
                tags: ["No cult", "Odyssey", "Glory of Leonidas", "Save Deimos", "Peaful Greece"],
            },
        ];
    }

    /**
     * Renders the component.
     * 
     * @returns {HTMLElement} - The HTML of the component to be rendered. 
     */
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
                        .viewerProfilePicUrls=${post.viewerProfilePicUrls}
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
