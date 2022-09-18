//SPDX-License-Identifier: UNLINCENSED

pragma solidity ^0.8.9;

contract A{
    uint public x=100;
    address public owner=msg.sender;

    function fun1() external pure returns(string memory){
        return "I am inside contract A";
    }

    function  fun2() external pure returns(string memory){
        return "I am in contract A";
    }

    function fun3() external pure virtual returns(string memory){
        return "I am in Contract A";
    }

    function fun4() external pure virtual returns (string memory) {
        return "I am in contract A";
    }
}

contract B is A{
    function fun3() external pure override returns(string memory){
        return "I am  in contract B";

    }

    function fun4() external pure virtual override returns(string memory)  {
        return "I am in contract B";
    }

}

contract C is B{
     function fun4() external pure override returns (string memory){
        return "I am in Contract C";
     }
}