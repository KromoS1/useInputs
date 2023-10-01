import { ChangeEvent, useState } from 'react'
import { CustomInput } from './input';

export const UnUsingHook = () => {

	const [firstName, setFirstName] = useState('')
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);

	const changeHandlerFirstName = (e: ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.currentTarget.value);
	}
	
	const changeHandlerName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value);
	};

	const changeHandlerAge = (e: ChangeEvent<HTMLInputElement>) => {
		setAge(+e.currentTarget.value);
	};

	return (
    <>
      <CustomInput
        value={firstName}
        onChange={changeHandlerFirstName}
        placeholder="Фамилия"
      />
      <CustomInput
        value={name}
        onChange={changeHandlerName}
        placeholder="Имя"
      />
      <CustomInput value={age} onChange={changeHandlerAge} placeholder='Возраст' type='number'/>
    </>
  );
}