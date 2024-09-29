export interface IGoogleProfile {
	email: string
	firstName: string
	lastName: string
	picture: string
	accessToken: string
}

export interface IGithubProfile {
	email: string
	username: string
	picture: string
	accessToken: string
}

export type TSocialProfile = IGoogleProfile | IGithubProfile
