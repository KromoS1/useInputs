# Custom hook for using multiple inputs

## Before to use it, you need create initialize object for your inputs

>`const myInputs = {
  firstName: '',
  name: '',
  lastName: '',
  age: 0,
  isMarried: false,
  date: '',
  file: ''
};`

## After it is necessary to dynamically get the type of the object

>`type MyInputsType = typeof myInputs`

## Now you can use this hook

>`const [inputs, onChange] = useInputs<MyInputsType>(myInputs);`

Hook returns an array of two values. The first value is the object with your data. You must assign the value of the desired field. You must assign the value of the desired field.

The second value is the function that handles your input, depending on your field.

### Important, for the input you need to add a 'name' attribute and this attribute must match the key, in your value object.

>`<input name='firstName' value={inputs.firstName}` onChange={onChange} />

