// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract fixedSizeBytes{
    bytes5 public Bytes5;
    bytes7 public Bytes7;

    function setBytes() external {
        Bytes5="Ankit";
        Bytes7="kumar";
    }
    function getBytes() external view returns(bytes1,bytes1){
        return (Bytes5[3],Bytes7[3]);
    }

    function getByteslength() external view returns(uint,uint){
        return (Bytes5.length,Bytes7.length);
    }
}