import { IField } from '@/components/screens/admin/users/(form)/fields/fields.interface';
import { forwardRef } from 'react';

const CheckboxRights = forwardRef<HTMLInputElement, IField>(
	({ defaultChecked, type = 'checkbox', ...rest }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				{...rest}
				defaultChecked={defaultChecked}
			/>
		);
	}
);

export default CheckboxRights;
