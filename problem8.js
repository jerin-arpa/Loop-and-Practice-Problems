//  Write the price of the books you have . And display the prices if the prices is lower then 200

var bookPrice = [150, 200, 400, 100, 250, 50, 180, 500];
for (i = 0; i < bookPrice.length; i++) {
    price = bookPrice[i];
    if (price < 200) {
        console.log(price);
    }
}