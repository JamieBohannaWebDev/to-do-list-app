export interface MenuItemProps {
    icon: React.JSX.Element;
    label: string;
    value?: number;
    onClickEvent: () => void;
}
