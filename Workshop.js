const userInputString = prompt(
    "Please enter your froyo flavors separated by commas.",
    ""
  );
  const stringArray = userInputString.split(",");
  const flavors = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const flavor = parseInt(str);
    flavors.push(flavor);
    console.log(str)
  }
  