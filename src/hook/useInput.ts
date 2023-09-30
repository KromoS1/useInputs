import { ChangeEvent, useState } from 'react';
import { ReturnHook, StateType } from './useInputs';

export const useInputs = <T extends StateType>(inputs: T) => {

  const [value, setValue] = useState<T>(inputs);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = e.currentTarget;

    const currentValue = checked ? checked : value;

    setValue(prev => ({ ...prev, [name]:  currentValue}));
  };

  return [value, onChange] as ReturnHook<T>;
};
