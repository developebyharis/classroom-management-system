export default function input(labelName, inputName, inputType) {
  return `<label for='${labelName}'>${labelName}</label>
    <input type='${inputType}' name='${inputName}'>`;
}
