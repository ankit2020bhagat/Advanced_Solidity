// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract dynamicSizeArray{
    uint[] public arr = [12,3,6,5,7,4,2];

    uint public temp;

    uint public len;

    function getArray() external  view returns(uint[] memory){
        return arr;
    }

    function Arrayfunction() external {
         temp =arr[4];

         arr[4]=200;

         delete arr[5];

         len=arr.length;

         arr.push(111);

         arr.pop();
         
    }
}