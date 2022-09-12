// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Struct{
    struct Emp{
        string Name;
        uint age;
        address acc;
    }

    Emp public emp;

    Emp[] public emps;
  
    function setValues() external {
        Emp memory emp1 = Emp("Ankit",20,0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199);

        emp=emp1;

        Emp memory emp2 = Emp({acc:msg.sender,Name:"kumar",age:23});

        Emp memory emp3;

        emp3.Name="Bhagat";
        emp3.age=34;
        emp3.acc=0xdD2FD4581271e230360230F9337D5c0430Bf44C0;

        emps.push(emp1);
        emps.push(emp2);
        emps.push(emp3);

       // emp.Name="Pratik";

       Emp storage temp_emp=emp;
       temp_emp.Name="Pratik";
    }


}