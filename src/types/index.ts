/**
 *  Layout Types
 */

export type ChildrenProps = {
	className?: string;
	children?: React.ReactNode;
};

/**
 *  User Types
 */

export interface UserModelType extends Document {
	_id?: string;
	id: string;
	firstname?: string;
	lastname?: string;
	email?: string;
	password?: string;
	phone?: string;
	avatar_url?: string;
	role?: "user" | "admin" | "reseller";
	token?: string;
	subscribe?: string;
	devices?: number;
	active?: boolean;
	status: boolean;
	available_reset_password: boolean;
	manager_id?: string;
	manager?: string;
	manager_Role?: string;
	created_at?: Date;
	visit_at?: Date;
}
