// --------- Kilometer to Meter -----------
// This Program will Convert Kilometers to Meters
function kilometerToMeter(kilometer) {
    var oneKilometer = 1000; //one kilometer is 1000 meter.
    var message;
    var convertKilometerToMeter = 0;
    if (isNaN(kilometer) || kilometer == undefined || typeof (kilometer) == "string" || kilometer<0) {
        message = "not a valid input!"
        return message.toUpperCase();
    }
    else {
        convertKilometerToMeter = kilometer * oneKilometer;
    }

    return convertKilometerToMeter;
}


// ---------- Budget Calculator -------------
// This Program will Calculate your total cost of Budget 
function budgetCalculator(watch, mobile, laptop) {
    var totalBudget;

    if (watch == 0 && mobile == 0 && laptop == 0) {
        var message = "you didn't buy anything";
        return message.toUpperCase();

    }
    else if (isNaN(watch) || isNaN(mobile) || isNaN(laptop) || typeof (watch) == "string" || typeof (mobile) == "string" || typeof (laptop) == "string") {

        var message = "Input Not Valid";
        return message.toUpperCase();

    }

    else {
        var watchBudget = watch * 50;
        var mobileBudget = mobile * 100;
        var laptopBudget = laptop * 500;

        totalBudget = watchBudget + mobileBudget + laptopBudget;
    }
    return totalBudget;
}


// ---------- Hotel Cost --------------
// This program will calculate your hotel room cost
function hotelCost(day) {
    var totalHotelCost = 0;
    var message;

    // For Negative Number
    if (typeof (day) === "string") {
        message = "Get out😡, String not Allow!";
        return message.toUpperCase();
    }
    else if (day < 0 || day == undefined) {
        message = "You have to input positive number!";
        return message.toUpperCase();
    }
    // For String
    else if (isNaN(day)) {
        message = "Not valid Input!";
        return message.toLowerCase();
    }
    else if (day <= 10) {
        var firstTen = day * 100;
        totalHotelCost = firstTen;
    }
    else if (day <= 20) {
        var firstTen = 10 * 100;
        var remaining = day - 10;
        var secondTen = remaining * 80;
        totalHotelCost = firstTen + secondTen;
    }
    else if (day > 20) {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remaining = day - 20;
        var fourth = remaining * 50;
        totalHotelCost = firstTen + secondTen + fourth;
    }

    return totalHotelCost;
}

// -------- Mega Friends ---------
// This program will return longest string from an Array;
function megaFriend(array) {
    var longestString;
    var stringLength = 0;
    var message;

    if (array.length == 0 || array == undefined) {
        message = "Empty Array Not Allowed!";
        return message.toUpperCase();
    }
    else {
        for (var i = 0; i < array.length; i++) {
            if (typeof (array[i]) == "number") {
                continue;
            }
            else if (!array[i].trim()) {
                continue;
            }

            else if (array[i].length > stringLength) {

                stringLength = array[i].length;
                longestString = array[i];
            }


        }
    }

    return longestString;
}