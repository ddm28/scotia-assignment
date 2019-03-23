export interface MenuItem {
	name: string;
	price: string;
}

export interface ErrorMsg {
	error: string;
}

export interface Menu {
	menu: MenuItem[];
	error: ErrorMsg;
}
