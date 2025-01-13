export enum UserRole {
	USER = 'USER',
	PREMIUM = 'PREMIUM',
	MANAGER = 'MANAGER',
	ADMIN = 'ADMIN'
}

export interface ITokenInside {
	id: string;
	rights: UserRole[];
	iat: number;
	exp: number;
}

export type TProtectUserData = Omit<ITokenInside, 'iat' | 'exp'>;
