import {useState} from 'react';

const nonEmpty = (value: string) => !!value;

export default (
    initialValue = '', 
    validate = nonEmpty
): [string, (
    evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void, any, () => void] => {
  const [state, setState] = useState(initialValue);

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => setState(evt.target.value);

  return [state, handleChange, validate(state), () => setState('')]
}