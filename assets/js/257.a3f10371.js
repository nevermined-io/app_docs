"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[257],{257:e=>{e.exports=JSON.parse('{"name":"AaveCollateralWithdrawCondition","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"_conditionId","type":"bytes32"}],"name":"Fulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CONDITION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x15c87f85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"abortByTimeOut","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function","signature":"0x1ce19185"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_collateralAsset","type":"address"}],"name":"fulfill","outputs":[{"internalType":"enum ConditionStoreLibrary.ConditionState","name":"","type":"uint8"}],"stateMutability":"payable","type":"function","signature":"0x70457337"},{"inputs":[{"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"internalType":"bytes32","name":"_valueHash","type":"bytes32"}],"name":"generateId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xcb4e57e8"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"address","name":"_vaultAddress","type":"address"},{"internalType":"address","name":"_collateralAsset","type":"address"}],"name":"hashValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0xf7bebc88"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_conditionStoreManagerAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x485cc955"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b506112c1806100206000396000f3fe6080604052600436106100ce5760003560e01c806315c87f85146100d357806316279055146101085780631ce1918514610139578063485cc95514610166578063572b6c05146101885780635ced058e146101a85780635ea3ab85146101d35780636fd902e1146101f35780637045733714610206578063715018a61461021957806382c947b71461022e5780638da5cb5b14610255578063ab9de2301461026a578063cb4e57e81461027f578063ce1b815f146102cc578063f2fde38b146102e1578063f7bebc8814610301575b600080fd5b3480156100df57600080fd5b506100f560008051602061126c83398151915281565b6040519081526020015b60405180910390f35b34801561011457600080fd5b50610129610123366004610e23565b3b151590565b60405190151581526020016100ff565b34801561014557600080fd5b50610159610154366004610e40565b610321565b6040516100ff9190610e91565b34801561017257600080fd5b50610186610181366004610e9f565b61045c565b005b34801561019457600080fd5b506101296101a3366004610e23565b6105db565b3480156101b457600080fd5b506101c66101c3366004610e40565b90565b6040516100ff9190610ed8565b3480156101df57600080fd5b506100f56101ee366004610f02565b610600565b3480156101ff57600080fd5b50436100f5565b610159610214366004610fbf565b61064f565b34801561022557600080fd5b506101866109b9565b34801561023a57600080fd5b506100f5610249366004610e23565b6001600160a01b031690565b34801561026157600080fd5b506101c66109cd565b34801561027657600080fd5b506101c66109dc565b34801561028b57600080fd5b506100f561029a366004611009565b604080516020808201949094523081830152606080820193909352815180820390930183526080019052805191012090565b3480156102d857600080fd5b506101c6610a71565b3480156102ed57600080fd5b506101866102fc366004610e23565b610afc565b34801561030d57600080fd5b506100f561031c36600461102b565b610b75565b606554604051636ed93cc560e01b8152600481018390526000916001600160a01b031690636ed93cc590602401602060405180830381865afa15801561036b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038f919061106d565b6103e05760405162461bcd60e51b815260206004820152601f60248201527f436f6e646974696f6e206e6565647320746f2062652074696d6564206f75740060448201526064015b60405180910390fd5b60655460405163295e072360e11b81526001600160a01b03909116906352bc0e469061041390859060039060040161108f565b6020604051808303816000875af1158015610432573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045691906110b7565b92915050565b600054610100900460ff161580801561047c5750600054600160ff909116105b806104965750303b158015610496575060005460ff166001145b6104f95760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103d7565b6000805460ff19166001179055801561051c576000805461ff0019166101001790555b6001600160a01b0382166105645760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016103d7565b61056c610bd0565b61057583610afc565b606580546001600160a01b0319166001600160a01b03841617905580156105d6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60006105e5610a71565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b835181101561064857838181518110610621576106216110d2565b60200260200101518261063491906110fe565b91508061064081611111565b915050610606565b5092915050565b6000610659610bff565b826001600160a01b03811663709b8961610671610c58565b6040518263ffffffff1660e01b815260040161068d9190610ed8565b602060405180830381865afa1580156106aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ce919061106d565b6107085760405162461bcd60e51b815260206004820152600b60248201526a27b7363c903632b73232b960a91b60448201526064016103d7565b600080606560009054906101000a90046001600160a01b03166001600160a01b0316632934a0ee846001600160a01b031663c765b8e26040518163ffffffff1660e01b8152600401602060405180830381865afa15801561076d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610791919061112a565b6040518263ffffffff1660e01b81526004016107af91815260200190565b60a060405180830381865afa1580156107cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f09190611143565b50929450909250600291506108029050565b81600381111561081457610814610e59565b1461086f5760405162461bcd60e51b815260206004820152602560248201527f526570617920436f6e646974696f6e206e6565647320746f2062652046756c666044820152641a5b1b195960da1b60648201526084016103d7565b826001600160a01b031663679c4de186856001600160a01b031663bcead63e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e19190611193565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401600060405180830381600087803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b5050505060006109528961029a8a8a8a610b75565b905060006109a08260028b6040518060400160405280601f81526020017f41617665436f6c6c61746572616c5769746864726177436f6e646974696f6e0081525061099b610c58565b610c62565b955050505050506109b16001606655565b949350505050565b6109c1610ce8565b6109cb6000610d57565b565b6033546001600160a01b031690565b6065546000906001600160a01b03166109f55750600090565b606560009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6c9190611193565b905090565b600080610a7c6109dc565b90506001600160a01b038116610a9457600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af69190611193565b91505090565b610b04610ce8565b6001600160a01b038116610b695760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d7565b610b7281610d57565b50565b6040805160008051602061126c83398151915260208201529081018490526001600160a01b0380841660608301528216608082015260009060a0016040516020818303038152906040528051906020012090505b9392505050565b600054610100900460ff16610bf75760405162461bcd60e51b81526004016103d7906111b0565b6109cb610da9565b600260665403610c515760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103d7565b6002606655565b6000610a6c610de0565b60655460405163d1a8ae8160e01b81526000916001600160a01b03169063d1a8ae8190610c9b9089908890889088908c906004016111fb565b6020604051808303816000875af1158015610cba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cde91906110b7565b9695505050505050565b610cf0610c58565b6001600160a01b0316610d016109cd565b6001600160a01b0316146109cb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103d7565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610dd05760405162461bcd60e51b81526004016103d7906111b0565b6109cb610ddb610c58565b610d57565b600060143610801590610df75750610df7336105db565b15610e09575060131936013560601c90565b503390565b6001600160a01b0381168114610b7257600080fd5b600060208284031215610e3557600080fd5b8135610bc981610e0e565b600060208284031215610e5257600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60048110610e8d57634e487b7160e01b600052602160045260246000fd5b9052565b602081016104568284610e6f565b60008060408385031215610eb257600080fd5b8235610ebd81610e0e565b91506020830135610ecd81610e0e565b809150509250929050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215610f1557600080fd5b82356001600160401b0380821115610f2c57600080fd5b818501915085601f830112610f4057600080fd5b813581811115610f5257610f52610eec565b8060051b604051601f19603f83011681018181108582111715610f7757610f77610eec565b604052918252848201925083810185019188831115610f9557600080fd5b938501935b82851015610fb357843584529385019392850192610f9a565b98975050505050505050565b60008060008060808587031215610fd557600080fd5b84359350602085013592506040850135610fee81610e0e565b91506060850135610ffe81610e0e565b939692955090935050565b6000806040838503121561101c57600080fd5b50508035926020909101359150565b60008060006060848603121561104057600080fd5b83359250602084013561105281610e0e565b9150604084013561106281610e0e565b809150509250925092565b60006020828403121561107f57600080fd5b81518015158114610bc957600080fd5b82815260408101610bc96020830184610e6f565b8051600481106110b257600080fd5b919050565b6000602082840312156110c957600080fd5b610bc9826110a3565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610456576104566110e8565b600060018201611123576111236110e8565b5060010190565b60006020828403121561113c57600080fd5b5051919050565b600080600080600060a0868803121561115b57600080fd5b855161116681610e0e565b9450611174602087016110a3565b6040870151606088015160809098015196999198509695945092505050565b6000602082840312156111a557600080fd5b8151610bc981610e0e565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b85815260006020868184015260a0604084015285518060a085015260005b818110156112355787810183015185820160c001528201611219565b50600060c0828601015260c0601f19601f8301168501019250505060018060a01b0384166060830152610cde6080830184610e6f56feb862fd8b3cfd8de2573921377aa850f87e20369faed56b30213c873595f77affa26469706673582212205d78f084ad632b47f66920bdec2e080af19e004523739d91f948a54e1038e82d64736f6c63430008110033","address":"0xB2F252186Ea64Ab53d592948441bB58431932812","implementation":"0xB2F252186Ea64Ab53d592948441bB58431932812","version":"v3.0.0","libraries":{}}')}}]);