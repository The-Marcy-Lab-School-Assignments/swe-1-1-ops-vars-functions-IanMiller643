const {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
} = require('./from-scratch');

// Test your functions here!

console.log(isEven(5));
console.log(convertToFahrenheit(23));
console.log(createGreeting("Phillip"));
console.log(getInitials("Phillip", "Maso"));
console.log(formatPrice(17));
console.log(getLarger(12, 14));
console.log(isValidAge(12));