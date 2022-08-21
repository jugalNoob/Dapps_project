// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;



contract Funder{



struct Body{

string name_1;

string name_2;


string name_3;


string name_4;


}


mapping(address=>Body)public Hotal;



function Enteraddress(string memory name1 , string memory name2 , string memory name3 , string memory name4)public {



Hotal[msg.sender]=Body(name1 , name2  , name3 , name4);




}

function  delt() public{


delete Hotal[msg.sender];

}

function getUser() public view returns(Body memory ){
        return Hotal[msg.sender];
}



}


//  0xe6B9e233cC0f09b147457dFFA584E6A7d871A64d migrate



//   > contract address:    0xe1987df7334bdD8fb314F1849E074c69bF471522
//    > block number:        8
//    > block timestamp:     1658371343 0x99aAf0f9cB6fd2F17e5E1608c0CED6166b0dbb0E
//    > account:             0x1916b856c2Be0dE2bC14c53070262bce0654C626