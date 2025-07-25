const fs = require('fs');
const BALANCE_FILE = './balance.json';

function resetBalance() {
  fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: 1000.00 }));
}

function readBalance() {
  if (!fs.existsSync(BALANCE_FILE)) {
    resetBalance();
  }
  const data = JSON.parse(fs.readFileSync(BALANCE_FILE));
  return data.balance;
}

function writeBalance(newBalance) {
  fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: newBalance }));
}

function creditAccount(amount) {
  let balance = readBalance();
  balance += amount;
  writeBalance(balance);
  return balance;
}

function debitAccount(amount) {
  let balance = readBalance();
  if (balance >= amount) {
    balance -= amount;
    writeBalance(balance);
    return { success: true, balance };
  } else {
    return { success: false, balance };
  }
}

module.exports = {
  resetBalance,
  readBalance,
  writeBalance,
  creditAccount,
  debitAccount
};
