# use-controlled-input

use-controlled-input is a React hook that simplifies the process of handling controlled inputs.

## Installation

```sh
npm install use-controlled-input
```

or

```sh
yarn add use-controlled-input
```

## Usage

First, import `useControlledInput`:

```js
import { useControlledInput } from 'use-controlled-input';
```

Then initialize it with a value of your choice:

```js
const TextInput = () => {
  const { value, onChange } = useControlledInput('');
  
  return (
    <input type="text" value={value} onChange={onChange} />
  );
};
```

For select element:

```js
const SelectInput = () => {
  const { value, onChange } = useControlledInput<HTMLSelectElement>([]);
  
  return (
    <select multiple value={value} onChange={onChange}>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </select>
  );
};
```

Pass an initial value to `useControlledInput` and destructure its return values, `value` and `onChange`. You can then use these variables as props for your input components.

## API

### `useControlledInput(initialValue: string | number | string[]| number[])`

`initialValue` - Value to initialize the input.

Returns an object with the following properties:

- `value`: The current value of the input.
- `onChange`: The event handler function to update the input's value.

## Notes

- If you pass `string[]` as `initialValue`, use it for `mutiple` select element.
- you can use any other input types which are not a text or select element such as checkbox, radio button, etc.

```js
const CheckboxInput = () => {
  const { value, onChange } = useControlledInput<HTMLInputElement>(false);
  
  return (
    <input type="checkbox" checked={value} onChange={onChange} />
  );
};
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/akhiakl/use-controlled-input/blob/main/LICENSE.md) file for details.