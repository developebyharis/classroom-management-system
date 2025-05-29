export default function input({tagName,name,type, style, value}) {
    return ` <label for="${tagName}" >${name}</label>
  <input type="${type}" id="${tagName}" name="${tagName}" class="${style}">`
}