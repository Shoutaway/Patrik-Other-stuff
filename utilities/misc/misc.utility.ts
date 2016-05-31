/**
 *	FireSkull Resource Machine
 *	@author Patrik Forsberg <mail@patrikforsberg.co>
 *	@web patrikforsberg.co
 *	@date 2016-03-23
 */

/// <reference path="../typings/main.d.ts" />

"use strict";

import { Miscellaneous } from "./misc.interface"

class MiscUtility implements Miscellaneous {
	
	public static isNullOrEmpty(value: any): boolean {
		return (MiscUtility.isNullOrUndefined(value)
			|| value.length <= 0) ? true : false;
	}

	public static isNullOrUndefined(value: any) {
		return (value === undefined || value == null)
	}

	getClassName(sender: any): string {
		if (sender == undefined) {
			return "";	
		}
		
		var funcNameRegex = /function (.{1,})\(/;
		var results  = (funcNameRegex).exec(this["constructor"].toString());
		return (results && results.length > 1) ? results[1] : "";
	}
}

export { MiscUtility }