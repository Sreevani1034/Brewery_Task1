var obj1 = [
    { name: "coffee", price: 100, type: "vegan", category: "beverage" },
    { name: "Donut", price: 150, type: "vegan", category: "sweet" },
    { name: "spring rolls", price: 100, type: "non-veg", category: "snacks" },
    { name: "cheesecake", price: 100, type: "vegan", category: "desert" },
];
console.log(obj1);
// Setup prompt-sync
var promptSync = require('prompt-sync');
var ask = promptSync();
function order_items() {
    var order = [];
    var c = true;
    var _loop_1 = function () {
        var itemName = ask("Enter the name of the item you want: ");
        var quantity = parseInt(ask("Enter how many you want: "), 10);
        if (isNaN(quantity) || quantity <= 0) {
            console.log("❌ Invalid quantity. Please enter a positive number.");
            return "continue";
        }
        var foundItem = obj1.find(function (item) { return item.name.toLowerCase() === itemName.toLowerCase(); });
        if (!foundItem) {
            console.log(" Item not found. Please try again.");
            return "continue";
        }
        var size = void 0;
        if (foundItem.category.toLowerCase() === "beverage") {
            size = ask("Enter size (small, medium or large): ");
        }
        var total_price = foundItem.price * quantity;
        order.push({
            select_item: foundItem.name,
            quantity: quantity,
            size: size,
            unit_price: foundItem.price,
            total_price: total_price
        });
        var res = ask("Do you want to add one more item? Type 'yes' or 'done': ");
        c = res.toLowerCase() == "yes";
    };
    while (c) {
        _loop_1();
    }
    return order;
}
function print_bill(order) {
    console.log("\n========== Final Bill ==========");
    var grandTotal = 0;
    var index = 0;
    order.forEach(function (item) {
        console.log("".concat(index + 1, ". ").concat(item.select_item, " x ").concat(item.quantity, " @ \u20B9").concat(item.unit_price) +
            (item.size ? " (".concat(item.size, ")") : "") +
            " = \u20B9".concat(item.total_price));
        grandTotal += item.total_price;
        index++;
    });
    var discount = 0;
    if (grandTotal > 1000) {
        discount = grandTotal * 0.1;
        console.log("\n Discount Applied (10%): \u20B9".concat(discount.toFixed(2)));
    }
    var finalAmount = grandTotal - discount;
    console.log("\nTotal Amount to Pay: \u20B9".concat(finalAmount.toFixed(2)));
    console.log("================================\n");
}
// Run everything
function main() {
    while (true) {
        var ordered = order_items(); // take input
        print_bill(ordered); // print bill
        var paid = ask("Paid? (type 'Paid' to restart, anything else to exit): ");
        if (paid.toLowerCase() !== "paid") {
            console.log("Thank you! Come again.");
            break;
        }
    }
}
main();
