
const SELECTOR_USER_LOGIN = 'user-login';

/*	
module App {
}


	
enum AppState {
	NotAuthenticated,
	Authenticated,
	Authenticating,
	AuthenticationFailed
}
*/

module Constants {
	const allan = "";
}


module Global {	
	export enum AppState {
		Idle,
		Loading,
		Ready,
		Error
	}
}

export { Global, Constants }