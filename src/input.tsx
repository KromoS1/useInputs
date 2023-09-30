import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultInputPropsType & {
  label?: string;
};

const BoxInput = styled.div`
  margin: 10px;
`;

const Label = styled.span`
	margin-left: 10px;
`

const Value = styled.span`
	margin-left: 20px;
`

export const CustomInput: React.FC<PropsType> = props => {
  return (
    <BoxInput>
      <input style={{ padding: "5px" }} value={props.value} {...props} />
      {props.label && <Label>{props.label}</Label>}
			<Value>{props.value}</Value>
    </BoxInput>
  );
};