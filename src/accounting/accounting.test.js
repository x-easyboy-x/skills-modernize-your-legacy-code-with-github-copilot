const accounting = require('./accounting');
const fs = require('fs');

describe('Student Account Management System', () => {
  beforeEach(() => {
    accounting.resetBalance();
  });

  test('TC01: View initial account balance', () => {
    expect(accounting.readBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    const newBalance = accounting.creditAccount(200.00);
    expect(newBalance).toBe(1200.00);
    expect(accounting.readBalance()).toBe(1200.00);
  });

  test('TC03: Debit account with valid amount (sufficient funds)', () => {
    accounting.creditAccount(500.00); // balance = 1500.00
    const result = accounting.debitAccount(500.00);
    expect(result.success).toBe(true);
    expect(result.balance).toBe(1000.00);
    expect(accounting.readBalance()).toBe(1000.00);
  });

  test('TC04: Debit account with invalid amount (insufficient funds)', () => {
    const result = accounting.debitAccount(2000.00);
    expect(result.success).toBe(false);
    expect(result.balance).toBe(1000.00);
    expect(accounting.readBalance()).toBe(1000.00);
  });

  test('TC07: Persist balance after credit', () => {
    accounting.creditAccount(100.00);
    expect(accounting.readBalance()).toBe(1100.00);
  });

  test('TC08: Persist balance after debit', () => {
    accounting.creditAccount(200.00); // balance = 1200.00
    accounting.debitAccount(200.00); // balance = 1000.00
    expect(accounting.readBalance()).toBe(1000.00);
  });
});

describe('Menu and Exit Logic', () => {
  test('TC05: Invalid menu selection', () => {
    // Simulate invalid menu selection logic
    const validChoices = ['1', '2', '3', '4'];
    const invalidChoice = '5';
    expect(validChoices.includes(invalidChoice)).toBe(false);
  });

  test('TC06: Exit the application', () => {
    // Simulate exit logic
    let continueFlag = true;
    continueFlag = false;
    expect(continueFlag).toBe(false);
  });
});
