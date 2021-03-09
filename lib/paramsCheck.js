const numberCheck = (numberData) => {
	if(numberData.length === 0) return true;
	for(i=0; i<numberData.length; i++) {
		if(Number.isNaN(numberData[i])){
			return false;
		}
	}
}

const omissionCheck = (undefinedData) => {
	if(undefinedData.length === 0) return true;
	for(i=0; i<undefinedData.length; i++) {
		if(undefinedData[i] === undefined) {
			return false;
		}
	}
}

const nullCheck = (nullData) => {
	if(nullData.length === 0) return true;
	for(i=0; i<nullData.length; i++) {
		if(nullData[i] === null) {
			return false;
		}
	}
}

module.exports = {
	numberCheck,
	omissionCheck,
	nullCheck,
}
