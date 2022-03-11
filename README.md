# Hello World with hardhat and react

This project is a simple "Hello, World!" application with react and hardhat.

It lets you obtain the current message stored in the smart contract using "Get Message" button, and change the destination of the greeting using the "Set Destination" button.

## Prior to execute
- Node(>=12) and Npm installed
- Metamask installed in your current browser.

## Run in a local test network
1. Install dependencies
   ```shell
   npm install
   ```

2. Start local network in a separate shell

   ```shell
   npx hardhat node
   ```

   This command will output a list of addresses and their associated private keys.

3. Change Metamask active network to localhost

4. Import one of the addresses printed in step 2 into Metamask and select it as the active account.

5. Compile contracts

   ```shell
   npx hardhat compile
   ```

6. Deploy contracts

   ```shell
   npx hardhat run scripts/deploy.js --network localhost
   ```
   This command will print contract address in its output.

7. Replace contract address in file `src/App.js` with the resulting address of previous step.
   
8. Start app. 

   ```shell
   npm start
   ```

   It will compile the react app and display it in a browser tab.


## Test contracts

   ```shell
   npx hardhat test
   ```