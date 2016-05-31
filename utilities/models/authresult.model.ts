
export class AuthResultModel implements IResult {
	success: boolean;
	
	constructor(success: boolean) {
		this.success = success;
	}
}