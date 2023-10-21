export enum LayoutsEnum {
	default = 'default',
	login = 'login',
	error = 'error',
}
export type LayoutOptions = {
	sidebar?: boolean;
	focused?: boolean;
	footer?: boolean;
};

export const AppLayoutToFileMap: Record<LayoutsEnum, string> = {
	default: 'layoutDefault',
	login: 'layoutLogin',
	error: 'layoutError',
};
