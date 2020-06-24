Notes:
- Use TDD (Never done this before, Red/Green Testing, write unit tests first.)
- Write in Typescript.
- Console App.
- 2 Hours Max.

Classes:
  Bank:
  - AvaliableBalance
  - TransactionBalance
  Coin:
  - Name
  - Size
  - Weight
  - Value
  UserInventory:
  - Products
  - Balance
  Products: (Array)
  - Name
  - Price


Tests: (Ideas on what I could test.)
  InventoryService:
  - Should be store the users recieved products
  - Should be store the users coin balance.
  - Should be able to update the users products
  - Should be able to update the users coin balance.

  BankService:
  - Should be able to say if change is can be returned.
  - Should be able to return the users coins.
  - Should be able to return exact change.

  StockService:
  - Should be able to return the current quantity of a prodct
  - Should be able to give a user a product
  - Should be able to say if a product is sold out.

  SaleService:
  - Should be able to check whether USER_COINS is greater than or equal to REQUIRED_COINS.
  - Should be able to update avaliable balance after a user as recieved their product
  - Should be able to update transaction balance after a user as entered their coins
  - Should be able to calculate change

  CoinService:
  - Should be able to check if a coin is valid. [Nickels, Dimes, Quarters]
  - Should be able to check a coins value by weight and size, by string
  - Should be able to tell the Bank a coin has been entered.

  Display:
  - Should be able to output a message to the user.