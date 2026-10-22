const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ================= ЗАДАЧА 1 =================
function ticketPrice(category) {
    switch (category) {
        case 1: return 300;
        case 2: return 500;
        case 3: return 900;
        default: return 0;
    }
}

function maxTickets(budget, price) {
    if (price === 0) return 0;
    let count = 0;
    while (budget >= price) {
        budget -= price;
        count++;
    }
    return count;
}

function printTicketResult(category, budget) {
    const price = ticketPrice(category);
    if (price === 0) {
        console.log("неизвестная категория");
        return;
    }
    const count = maxTickets(budget, price);
    console.log(`Категория ${category}, билет ${price} руб., бюджет ${budget} руб.: можно купить ${count} шт.`);
}

// ================= ЗАДАЧА 2 =================
function deliveryPrice(distance, total) {
    if (total >= 3000) {
        return 0;
    }
    if (distance <= 3) {
        return 0;
    } else if (distance <= 10) {
        return 200;
    } else {
        return 200 + (distance - 10) * 25;
    }
}

function printDelivery(distance, total) {
    const price = deliveryPrice(distance, total);
    console.log(`Расстояние ${distance} км, заказ ${total} руб.: доставка ${price} руб.`);
}

// ================= ЗАДАЧА 3 =================
function printSteps(height) {
    let builtSteps = 0;
    
    for (let i = 1; i <= height; i++) {
        if (i === 4) {
            continue;
        }
        if (i > 10) {
            console.log("Дальше лестница не построена");
            break;
        }
        console.log(`Ступень ${i}`);
        builtSteps++;
    }
    
    console.log(`Всего построено: ${builtSteps}`);
}


// ================= ГЛАВНОЕ МЕНЮ =================
console.log("выберите задачу:");
console.log("1 - билетная касса");
console.log("2 - доставка заказа");
console.log("3 - лестница");

rl.question("Ваш выбор: ", (choice) => {
    const task = choice.trim();

    if (task === "1") {
        rl.question("Категория билета\n1 - 300 рублей,\n2 - 500 рублей,\n3 - 900 рублей\nВаш выбор: ", (catInput) => {
            rl.question("Бюджет: ", (budgetInput) => {
                printTicketResult(Number(catInput), Number(budgetInput));
                rl.close();
            });
        });
    } 
    else if (task === "2") {
        rl.question("Расстояние: ", (distInput) => {
            rl.question("Сумма заказа: ", (totalInput) => {
                printDelivery(Number(distInput), Number(totalInput));
                rl.close();
            });
        });
    } 
    else if (task === "3") {
        rl.question("Высота лестницы: ", (heightInput) => {
            printSteps(Number(heightInput));
            rl.close();
        });
    } 
    else {
        console.log("такой задачи нет");
        rl.close();
    }
});