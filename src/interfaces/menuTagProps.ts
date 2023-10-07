export interface MenuTagProps {
    label: string;
    size: TagChipSize;
    color: TagChipColor;
    variant: TagVariant;
    onClickEvent: (label: string) => void;
}

type TagChipColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
type TagChipSize = 'medium' | 'small';
type TagVariant = 'outlined' | 'filled';