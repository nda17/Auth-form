import { InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface IFieldProps {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps;

export interface IField extends TypeInputPropsField {}
