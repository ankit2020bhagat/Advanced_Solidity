const { ethers } = require("hardhat");
const { deleteModel } = require("mongoose");

describe("dynmicBytes: ", function () {
    let deployContract;
    it("Contract Deployment:", async function () {
        const contractDynamicbytes = await ethers.getContractFactory("dynamicBytes");
        deployContract = await contractDynamicbytes.deploy();

        await deployContract.deployed();

        console.log("Contract Address :", deployContract.address);
    })

    it("Testing other function :", async function () {
        console.log("get length :", await deployContract.getLength());
        console.log("printing Bytes:", await deployContract.getBytes());
        await deployContract.pushfunction();
        console.log("print bytes", await deployContract.getBytes());
        console.log("get length ", await deployContract.getLength());
        await deployContract.popfunction();
        console.log("get Length :", await deployContract.getLength());
        await deployContract.getBytes();

       
    })
})