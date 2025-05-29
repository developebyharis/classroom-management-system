import authForm from "../components/authForm.js";

export default function auth() {
    return `
    <div>
    <h1>Auth page</h1>
    ${authForm()}</div>`
}