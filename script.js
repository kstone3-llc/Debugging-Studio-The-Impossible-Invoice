const unitPrice = 12.50;
const quantity = 4;
const discount = 5;
const subtotal = unitPrice * quantity;
const total = subtotal - discount;
if (isNaN(unitPrice) || isNaN(quantity)) {
    throw new TypeError("Invalid input: must enter number.")
}

if (quantity <= 0) {
    throw new TypeError("Invalid input quantity must be greater than 0")
}
console.log(total.toFixed(2));

/*
Smallest Failing case: line 1: unitPrice = "12.50"; and line 2: quantity = "4"; are strings. Line: 4 is using an incorrecrt operator. + --> *
First point where actual state differs from expected state: line 4: subtotal = unitPrice + quantity;
Falseifiable hypothesis: If unitPrice and quantity are changed to numbers and subotal uses the correct operator, then the total should calculate as expected.
*/



