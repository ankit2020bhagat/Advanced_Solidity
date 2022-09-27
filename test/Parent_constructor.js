const { ethers } = require("hardhat");

describe("Passing a parameter to a Parent constructor:", function () {
    let deployContract;

    it("Deploying Contract A1:", async function () {
        const Parent_Contract = await ethers.getContractFactory("A1");
        deployContract = await Parent_Contract.deploy("bhagat", 24);
        await deployContract.deployed();
        console.log("Contract Address A1:", deployContract.address);
    });

    it("Calling A's attribute", async function () {
        console.log("Name ", await deployContract.name());
        console.log("Age ", await deployContract.age());
    })

    it("Deploying Contract B1:", async function () {
        const Parent_Contract = await ethers.getContractFactory("B1");
        deployContract = await Parent_Contract.deploy("Mumbai", 124556);
        await deployContract.deployed();
        console.log("Contract Address B1:", deployContract.address);
    });

    it("Calling B's attribute", async function () {
        console.log("Address ", await deployContract.add());
        console.log("Salary ", await deployContract.salary());
    })



    it("Deploying Contrct C1:", async function () {
        const Parent_Contract = await ethers.getContractFactory("C1");
        deployContract = await Parent_Contract.deploy();
        await deployContract.deployed();
        console.log("Contract Address C1:", deployContract.address);
    });

    it("Calling A's attribute after C1 deployment", async function () {
        console.log("Name ", await deployContract.name());
        console.log("Age ", await deployContract.age());
    })
    it("Calling B's attribute after C1 deployment", async function () {
        console.log("Address ", await deployContract.add());
        console.log("Salary ", await deployContract.salary());
    })

    it("Deploying Contrct D1:", async function () {
        const Parent_Contract = await ethers.getContractFactory("D1");
        deployContract = await Parent_Contract.deploy();
        await deployContract.deployed();
        console.log("Contract Address D1:", deployContract.address);
    });

    it("Calling A's attribute after D1 deployment", async function () {
        console.log("Name ", await deployContract.name());
        console.log("Age ", await deployContract.age());
    })
    it("Calling B's attribute after D1 deployment", async function () {
        console.log("Address ", await deployContract.add());
        console.log("Salary ", await deployContract.salary());
    })
})