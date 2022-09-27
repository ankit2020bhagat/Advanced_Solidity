const{ethers} = require("hardhat");

describe("Payable",function(){
    let deployContract,lockedAmount;
    it("contract Ddeployment",async function(){
         lockedAmount = hre.ethers.utils.parseEther("4");
       const payableContract = await ethers.getContractFactory("Payable");
       deployContract= await payableContract.deploy({value:lockedAmount});
       await deployContract.deployed();
       console.log("Contract Address :",deployContract.address);
    })
    it("calling getEther and  Balance function :",async function(){
        console.log("Contract Balance :",await deployContract.getBalance());

        const txngetEther = await deployContract.getEther({value:lockedAmount});

        await txngetEther.wait();

        console.log("Contract Blaance: ",await deployContract.getBalance());
    });
})