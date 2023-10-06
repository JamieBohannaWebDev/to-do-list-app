export interface MenuTagProps {
    label: string;
    size: TagChipSize;
    color: TagChipColor;
    onClickEvent: () => void;
}

type TagChipColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
type TagChipSize = 'medium' | 'small';