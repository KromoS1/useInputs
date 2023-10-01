import { useInputs } from './hook/useInput';
import { CustomInput } from './input';

const myInputs = {
  firstName: "",
  name: "",
  lastName: "",
  age: 0,
  isMarried: false,
  date: "",
  file: "",
};

type MyInputsType = typeof myInputs;

export const UsingHook = () => {
	const [inputs, onChange] = useInputs<MyInputsType>(myInputs);

  return (
    <>
      <CustomInput
        name="firstName"
        value={inputs.firstName}
        onChange={onChange}
        placeholder="Фамилия"
      />
      <CustomInput
        name="name"
        value={inputs.name}
        onChange={onChange}
        placeholder="Имя"
      />
      <CustomInput
        name="lastName"
        value={inputs.lastName}
        onChange={onChange}
        placeholder="Отчество"
      />
      <CustomInput
        type="number"
        name="age"
        value={inputs.age}
        onChange={onChange}
        placeholder="Возраст"
      />
      <CustomInput
        type="checkbox"
        name="isMarried"
        checked={inputs.isMarried}
        label="Married"
        onChange={onChange}
      />
      <CustomInput
        type="date"
        name="date"
        value={inputs.date}
        onChange={onChange}
      />
      <CustomInput
        type="file"
        name="file"
        value={inputs.file}
        onChange={onChange}
      />
    </>
  );
}