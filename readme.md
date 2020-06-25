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
  Stock: (Array)
  - Items
  Item:
  - Name
  - Price
  - Quantity


Tests: (Ideas on what I could test.)
  InventoryService: DONE
  - Should be store the users recieved products
  - Should be store the users coin balance.

  BankService: DONE
  - Should be able to say if change is can be returned.
  - Should be able to return the users coins.
  - Should be able to return exact change.

  StockService: DONE
  - Should be able to return the current quantity of a product
  - Should be able to give a user a product
  - Should be able to say if a product is sold out.

  SaleService:
  - Should be able to check whether USER_COINS is greater than or equal to REQUIRED_COINS.
  - Should be able to calculate change

  Display:
  - Should be able to output a message to the user.

 Weights and sizes
  Dime: 2.26 Grams | 1.8 cm | 10c
  Nickel : 5 Grams | 2.1 cm | 5c
  Quarter: 5.6 Grams | 2.4 cm | 25c