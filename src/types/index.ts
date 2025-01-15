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
	idRol?: string;
	username?: string;
	email?: string;
	password?: string;
	phone?: string;
	role?: "user" | "admin" | "reseller";
	accessToken?: string;
	created_at?: Date;
	visit_at?: Date;
}
