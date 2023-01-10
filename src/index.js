module.exports = function toReadable (number) {
	const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const multiplesOfTen = ['UWU', 'UWU', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let str = number + '';
	let result = '';
	if (number === 0){
		return 'zero'
	}
	if (str.length == 3){
		result = numbers[str[+0]] + ' hundred ' 
		if(str[+1] == 0){
			if (str[+2] == 0){
				return result.trim()
			}
			result += numbers[str[+2]]
			return result.trim()
		}
		switch (+(str[1] + str[2])){
			case 10:
				result += 'ten';
				return result
			case 11:
				result += 'eleven';
				return result
			case 12:
				result += 'twelve';
				return result
			case 13:
				result += 'thirteen';
				return result
			case 14:
				result += 'fourteen';
				return result
			case 15:
				result += 'fifteen';
				return result
			case 16:
				result += 'sixteen';
				return result
			case 17:
				result += 'seventeen';
				return result
			case 18:
				result += 'eighteen';
				return result
			case 19:
				result += 'nineteen';
				return result
			case 20:
				result += 'twenty';
				return result.trim()
			default:
				if (str[+2] == 0){
					result += multiplesOfTen[str[+1]]
					return result.trim()
				}
				if (str[+1] == 0){
					result += numbers[str[+2]]
					return result.trim()
				}
				result += (multiplesOfTen[str[+1]] + ' ' + numbers[str[+2]]);
				return result.trim()
		}
	} else if(str.length == 2){
		switch (+(str[0] + str[1])){
			case 10:
				result += 'ten';
				return result
			case 11:
				result += 'eleven';
				return result
			case 12:
				result += 'twelve';
				return result
			case 13:
				result += 'thirteen';
				return result
			case 14:
				result += 'fourteen';
				return result
			case 15:
				result += 'fifteen';
				return result
			case 16:
				result += 'sixteen';
				return result
			case 17:
				result += 'seventeen';
				return result
			case 18:
				
				result += 'eighteen';
				return result
			case 19:
				result += 'nineteen';
				return result
			case 20:
				result += 'twenty';
				return result
			default:
				result += (multiplesOfTen[str[+0]] + ' ' + numbers[str[+1]]);
				return result.trim()
		}
	}else {
		result += numbers[str[+0]];
			return result
	}
	return result
}
