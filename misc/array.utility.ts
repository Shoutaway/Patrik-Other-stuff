/**
 *	FireSkull Resource Machine
 *	@author Patrik Forsberg <mail@patrikforsberg.co>
 *	@web patrikforsberg.co
 */

/// <reference path="../typings/main.d.ts" />

"use strict";

import { IArrayUtility } from "./array.utility.interface"

class ArrayUtility implements IArrayUtility {

	public valueInArray(value, associativeArray) {
		var haveValue = false;
		
		for (var i = 0; i < associativeArray.length; i++) {
			if (associativeArray[i] == value) {
				haveValue = true;
				break;
			}       
		}

		return haveValue;
	}
}

export { ArrayUtility }