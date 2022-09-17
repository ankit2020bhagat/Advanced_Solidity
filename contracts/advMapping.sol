//SPDX-License-Identifier: UNLINCENSED

pragma solidity ^0.8.9;

contract advMapping {
    struct donor_dts {
        string name;
        uint256 age;
        address add;
        uint256 amount;
    }
    mapping(address => donor_dts) public account_info;

    function set(
        string memory _name,
        uint256 _age,
        address _add,
        uint256 _amount
    ) external {
        account_info[msg.sender] = donor_dts(
            _name,
            _age,
            _add,
            account_info[msg.sender].amount + _amount
        );
    }

    function Delete() external {
        delete account_info[msg.sender];
    }
}
