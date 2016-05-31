"use strict";

class StringHelper {
	static isNullOrEmpty(value: any) {
		return value == undefined || value == null ||
			(typeof value === "string" && value.toString().length == 0);
	}
}

export { StringHelper }
