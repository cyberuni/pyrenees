import { cva } from 'class-variance-authority'
import { motion } from 'motion/react'
import type { PropsWithChildren } from 'react'

export interface SheetProps extends PropsWithChildren {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
	align?: 'right' | undefined
	isOpen?: boolean | undefined
	onClose?: (() => void) | undefined
}

const variants = cva(
	[
		'pds:box-border pds:font-lato',
		'pds:bg-steel-gray-50/92 pds:dark:bg-steel-gray-1100/92',
		'pds:backdrop-blur  pds:shadow-sheet pds:dark:shadow-dark-sheet',
		'pds:z-10 pds:dark:bg-steel-gray-1100/92',
		'pds:flex pds:flex-col pds:overflow-hidden',
		'pds:fixed pds:top-0 pds:bottom-0 pds:right-0',
		'pds:h-full',
	],
	{
		variants: {
			size: {
				xs: 'pds:w-1/4',
				sm: 'pds:w-1/3',
				md: 'pds:w-1/2',
				lg: 'pds:w-2/3',
				xl: 'pds:w-3/4',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

export function Sheet({ size, isOpen, onClose, children }: SheetProps) {
	return (
		<>
			{isOpen && (
				<div
					className="pds:fixed pds:inset-0 pds:bg-black/50"
					onClick={onClose}
					onKeyDown={(e) => {
						if (e.key === 'Escape') {
							onClose?.()
						}
					}}
					tabIndex={0}
					role="button"
					aria-label="Close sheet"
				/>
			)}
			<motion.div
				className={variants({ size })}
				initial={{ x: '100%' }}
				animate={{
					x: isOpen ? 0 : '100%',
					opacity: isOpen ? 1 : 0,
				}}
				transition={{
					type: 'spring',
					damping: 25,
					stiffness: 200,
				}}
			>
				{children}
			</motion.div>
		</>
	)
}
