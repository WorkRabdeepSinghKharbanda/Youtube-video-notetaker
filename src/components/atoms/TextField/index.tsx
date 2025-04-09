/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";

interface TEXTFIELD_TYPE {
  label: string;
  type: string;
  placeholder?: string;
  value: any;
  onTextFieldChange: any;
  min?: number;
  max?: number;
  className?: string;
  outerClassName?: string;
  isValid?: boolean;
  errorText?: string;
  disabled?: boolean;
  labelClassName?: string;
}
const TextField = ({
  label = "",
  placeholder = "",
  type = "text",
  min,
  max,
  value,
  onTextFieldChange,
  className='',
  outerClassName = '',
  labelClassName = '',
  isValid,
  errorText = 'Enter Valid Text',
  disabled = false,
}: TEXTFIELD_TYPE) => {
  const textFieldId = useId();
  return (
    <div className={outerClassName}>
      <label className={labelClassName} htmlFor={textFieldId}>{label}</label>
      <input disabled={disabled} type={type} min={min} max={max} placeholder={placeholder} onChange={(e) => onTextFieldChange(e)} className={className} value={value}/>
      {isValid && (
        <span className="text-danger"> {errorText} </span>
      )}
    </div>
  );
};
export default TextField;
