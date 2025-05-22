import classrooms, { initClassrooms } from "../components/classrooms.js"

export default function home() {
  setTimeout(() => {
    initClassrooms();
  }, 0);

  return `
    <div>${classrooms()}</div>
  `;
}