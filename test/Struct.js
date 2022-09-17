const {ethers} = require("hardhat");

describe("Struct ",function(){
    let deployContract;
    it("Contract Deployement: ",async function(){
      const structContract = await ethers.getContractFactory("Struct");
      deployContract = await structContract.deploy();

      await deployContract.deployed();

      console.log("Contract Address :",deployContract.address);

     
    })
    it("Calling setValues ",async function(){
        await deployContract.setValues();

        console.log("printing Values ",await deployContract.emp());

        console.log("present at index 1",await deployContract.emps(0));

        console.log("present at index 2",await deployContract.emps(1));

        console.log("present at index 3",await deployContract.emps(2));

      })
})