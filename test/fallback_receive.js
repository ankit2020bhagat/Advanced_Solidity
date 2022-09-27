const {ethers} = require("hardhat");

describe.only("Fallback and Receive",function(){
    let deployContract;
    it("Contract deployement :",async function(){
       const FallbackContract = await ethers.getContractFactory("Fallback_Receive");
       deployContract= await FallbackContract.deploy();
       await deployContract.deployed();
       console.log("Contract Address: ",deployContract.address);
    })
})