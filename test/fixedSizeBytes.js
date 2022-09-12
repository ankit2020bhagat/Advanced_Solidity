
const {ethers} = require("hardhat");

describe("Fixed_Size_Bytes",function(){
    let deployContract;
    it("Contract Dployment",async function(){
        const ByesContract = await ethers.getContractFactory("fixedSizeBytes");
        deployContract=await ByesContract.deploy();
        await deployContract.deployed();
        console.log("Contract Address :",deployContract.address);
    })
    it("Calling Setfunction :",async function(){
        const txn_setBytes=await deployContract.setBytes();
       // await txn_setBytes.wait();
        console.log(" get bytes :",await deployContract.getBytes())

        console.log("Get Length :",await deployContract.getByteslength());

    
    })
})