// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract dynamicBytes{
    bytes public Bytes;

    constructor() {
        Bytes="animusk7765";
    }

    function getBytes() external view returns(bytes memory){
        return Bytes;
    }

    function pushfunction() external {
        Bytes.push("c");
    }

    function popfunction() external {
        Bytes.pop();
    }

    function getLength() external view returns(uint){
        return Bytes.length;
    }


}