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
  Coin:
  - A coin can be entered.
  - Coins can be ejected.
  - Can get coin weight and size by String name.
  Product:
  - When product is selected return price.
  - Product can be dispensed. (Maybe have a user inventory?)
  - When current coins inserted isn't equal to or greater than price of product, return change remaining.
  Change:
  - Change can be returned (User inventory) Exact amount returned.
  Return Coins:
  - The machine will return all entered coins.
  Sold Out:
  - Machine will alert user that a product is sold out.
  Exact Change:
  - When the machine cannot return change, prompt user to enter exact change.

Things to make:
- User Inventory
- Stock Management
- Change Management
- Ability to input stock and change on startup or use defaults.
