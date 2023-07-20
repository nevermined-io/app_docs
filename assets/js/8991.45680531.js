"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8991],{28991:e=>{e.exports=JSON.parse('{"name":"NFTAccessCondition","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_grantee","type":"address"},{"indexed":false,"internalType":"bytes32","name":"_conditionId","type":"bytes32"}],"name":"Fulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"}],"name":"checkPermissions","outputs":[{"internalType":"bool","name":"permissionGranted","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xb36a9a7c"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x70457337"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"internalType":"address","name":"_grantee","type":"address"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0xd9250da4"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"}],"name":"grantPermission","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf38a8262"},{"inputs":[{"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"internalType":"address","name":"_grantee","type":"address"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xeea0a725"},{"inputs":[{"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0xf7bebc88"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"},{"internalType":"address","name":"_didRegistryAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc0c53b8b"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b506111e9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100fc5760003560e01c806316279055146101015780631ce191851461012a578063572b6c051461014a5780635ced058e1461015d5780635ea3ab85146101865780636fd902e1146101a757806370457337146101ad578063715018a6146101c057806382c947b7146101ca5780638da5cb5b146101e4578063ab9de230146101ec578063b36a9a7c146101f4578063c0c53b8b14610207578063cb4e57e81461021a578063ce1b815f1461025a578063d9250da414610262578063eea0a72514610275578063f2fde38b14610288578063f38a82621461029b578063f7bebc88146102ae575b600080fd5b61011561010f366004610d4b565b3b151590565b60405190151581526020015b60405180910390f35b61013d610138366004610d68565b6102c1565b6040516101219190610da3565b610115610158366004610d4b565b6103fc565b61016e61016b366004610d68565b90565b6040516001600160a01b039091168152602001610121565b610199610194366004610dc7565b610421565b604051908152602001610121565b43610199565b61013d6101bb366004610e84565b610470565b6101c8610547565b005b6101996101d8366004610d4b565b6001600160a01b031690565b61016e61055b565b61016e61056a565b610115610202366004610ece565b6105ff565b6101c8610215366004610efa565b610725565b610199610228366004610f45565b604080516020808201949094523081830152606080820193909352815180820390930183526080019052805191012090565b61016e6108c2565b61013d610270366004610f67565b61094d565b610199610283366004610f95565b610973565b6101c8610296366004610d4b565b61098f565b6101c86102a9366004610ece565b610a08565b6101996102bc366004610fc5565b610b01565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc590602401602060405180830381865afa15801561030b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032f9190610fec565b6103805760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e46906103b390859060039060040161100e565b6020604051808303816000875af11580156103d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f69190611022565b92915050565b60006104066108c2565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b83518110156104695783818151811061044257610442611043565b602002602001015182610455919061106f565b91508061046181611082565b915050610427565b5092915050565b60006001600160a01b0382166104985760405162461bcd60e51b81526004016103779061109b565b6104a28385610a08565b60006104b386610228878787610b01565b905060006104f6826002886040518060400160405280601281526020017127232a20b1b1b2b9b9a1b7b73234ba34b7b760711b8152506104f1610b51565b610b5b565b9050846001600160a01b031686887f6855f7a98b24193f81092c1736cdb5bd7e647de52ca83d767d735c3735ddb2d28560405161053591815260200190565b60405180910390a49695505050505050565b61054f610be1565b6105596000610c50565b565b6033546001600160a01b031690565b6065546000906001600160a01b03166105835750600090565b606560009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa91906110c4565b905090565b606754604051633c6aa7b760e01b81526000916001600160a01b031690633c6aa7b79061063290859087906004016110e1565b602060405180830381865afa15801561064f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106739190610fec565b806106ee57506067546040516331c51c0360e21b81526001600160a01b038581166004830152602482018590529091169063c714700c90604401602060405180830381865afa1580156106ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ee9190610fec565b8061071e575060008281526066602090815260408083206001600160a01b038716845260010190915290205460ff165b9392505050565b600054610100900460ff16158080156107455750600054600160ff909116105b8061075f5750303b15801561075f575060005460ff166001145b6107c25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610377565b6000805460ff1916600117905580156107e5576000805461ff0019166101001790555b6001600160a01b0383161580159061080557506001600160a01b03841615155b801561081957506001600160a01b03821615155b6108355760405162461bcd60e51b81526004016103779061109b565b61083d610ca2565b6108468461098f565b606580546001600160a01b038086166001600160a01b031992831617909255606780549285169290911691909117905580156108bc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6000806108cd61056a565b90506001600160a01b0381166108e557600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610923573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094791906110c4565b91505090565b60675460009061096b908590859085906001600160a01b0316610470565b949350505050565b60675460009061071e90849084906001600160a01b0316610b01565b610997610be1565b6001600160a01b0381166109fc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610377565b610a0581610c50565b50565b60675481906001600160a01b03166349791a9182610a24610b51565b6040518363ffffffff1660e01b8152600401610a419291906110e1565b602060405180830381865afa158015610a5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a829190610fec565b610acb5760405162461bcd60e51b815260206004820152601a60248201527924b73b30b634b2102224a21037bbb732b917b83937bb34b232b960311b6044820152606401610377565b5060009081526066602090815260408083206001600160a01b03909416835260019384019091529020805460ff19169091179055565b6000838383604051602001610b32939291909283526001600160a01b03918216602084015216604082015260600190565b6040516020818303038152906040528051906020012090509392505050565b60006105fa610cd1565b60655460405163d1a8ae8160e01b81526000916001600160a01b03169063d1a8ae8190610b949089908890889088908c906004016110f8565b6020604051808303816000875af1158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190611022565b9695505050505050565b610be9610b51565b6001600160a01b0316610bfa61055b565b6001600160a01b0316146105595760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610377565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610cc95760405162461bcd60e51b815260040161037790611168565b610559610cff565b600060143610801590610ce85750610ce8336103fc565b15610cfa575060131936013560601c90565b503390565b600054610100900460ff16610d265760405162461bcd60e51b815260040161037790611168565b610559610d31610b51565b610c50565b6001600160a01b0381168114610a0557600080fd5b600060208284031215610d5d57600080fd5b813561071e81610d36565b600060208284031215610d7a57600080fd5b5035919050565b60048110610d9f57634e487b7160e01b600052602160045260246000fd5b9052565b602081016103f68284610d81565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610dda57600080fd5b82356001600160401b0380821115610df157600080fd5b818501915085601f830112610e0557600080fd5b813581811115610e1757610e17610db1565b8060051b604051601f19603f83011681018181108582111715610e3c57610e3c610db1565b604052918252848201925083810185019188831115610e5a57600080fd5b938501935b82851015610e7857843584529385019392850192610e5f565b98975050505050505050565b60008060008060808587031215610e9a57600080fd5b84359350602085013592506040850135610eb381610d36565b91506060850135610ec381610d36565b939692955090935050565b60008060408385031215610ee157600080fd5b8235610eec81610d36565b946020939093013593505050565b600080600060608486031215610f0f57600080fd5b8335610f1a81610d36565b92506020840135610f2a81610d36565b91506040840135610f3a81610d36565b809150509250925092565b60008060408385031215610f5857600080fd5b50508035926020909101359150565b600080600060608486031215610f7c57600080fd5b83359250602084013591506040840135610f3a81610d36565b60008060408385031215610fa857600080fd5b823591506020830135610fba81610d36565b809150509250929050565b600080600060608486031215610fda57600080fd5b833592506020840135610f2a81610d36565b600060208284031215610ffe57600080fd5b8151801515811461071e57600080fd5b8281526040810161071e6020830184610d81565b60006020828403121561103457600080fd5b81516004811061071e57600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103f6576103f6611059565b60006001820161109457611094611059565b5060010190565b6020808252600f908201526e496e76616c6964206164647265737360881b604082015260600190565b6000602082840312156110d657600080fd5b815161071e81610d36565b9182526001600160a01b0316602082015260400190565b85815260006020868184015260a0604084015285518060a085015260005b818110156111325787810183015185820160c001528201611116565b50600060c0828601015260c0601f19601f8301168501019250505060018060a01b0384166060830152610bd76080830184610d81565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220dee4e4df8ce0eefdfb87369140ddad44c1fcbf8439e16160a6478f96c1d0b7b164736f6c63430008110033","address":"0x118Be6f347d4573d1E616112525a1E0794a669E6","implementation":"0x118Be6f347d4573d1E616112525a1E0794a669E6","version":"v3.0.0","libraries":{}}')}}]);