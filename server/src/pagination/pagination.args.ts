import { IsOptional, IsString } from 'class-validator';

export class PaginationArgs {
	@IsString()
	@IsOptional()
	skip?: string;

	@IsString()
	@IsOptional()
	take?: string;
}

export class PaginationArgsWithSearchTerm extends PaginationArgs {
	@IsString()
	@IsOptional()
	searchTerm?: string;
}
