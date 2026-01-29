export interface NavLink {
    name: string;
    href: string;
    submenu?: {
        name: string,
        href: string
    }[];
}