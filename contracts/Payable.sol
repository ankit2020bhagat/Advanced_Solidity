//SPDX-License-Identifier: UNLINCENSED

pragma solidity ^0.8.9;

contract Payable{
    address payable public owner = payable(msg.sender);

    constructor() payable{

    }
    
    function getEther ()  public  payable{

    }

    function getBalance() external view  returns(uint){
         return address(this).balance;
    }

}