import {type ChangeEvent, useState} from 'react';

function isSelectElement(element: HTMLInputElement | HTMLSelectElement): element is HTMLSelectElement {
	return (element as HTMLSelectElement).selectedOptions !== undefined;
}

export const useControlledInput = <T = HTMLInputElement>(initialValue: string | number | string[]| number[]) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (event: ChangeEvent<T>) => {
		const target = event.target as unknown as HTMLInputElement | HTMLSelectElement;

		setValue(target['value']);
		if(isSelectElement(target) && target['multiple']) {
			const options = [...target['selectedOptions']];
			const values = options.map(option => option.value);
			setValue(values);
		}
	};

	return {
		value,
		onChange,
	};
};
