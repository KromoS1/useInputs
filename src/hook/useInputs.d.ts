export = UseInputs;
export as namespace UseInputs;

declare namespace UseInputs {

	type AttributeTypeValue = {
    'checkbox': boolean;
    'color': string;
    'date': Date;
    'email': string;
    'file': file;
    'number': number;
    'password': string;
    'tel': string;
    'text': string;
    'url': string;
  };

	type ValueType = boolean | string | number | Date | file;

  type StateType = {
    [name as string]: ValueType;
  };

	type OnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => void

  type ReturnHook<T> = [T, onChange: OnChangeCallback];

}
