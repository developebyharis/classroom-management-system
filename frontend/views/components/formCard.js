import input from "./input.js";

export default function formCard() {
  return `
    <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">User Form</h2>
      <form>
        ${input({
          tagName: "email",
          name: "Email",
          type: "email",
          style: "border-2 border-zinc-600 rounded-lg",
          value: ""
        })} <br><br>
        ${input({
          tagName: "password",
          name: "Password",
          type: "password",
          style: "border-2 border-zinc-600 rounded-lg",
          value: ""
        })} <br><br>
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  `;
}
