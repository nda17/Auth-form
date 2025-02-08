import styles from '@/components/screens/admin/users/(form)/fields/field-upload-file/FieldUploadFile.module.scss';
import { useUploadFile } from '@/components/screens/admin/users/(form)/fields/field-upload-file/useUploadFile';
import { IUploadField } from '@/components/screens/admin/users/(form)/fields/fields.interface';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

const FieldUploadFile: FC<IUploadField> = ({
	currentFile,
	placeholder,
	style,
	value,
	folder,
	id,
	isAdminEdit,
	onChange
}) => {
	const { uploadFile, isLoading } = useUploadFile(onChange, folder, id);

	return (
		<div className={styles.wrapper} style={style}>
			{isAdminEdit ? (
				<p className={clsx(styles['field-path'])}>
					{value ? value : currentFile}
				</p>
			) : null}
			<label className={clsx(styles['label-input'])}>
				<div className={clsx(styles['custom-input'])}>
					<span aria-label="Choose file button" className={styles.button}>
						Choose file
					</span>
				</div>
				<input
					type="file"
					onChange={uploadFile}
					className={clsx(styles['input-field'])}
				/>
				{
					<div className={clsx(styles['file-preview'])}>
						{isLoading ? (
							<div className="w-full h-full">
								<SkeletonLoader count={1} className="w-full h-full p-1" />
							</div>
						) : value ? (
							<Image
								src={value}
								alt={placeholder}
								priority
								fill
								unoptimized
							/>
						) : (
							<Image
								src={currentFile}
								alt={placeholder}
								priority
								fill
								unoptimized
							/>
						)}
					</div>
				}
			</label>
		</div>
	);
};

export default FieldUploadFile;
