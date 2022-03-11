//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
    string private greeting;

    constructor(string memory _initialDestination) {
        console.log("Deploying a Hello to :", _initialDestination);
        // According to https://ethereum.stackexchange.com/questions/729/how-to-concatenate-strings-in-solidity is the most efficient method
        greeting = string(abi.encodePacked("Hello, ", _initialDestination, "!"));
    }

    function hello() public view returns (string memory) {
        return greeting;
    }

    function setDestination(string memory _newDestination) public returns (string memory) {
        greeting = string(abi.encodePacked("Hello, ", _newDestination, "!"));
        return greeting;
    }
}
