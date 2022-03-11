const { keyboard } = require("@testing-library/user-event/dist/keyboard");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function () {
  it("Should return original greeting", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy("world");
    await helloWorld.deployed();

    expect(await helloWorld.hello()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should return new greeting after modifying it", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy("world");
    await helloWorld.deployed();

    expect(await helloWorld.hello()).to.equal("Hello, world!");

    const setGreetingTx = await helloWorld.setDestination("mundo");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await helloWorld.hello()).to.equal("Hello, mundo!");
  });
});
