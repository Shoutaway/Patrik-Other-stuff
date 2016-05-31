import {Output, EventEmitter} from 'angular2/core'
import {CoreService } from '../core.service'
import {AuthResultModel} from '../../models/authresult.model'

// Interface --------------------------------------------------
interface IAccountService {
	authenticateUser(email: string, password: string) : AuthResultModel;
	setAuthenticated(isAuthenticated: boolean): void;
}

// Implementation ---------------------------------------------
class AccountService implements IAccountService {
    public authenticateUser(email: string, password: string) : AuthResultModel {
		var authResult = new AuthResultModel(true);
	
		return authResult;
    }
	
	public setAuthenticated(isAuthenticated: boolean) {
		
	}
}

export { AccountService }