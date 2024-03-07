function firstChar(text) {
  let ret = text.trim();
	return ret[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
