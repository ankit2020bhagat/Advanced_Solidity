const { ethers } = require("hardhat");

describe("Advanced Mapping:", function () {
    let deployContract,owner,addresses
    it("Contract Deployment ", async function () {
        const mappingContract = await ethers.getContractFactory("advMapping");
        deployContract = await mappingContract.deploy();
        await deployContract.deployed();
        console.log("Contract addresss:", deployContract.address);
    })

    it("Calling set_function ", async function () {
         [owner, ...addresses] = await ethers.getSigners();
        console.log("owner Address ", owner.address);
        console.log("Address at 0", addresses[0].address);
        console.log("Address at 1", addresses[1].address);
        let txn_set = await deployContract.set("Ankit", 23, owner.address, 3);
        await txn_set.wait();
        txn_set= await deployContract.connect(addresses[1]).set("kumar",23,addresses[1].address,4);
        await txn_set.wait();
        console.log(`Donor details :${owner.address} ${await deployContract.account_info(addresses[1].address)}`);
        console.log(`Donor details :${owner.address} ${await deployContract.account_info(owner.address)}`);
 
    });
    it("Calling Delete function",async function(){
        const txn_Delete=await deployContract.connect(owner).Delete();
        await txn_Delete.wait();
        console.log(txn_Delete);
        console.log(`Donor details :${owner.address} ${await deployContract.account_info(owner.address)}`);
 

    })
})