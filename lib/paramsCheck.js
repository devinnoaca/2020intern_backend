const numberCheck = (numberData) => {
	for(i=0; i<numberData.length; i++) {
		if(Number.isNaN(numberData[i])){
			return false;
		}
	}
}

const omissionCheck = (undefinedData) => {
	for(i=0; i<undefinedData.length; i++) {
		if(undefinedData[i] === undefined) {
			return false;
		}
	}
}

const nullCheck = (nullData) => {
	console.log(nullData);
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