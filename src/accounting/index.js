const readline = require('readline');
const fs = require('fs');
const BALANCE_FILE = './balance.json';

function readBalance() {
  if (!fs.existsSync(BALANCE_FILE)) {
    fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: 1000.00 }));
  }
  const data = JSON.parse(fs.readFileSync(BALANCE_FILE));
  return data.balance;
}

function writeBalance(newBalance) {
  fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: newBalance }));
}

function showMenu() {
  console.log('--------------------------------');
  console.log('Account Management System');
  console.log('1. View Balance');
  console.log('2. Credit Account');
  console.log('3. Debit Account');
  console.log('4. Exit');
  console.log('--------------------------------');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  let continueFlag = true;
  function loop() {
    if (!continueFlag) {
      console.log('Exiting the program. Goodbye!');
      rl.close();
      return;
    }
    showMenu();
    rl.question('Enter your choice (1-4): ', (choice) => {
      switch (choice.trim()) {
        case '1':
          const balance = readBalance();
          console.log('Current balance:', balance.toFixed(2));
          loop();
          break;
        case '2':
          rl.question('Enter credit amount: ', (amountStr) => {
            const amount = parseFloat(amountStr);
            if (isNaN(amount) || amount <= 0) {
              console.log('Invalid amount.');
              loop();
              return;
            }
            let balance = readBalance();
            balance += amount;
            writeBalance(balance);
            console.log('Amount credited. New balance:', balance.toFixed(2));
            loop();
          });
          break;
        case '3':
          rl.question('Enter debit amount: ', (amountStr) => {
            const amount = parseFloat(amountStr);
            if (isNaN(amount) || amount <= 0) {
              console.log('Invalid amount.');
              loop();
              return;
            }
            let balance = readBalance();
            if (balance >= amount) {
              balance -= amount;
              writeBalance(balance);
              console.log('Amount debited. New balance:', balance.toFixed(2));
            } else {
              console.log('Insufficient funds for this debit.');
            }
            loop();
          });
          break;
        case '4':
          continueFlag = false;
          loop();
          break;
        default:
          console.log('Invalid choice, please select 1-4.');
          loop();
      }
    });
  }
  loop();
}

main();
