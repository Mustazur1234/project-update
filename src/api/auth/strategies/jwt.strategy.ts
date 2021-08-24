import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { UserService } from "src/api/users/services/user.service";
import { Strategy } from "passport-jwt";
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:'chksuer@hus'
        });
    }

    async validate(payload: any) {
        let {institute_id} = payload;
        let institute = await this.userService.findUserById(institute_id);
        return institute;
    }
}