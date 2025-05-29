export function tagFilter({ style, tagName, options }) {
  return `
    <label class="flex flex-col items-start cursor-pointer">
      <span class="mb-1">${tagName}</span>
      <select class="${style}" id="${tagName}">
        <option value="All">All</option>
        ${options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
      </select>
    </label>
  `;
}


export function searchFilter(value) {
  return `<input type="search" value="${value}" />`;
}
