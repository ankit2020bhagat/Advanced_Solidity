//SPDX-License-Identifier: UNLINCENSED

pragma solidity ^0.8.9;

contract A1 {
    string public name;
    uint256 public age;

    constructor(string memory _name, uint256 _age) {
        name = _name;
        age = _age;
    }
}

contract B1 {
    string public add;
    uint256 public salary;

    constructor(string memory _add, uint256 _salary) {
        add = _add;
        salary = _salary;
    }
}

contract C1 is A1("Ankit ", 22), B1("Delhi", 10000) {}

contract D1 is A1, B1 {
    constructor() A1("kumar", 22) B1("Pune", 300000) {}
}
