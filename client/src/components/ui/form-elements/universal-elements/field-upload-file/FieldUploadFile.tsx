import { IUploadField } from '@/components/ui/form-elements/form.interface'
import styles from '@/components/ui/form-elements/universal-elements/field-upload-file/FieldUploadFile.module.scss'
import { useUploadFile } from '@/components/ui/form-elements/universal-elements/field-upload-file/useUploadFile'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'

const FieldUploadFile: NextPage<IUploadField> = ({
	currentFile,
	placeholder,
	style,
	value,
	folder,
	onChange
}) => {
	const { uploadFile, isLoading } = useUploadFile(onChange, folder)

	return (
		<div className={styles.wrapper} style={style}>
			<p className={clsx(styles['field-path'])}>
				{value ? value : currentFile}
			</p>
			<label className={clsx(styles['label-input'])}>
				<div className={clsx(styles['custom-input'])}>
					<span className={styles.button}>Choose file</span>
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
	)
}

export default FieldUploadFile
