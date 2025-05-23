"use strict";
const obj1 = [
    { name: "coffee", price: 100, type: "vegan", category: "beverage" },
    { name: "Donut", price: 150, type: "vegan", category: "sweet" },
    { name: "spring rolls", price: 100, type: "non-veg", category: "snacks" },
    { name: "cheesecake", price: 100, type: "vegan", category: "desert" },
];
console.log(obj1);
// Setup prompt-sync
const promptSync = require('prompt-sync');
const ask = promptSync();
function order_items() {
    const order = [];
    let c = true;
    while (c) {
        const itemName = ask("Enter the name of the item you want: ");
        const quantity = parseInt(ask("Enter how many you want: "), 10);
        if (isNaN(quantity) || quantity <= 0) {
            console.log(" Invalid quantity. Please enter a positive number.");
            continue;
        }
        const foundItem = obj1.find(item => item.name.toLowerCase() === itemName.toLowerCase());
        if (!foundItem) {
            console.log(" Item not found. Please try again.");
            continue;
        }
        let size;
        if (foundItem.category.toLowerCase() === "beverage") {
            size = ask("Enter size (small, medium or large): ");
        }
        const total_price = foundItem.price * quantity;
        order.push({
            select_item: foundItem.name,
            quantity: quantity,
            size: size,
            unit_price: foundItem.price,
            total_price: total_price
        });
        const res = ask("Do you want to add one more item? Type 'yes' or 'done': ");
        c = res.toLowerCase() == "yes";
    }
    return order;
}
function print_bill(order) {
    console.log("\n========== Final Bill ==========");
    let grandTotal = 0;
    let index = 0;
    order.forEach((item) => {
        console.log(`${index + 1}. ${item.select_item} x ${item.quantity} @ ₹${item.unit_price}` +
            (item.size ? ` (${item.size})` : "") +
            ` = ₹${item.total_price}`);
        grandTotal += item.total_price;
        index++;
    });
    let discount = 0;
    if (grandTotal > 1000) {
        discount = grandTotal * 0.1;
        console.log(`\n Discount Applied (10%): ₹${discount.toFixed(2)}`);
    }
    const finalAmount = grandTotal - discount;
    console.log(`\nTotal Amount to Pay: ₹${finalAmount.toFixed(2)}`);
    console.log("================================\n");
}
// Run everything
function main() {
    while (true) {
        const ordered = order_items(); // take input
        print_bill(ordered); // print bill
        const paid = ask("Paid? (type 'Paid' to restart, anything else to exit): ");
        if (paid.toLowerCase() !== "paid") {
            console.log("Thank you! Come again.");
            break;
        }
    }
}
main();
