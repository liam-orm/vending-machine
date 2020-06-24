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

Classes:
  Bank:
  - AvaliableBalance
  - TransactionBalance
  Coin:
  - Name
  - Size
  - Weight
  - Value


Tests: (Ideas on what I could test.)
  InventoryService:
  - Should be store the users recieved products
  - Should be store the users coin balance.
  - Should be able to update the users products
  - Should be able to update the users coin balance.

  StockService:
  - Should be able to return the current quantity of a prodct
  - Should be able to give a user a product

  Vender:
  - Should be able to check whether USER_COINS is greater than or equal to REQUIRED_COINS.
  - Should be able to return exact change.
  - Should be able to return the users coins.
  - Should be able to update avaliable balance after a user as recieved their product
  - Should be able to update transaction balance after a user as entered their coins

  CoinService:
  - Should be able to check a coins value by weight and size, by string
  - Should be able to tell the Bank a coin has been entered.


Things to make:
- User Inventory
- Stock Management
- Change Management
- Ability to input stock and change on startup or use defaults.
