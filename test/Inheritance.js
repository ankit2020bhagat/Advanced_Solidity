const {ethers} = require("hardhat");

describe.only("Contract A",function (){
    let deployContract;
    it("Contract A deployment",async function(){
       const Contract_A = await ethers.getContractFactory("A");
       deployContract = await Contract_A.deploy();
       await deployContract.deployed();
       console.log("Contract A Address :",await deployContract.address);
    })
})