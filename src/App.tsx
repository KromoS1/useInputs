import './App.css'
import {styled} from 'styled-components'
import { CustomInput } from './input'
import { useInputs } from './hook/useInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 500px;
  width: 600px;
`;

const myInputs = {
  firstName: '',
  name: '',
  lastName: '',
  age: 0,
  isMarried: false,
  date: '',
  file: ''
};

type MyInputsType = typeof myInputs

function App() {

  const [inputs, onChange] = useInputs<MyInputsType>(myInputs);

  return (
    <Container>
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
    </Container>
  );
}



export default App
