Notes:
- Use TDD (Never done this before, Red/Green Testing, write unit tests first.)
- Write in Typescript.
- Console App.
- 2 Hours Max.

Features/Todos/Reminders
  Coins:
  - Accept Coins [Nickels, Dimes, Quarters]
  - Reject all other coins
  - Must display total amount
  - Must get coin weight and size.
  - Enter a string to get coin I.E ('Nickel')
  Product:
  - Select Products [Cola $1.00, Chips $0.50, Candy $0.65]
  - When selected prompt user to insert right coins
  - When price is met, machine outputs product; and machine displays a thank you message.
  - If there is not enough money, machine displays the price of the item and will display either InSERT COIN or the current amount remaining.
  Change:
  - Return change when applicable to coin return.
  Return Coins:
  - when the turn coins button, the machine will return the users coins (store coins) return coins one at a time.
  Sold out:
  - When a product is out of stock, the machine displays SOLD OUT.
  Exact Change:
  - When the machine cannot return change, prompt the user EXACT CHANGE ONLY

Tests:
  Inventory:
  - Should be able to track the users recieved products
  - Should be able to track the users current balance

  Stock:
  - Should be able to list all avaliable products
  - Should be able to list remaining quantity of given product
  - Should be able to give a user a product

  Bank:
  - Should be able to list avaliable machine balance
  - Should be able to list current transaction balance (users coins they have inserted)
  - Should be able to check whether USER_COINS is greater than or equal to REQUIRED_COINS.
  - Should be able to return exact change.
  - Should be able to return the users coins.

  Coins:
  - Should be able to check a coins value by weight and size, by string
  - Should be able to tell the Bank a coin has been entered.


Things to make:
- User Inventory
- Stock Management
- Change Management
- Ability to input stock and change on startup or use defaults.
