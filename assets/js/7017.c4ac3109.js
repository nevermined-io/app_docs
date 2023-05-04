"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[7017],{7017:e=>{e.exports=JSON.parse('{"name":"AccessCondition","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_grantee","type":"address"},{"indexed":false,"internalType":"bytes32","name":"_conditionId","type":"bytes32"}],"name":"Fulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CONDITION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x15c87f85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"}],"name":"checkPermissions","outputs":[{"internalType":"bool","name":"permissionGranted","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xb36a9a7c"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"internalType":"address","name":"_grantee","type":"address"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0xd9250da4"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"}],"name":"grantPermission","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf38a8262"},{"inputs":[{"internalType":"bytes32","name":"_documentId","type":"bytes32"},{"internalType":"address","name":"_grantee","type":"address"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0xeea0a725"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc0c53b8b"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"reinitialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6c2eb350"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_grantee","type":"address"},{"internalType":"bytes32","name":"_documentId","type":"bytes32"}],"name":"renouncePermission","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8a34ce5e"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b5061137b806100206000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806315c87f851461010c57806316279055146101465780631ce191851461016a578063572b6c051461018a5780635ced058e1461019d5780635ea3ab85146101c65780636c2eb350146101d95780636fd902e1146101e3578063715018a6146101e957806382c947b7146101f15780638a34ce5e1461020b5780638da5cb5b1461021e578063ab9de23014610226578063b36a9a7c1461022e578063c0c53b8b14610241578063cb4e57e814610254578063ce1b815f14610267578063d9250da41461026f578063eea0a72514610282578063f2fde38b14610295578063f38a8262146102a8575b600080fd5b6101337f159441aea596428df1738c5e8eebb39409244587a3850167d1efcddd44c51ff581565b6040519081526020015b60405180910390f35b61015a610154366004610ed5565b3b151590565b604051901515815260200161013d565b61017d610178366004610ef2565b6102bb565b60405161013d9190610f2d565b61015a610198366004610ed5565b6103f6565b6101ae6101ab366004610ef2565b90565b6040516001600160a01b03909116815260200161013d565b6101336101d4366004610f51565b61041b565b6101e161046a565b005b43610133565b6101e161057c565b6101336101ff366004610ed5565b6001600160a01b031690565b6101e161021936600461100e565b610590565b6101ae610657565b6101ae610666565b61015a61023c36600461100e565b6106fb565b6101e161024f36600461103a565b61089a565b610133610262366004611085565b610a0b565b6101ae610a4a565b61017d61027d3660046110a7565b610ad5565b6101336102903660046110d5565b610b81565b6101e16102a3366004610ed5565b610b96565b6101e16102b636600461100e565b610c0f565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc590602401602060405180830381865afa158015610305573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103299190611105565b61037a5760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e46906103ad908590600390600401611127565b6020604051808303816000875af11580156103cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f0919061113b565b92915050565b6000610400610a4a565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b83518110156104635783818151811061043c5761043c61115c565b60200260200101518261044f9190611188565b91508061045b8161119b565b915050610421565b5092915050565b600054600290610100900460ff1615801561048c575060005460ff8083169116105b6104a85760405162461bcd60e51b8152600401610371906111b4565b6000805461ffff191660ff8316176101001790556067546040805163579e6e3f60e01b815290516001600160a01b039092169163579e6e3f916004808201926020929091908290030181865afa158015610506573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052a9190611202565b606880546001600160a01b0319166001600160a01b03929092169190911790556000805461ff001916905560405160ff821681526000805160206113268339815191529060200160405180910390a150565b610584610cdb565b61058e6000610d4a565b565b60685481906001600160a01b03166349791a91826105ac610d9c565b6040518363ffffffff1660e01b81526004016105c992919061121f565b602060405180830381865afa1580156105e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060a9190611105565b6106265760405162461bcd60e51b815260040161037190611236565b5060009081526066602090815260408083206001600160a01b0390941683526001909301905220805460ff19169055565b6033546001600160a01b031690565b6065546000906001600160a01b031661067f5750600090565b606560009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190611202565b905090565b606854604051633c6aa7b760e01b81526000916001600160a01b031690633c6aa7b79061072e908590879060040161121f565b602060405180830381865afa15801561074b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076f9190611105565b806107ea57506068546040516331c51c0360e21b81526001600160a01b038581166004830152602482018590529091169063c714700c90604401602060405180830381865afa1580156107c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ea9190611105565b8061081a575060008281526066602090815260408083206001600160a01b038716845260010190915290205460ff165b8061089357506068546040516360d6c7cf60e01b81526001600160a01b03909116906360d6c7cf90610852908590879060040161121f565b602060405180830381865afa15801561086f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108939190611105565b9392505050565b600054610100900460ff16158080156108ba5750600054600160ff909116105b806108d45750303b1580156108d4575060005460ff166001145b6108f05760405162461bcd60e51b8152600401610371906111b4565b6000805460ff191660011790558015610913576000805461ff0019166101001790555b61091b610da6565b61092484610b96565b606580546001600160a01b038086166001600160a01b0319928316179092556067805492851692909116821790556040805163579e6e3f60e01b8152905163579e6e3f916004808201926020929091908290030181865afa15801561098d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b19190611202565b606880546001600160a01b0319166001600160a01b03929092169190911790558015610a05576000805461ff0019169055604051600181526000805160206113268339815191529060200160405180910390a15b50505050565b60408051602081018490523091810191909152606081018290526000906080015b60405160208183030381529060405280519060200120905092915050565b600080610a55610666565b90506001600160a01b038116610a6d57600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf9190611202565b91505090565b6000610ae18284610c0f565b6000610af1856102628686610b81565b90506000610b31826002876040518060400160405280600f81526020016e20b1b1b2b9b9a1b7b73234ba34b7b760891b815250610b2c610d9c565b610dd5565b9050836001600160a01b031685877f6855f7a98b24193f81092c1736cdb5bd7e647de52ca83d767d735c3735ddb2d285604051610b7091815260200190565b60405180910390a495945050505050565b60008282604051602001610a2c92919061121f565b610b9e610cdb565b6001600160a01b038116610c035760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610371565b610c0c81610d4a565b50565b60685481906001600160a01b03166349791a9182610c2b610d9c565b6040518363ffffffff1660e01b8152600401610c4892919061121f565b602060405180830381865afa158015610c65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c899190611105565b610ca55760405162461bcd60e51b815260040161037190611236565b5060009081526066602090815260408083206001600160a01b03909416835260019384019091529020805460ff19169091179055565b610ce3610d9c565b6001600160a01b0316610cf4610657565b6001600160a01b03161461058e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610371565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006106f6610e5b565b600054610100900460ff16610dcd5760405162461bcd60e51b81526004016103719061126a565b61058e610e89565b60655460405163d1a8ae8160e01b81526000916001600160a01b03169063d1a8ae8190610e0e9089908890889088908c906004016112b5565b6020604051808303816000875af1158015610e2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e51919061113b565b9695505050505050565b600060143610801590610e725750610e72336103f6565b15610e84575060131936013560601c90565b503390565b600054610100900460ff16610eb05760405162461bcd60e51b81526004016103719061126a565b61058e610ebb610d9c565b610d4a565b6001600160a01b0381168114610c0c57600080fd5b600060208284031215610ee757600080fd5b813561089381610ec0565b600060208284031215610f0457600080fd5b5035919050565b60048110610f2957634e487b7160e01b600052602160045260246000fd5b9052565b602081016103f08284610f0b565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610f6457600080fd5b82356001600160401b0380821115610f7b57600080fd5b818501915085601f830112610f8f57600080fd5b813581811115610fa157610fa1610f3b565b8060051b604051601f19603f83011681018181108582111715610fc657610fc6610f3b565b604052918252848201925083810185019188831115610fe457600080fd5b938501935b8285101561100257843584529385019392850192610fe9565b98975050505050505050565b6000806040838503121561102157600080fd5b823561102c81610ec0565b946020939093013593505050565b60008060006060848603121561104f57600080fd5b833561105a81610ec0565b9250602084013561106a81610ec0565b9150604084013561107a81610ec0565b809150509250925092565b6000806040838503121561109857600080fd5b50508035926020909101359150565b6000806000606084860312156110bc57600080fd5b8335925060208401359150604084013561107a81610ec0565b600080604083850312156110e857600080fd5b8235915060208301356110fa81610ec0565b809150509250929050565b60006020828403121561111757600080fd5b8151801515811461089357600080fd5b828152604081016108936020830184610f0b565b60006020828403121561114d57600080fd5b81516004811061089357600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103f0576103f0611172565b6000600182016111ad576111ad611172565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60006020828403121561121457600080fd5b815161089381610ec0565b9182526001600160a01b0316602082015260400190565b6020808252601a908201527924b73b30b634b2102224a21037bbb732b917b83937bb34b232b960311b604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b85815260006020868184015260a0604084015285518060a085015260005b818110156112ef5787810183015185820160c0015282016112d3565b50600060c0828601015260c0601f19601f8301168501019250505060018060a01b0384166060830152610e516080830184610f0b56fe7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498a2646970667358221220617122b15a28d1c11dcae50b6618fca0b6eea7f188648d7150b308d6fbcfbb8c64736f6c63430008110033","address":"0x8b6EC38C2AbEEA38295b8800BB55eAA7972B2bb8","implementation":"0x8b6EC38C2AbEEA38295b8800BB55eAA7972B2bb8","version":"v3.0.0","libraries":{}}')}}]);