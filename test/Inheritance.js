const { ethers } = require("hardhat");

describe("Inheritance :", function () {
    let deployContract;
    it("Contract A deployment", async function () {
        const Contract_A = await ethers.getContractFactory("A");
        deployContract = await Contract_A.deploy();
        await deployContract.deployed();
        console.log("Contract A Address :", await deployContract.address);
    })
    it("Calling contract A function :", async function () {
        console.log("Calling fun1:", await deployContract.fun1());
        console.log("Calling fun2", await deployContract.fun2());
        console.log("Calling fun3:", await deployContract.fun3());
        console.log("Calling fun4:", await deployContract.fun4());
    })

    it("Contract B deployment :", async function () {
        const contractB = await ethers.getContractFactory("B");
        deployContract = await contractB.deploy();
        await deployContract.deployed();
        console.log("Contract_B Address :", deployContract.address);
    })
    it("Calling contrct B's function :", async function () {
        console.log("Calling fun1:", await deployContract.fun1());
        console.log("Calling fun2:", await deployContract.fun2());
        console.log("Calling fun3:", await deployContract.fun3());
        console.log("Calling fun4:", await deployContract.fun4());
    })

    it("Contract C Deployment :", async function () {
        const contractB = await ethers.getContractFactory("C");
        deployContract = await contractB.deploy();
        await deployContract.deployed();
        console.log("Contract_B Address :", deployContract.address);

    })

    it("Calling contrct C's function :", async function () {
        console.log("Calling fun1:", await deployContract.fun1());
        console.log("Calling fun2:", await deployContract.fun2());
        console.log("Calling fun3:", await deployContract.fun3());
        console.log("Calling fun4:", await deployContract.fun4());
    })
})