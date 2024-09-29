import { TSocialProfile } from '@/auth/social-media/social-media-auth.types'
import { UserService } from '@/user/user.service'
import { BadRequestException, Injectable } from '@nestjs/common'

@Injectable()
export class SocialMediaAuthService {
	constructor(private userService: UserService) {}

	async login(req: { user: TSocialProfile }) {
		if (!req.user) {
			throw new BadRequestException('User not found by social media')
		}

		return this.userService.findOrCreateSocialUser(req.user)
	}
}
