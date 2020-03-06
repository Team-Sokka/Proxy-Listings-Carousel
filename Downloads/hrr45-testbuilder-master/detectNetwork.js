// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

 
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.



// Write the function detectNetwork: - it should accept a string or a number for its cardNumber argument - it should return the appropriate network string (or undefined if there's no match), based on the provided cardData
// var cardData = [{
//   network: 'Visa',       // card issuer (network)
//   prefixes: ['4'],   // beginning digits
//   lengths: [13, 16, 19]  // lengths of card numbers
// },{
//   network: 'Mastercard',
//   prefixes: ['51', '52', '53', '54', '55'],
//   lengths: [16]
// },{
//   network: 'American Express',
//   prefixes: ['34', '37'],
//   lengths: [15]
// },{
//   network: 'Diner\'s Club',
//   prefixes: ['38', '39'],
//   lengths: [14]
// }];
 
var detectNetwork = function(cardNumber) {   
    // create a current cardData prefix variable
    var currentCardDataPrefix = '';
      // console.log(typeof currentCardDataPrefix);
    // create a current cardData length variable 
    var currentCardDataLength = 0;
      // console.log(typeof currentCardDataLength); 
    // convert cardNumber to a string
        console.log(typeof cardNumber);
    var cardNumberConverted = cardNumber;
    if (typeof cardNumber === 'number') {
        cardNumberConverted = cardNumber.toString();
      } 
      console.log(typeof cardNumber);
      // console.log(typeof cardNumberConverted);
    // create a cardNumber prefix var and set it equal to the first two values of the card number string
    var cardNumberPrefix = cardNumberConverted[0] + cardNumberConverted[1];
      // console.log(cardNumberPrefix);
    // create a card number prefix for visa variable incase of Visa's one digit prefix value
    var cardNumberPrefixForVisa = cardNumberConverted[0];
      // console.log(cardNumberPrefixForVisa);
  // iterate over the cardData array
  for (var i = 0; i < cardData.length; i++) {
    // create variables for cardData prefixes and cardData lengths
    var cardDataPrefixes = cardData[i].prefixes;
    var cardDataLengths = cardData[i].lengths;
    // iterate over the cardData prefixes 
    for (var j = 0; j < cardDataPrefixes.length; j++) {
      // set the current cardData prefix to the cardData prefixes at j
      currentCardDataPrefix = cardDataPrefixes[j];
        // console.log(currentCardDataPrefix);
      // iterate over the cardData lengths
      for (var k = 0; k < cardDataLengths.length; k++) {
        // set the current cardData length to the cardData length at k
        currentCardDataLength = cardDataLengths[k];
        // set up a conditional statment to check whether the card number's length and prefix match one of the cardData's length and prefix
        if ((cardNumber.length === currentCardDataLength) && (cardNumberPrefix === currentCardDataPrefix || cardNumberPrefixForVisa === currentCardDataPrefix)) {
          // if so return the value at the key network for the object at cardData[i]
          return cardData[i].network;
        }
      }
    } 
  }   
}
// var input_1 = '4145678901234';
// var input_2 = '341234567890123';
// var input_3 = '5112345678901234';
// var input_4 = '38123456789012';
// var network = detectNetwork(input_1, cardData);
// console.log(network);
