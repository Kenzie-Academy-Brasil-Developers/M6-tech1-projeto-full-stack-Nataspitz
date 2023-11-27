import { FieldError } from 'react-hook-form';
import { HTMLAttributes, forwardRef, ForwardedRef } from "react";
import { StyleError } from './StyleFragments';

interface IPropsInput extends HTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  error?: { message: string } | FieldError  | undefined;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { error, type, label, ...rest }: IPropsInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        {label ? <label> {label} </label> : null}
        <input type={type} ref={ref} {...rest} />
        {error ? <StyleError>{error.message}</StyleError> : null}
      </>
    );
  }
);
