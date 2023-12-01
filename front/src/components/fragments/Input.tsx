import { FieldError } from 'react-hook-form';
import { HTMLAttributes, forwardRef, ForwardedRef, ChangeEvent } from "react";
import { StyleError } from './StyleFragments';
import { on } from 'events';

interface IPropsInput extends HTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  error?: { message: string } | FieldError  | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { error, type, label, value, onChange, ...rest }: IPropsInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        {label ? <label> {label} </label> : null}
        <input type={type} value={value} ref={ref} onChange={onChange} {...rest} />
        {error ? <StyleError>{error.message}</StyleError> : null}
      </>
    );
  }
);
