import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam, SpecCell, SpecCodeCell, SpecRow, SpecTable, StorySwatch } from '../../../storybook/index.js'
import { ClockIcon } from '../../icons/clock-icon.js'
import { FileAltIcon } from '../../icons/file-alt-icon.js'
import { MenuIcon } from '../../icons/menu-icon.js'
import { Button, IconSurface } from '../../index.js'

const meta: Meta = {
	title: 'components/buttons/Button/size',
	component: Button,
	parameters: defineLayoutParam('centered'),
	argTypes: {
		className: { control: { type: 'text' } },
		children: { control: { type: 'text' } },
		icon: { control: false },
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Sizes: Story = {
	render(args) {
		return (
			<SpecTable>
				<SpecRow>
					<SpecCell>Small</SpecCell>
					<SpecCell>
						<div className="pds:flex pds:gap-1">
							<Button {...args} size="sm">
								Label
							</Button>
							<Button {...args} size="sm">
								<IconSurface size="sm">
									<MenuIcon size="xs" />
								</IconSurface>
								Label
							</Button>
							<Button {...args} size="sm">
								<IconSurface size="sm">
									<FileAltIcon size="xs" />
								</IconSurface>
								<IconSurface size="sm">
									<MenuIcon size="xs" />
								</IconSurface>
								Label
								<IconSurface size="sm">
									<ClockIcon size="xs" />
								</IconSurface>
							</Button>
						</div>
					</SpecCell>
					<SpecCodeCell>
						<div>text-xs</div>
						<div>h-6</div>
						<div>px-2 py-1</div>
						<div>IconSurface#size: sm</div>
						<div>Icon#size: xs</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Medium (default)</SpecCell>
					<SpecCell>
						<div className="pds:flex pds:gap-1">
							<Button {...args}>Label</Button>
							<Button {...args}>
								<IconSurface>
									<MenuIcon />
								</IconSurface>
								Label
							</Button>
							<Button {...args}>
								<IconSurface>
									<FileAltIcon />
								</IconSurface>
								<IconSurface>
									<MenuIcon />
								</IconSurface>
								Label
								<IconSurface>
									<ClockIcon />
								</IconSurface>
							</Button>
						</div>
					</SpecCell>
					<SpecCodeCell>
						<div>text-xs/4</div>
						<div>h-8</div>
						<div>px-3 py-1.5</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Large</SpecCell>
					<SpecCell>
						<div className="pds:flex pds:gap-1">
							<Button {...args} size="lg">
								Label
							</Button>
							<Button {...args} size="lg">
								<IconSurface>
									<MenuIcon />
								</IconSurface>
								Label
							</Button>
							<Button {...args} size="lg">
								<IconSurface>
									<FileAltIcon />
								</IconSurface>
								<IconSurface>
									<MenuIcon />
								</IconSurface>
								Label
								<IconSurface>
									<ClockIcon />
								</IconSurface>
							</Button>
						</div>
					</SpecCell>
					<SpecCodeCell>
						<div>text-sm</div>
						<div>h-10</div>
						<div>px-3 py-2.5</div>
					</SpecCodeCell>
				</SpecRow>
			</SpecTable>
		)
	},
}

export const CustomSize: Story = {
	render() {
		return (
			<StorySwatch className="pds:gap-1">
				<Button size="sm" className="pds:h-14 pds:text-lg">
					Small (overridden)
				</Button>
				<Button size="md" className="pds:h-14 pds:text-lg">
					Medium (overridden)
				</Button>
				<Button size="lg" className="pds:h-14 pds:text-lg">
					Large (overridden)
				</Button>
			</StorySwatch>
		)
	},
}
