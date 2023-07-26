import { CheckSquare, Square } from 'lucide-react';
import { DropdownMenu, DropdownMenuUI } from '.';

type Props<T extends { id: string }> = {
	content: T[];
	keyExtractor: (item: T) => string;
	labelExtractor: (item: T) => string;
	onCheckedChange?(id: string, checked: boolean): void;
	isCheckedById?(id: string): boolean;
	title?: string;
	align?: DropdownMenuUI.MenuContentProps['align'];
};

export function DropdownCheckbox<T extends { id: string }>({
	content,
	keyExtractor,
	labelExtractor,
	onCheckedChange = () => null,
	isCheckedById = () => false,
	title,
	align = 'start'
}: Props<T>) {
	return (
		<DropdownMenu title={title} align={align}>
			{content.map((item) => {
				const isChecked = isCheckedById(item.id);

				return (
					<DropdownMenuUI.CheckboxItem
						key={keyExtractor(item)}
						checked={isChecked}
						onCheckedChange={(checked) =>
							onCheckedChange(item.id, checked)
						}
						onSelect={(e) => e.preventDefault()}
						className="mouse-over focus-keyboard flex items-center gap-3 px-3 py-2 first:mt-2 last:mb-4"
					>
						{isChecked ? (
							<CheckSquare className="w-5" />
						) : (
							<Square className="w-5" />
						)}
						{labelExtractor(item)}
					</DropdownMenuUI.CheckboxItem>
				);
			})}
		</DropdownMenu>
	);
}
