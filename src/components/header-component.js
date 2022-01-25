import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class HeaderComponent extends LitElement {
    
    static properties = {
        status: { type: String },
        userName: { type: String },
        postedTime: { type: String },
        numberOfAnswers: { type: Number },
        profilePictureUrl: { type: String },
    }

    static styles = css`
        .header {
            display: flex;
            justify-content: space-between;
        }

        .left-side {
            width: 60%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .answers {
            background-color: green;
            border-radius: 10px;
            color: white;
            width: 15%;
            height: 80%;
        }

        .number {
            font-size: 24px;
        }

        .number, .answers-text {
            text-align: center;
            margin: 0;
        }

        .profile-pic {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }

        .user-info {
            width: 70%;
        }

        .user-name {
            font-weight: bold;
            margin: 0;
        }

        .time-content {
            display: flex;
            justify-content: space-between;
        }

        .posted-time {
            color: grey;
            border-right: solid 2px grey;
            padding-right: 8%;
        }

        .acs {
            color: red;
        }

        .status {
            background-color: orange;
            padding: 0 2%;
            border-radius: 10px;
        }
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
            <div class="header">

                <div class="left-side">

                    <div class="answers">
                        <p class="number">${this.numberOfAnswers}</p>
                        <p class="answers-text">answers</p>
                    </div>

                    <img class="profile-pic" src="${this.profilePictureUrl}">

                    <div class="user-info">
                        <p class="user-name">${this.userName}</p>
                        <div class="time-content">
                            <p class="posted-time">${this.postedTime}</p>
                            <p class="acs">ACS-1</p>
                            <p class="status">${this.status}</p>
                        </div>
                    </div>
                </div>

                <div class="right-side">
                </div>

            </div>
        `;
    }
}

customElements.define("header-component", HeaderComponent);
