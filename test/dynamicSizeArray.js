const {ethers} = require("hardhat");

describe("dynamicSizeArray",function(){
    let contract;
    it("contract deployement",async function(){
        const ArratContract = await ethers.getContractFactory("dynamicSizeArray");
         contract=await ArratContract.deploy();
        await contract.deployed();
        console.log("Contract Address: ",contract.address);
       
    })
    it("Calling Array function ",async function(){
        console.log("Array :",await contract.getArray());
        const txn_Arrayfunction= await contract.Arrayfunction();
        await txn_Arrayfunction.wait();
        console.log("at index 4",await contract.temp());
        console.log("Array length: ",await contract.len());
        console.log("Array :",await contract.getArray());

    }) 
})