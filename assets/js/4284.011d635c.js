"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[4284],{4284:e=>{e.exports=JSON.parse('{"name":"NeverminedConfig","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_whoChanged","type":"address"},{"indexed":true,"internalType":"bytes32","name":"_parameter","type":"bytes32"}],"name":"NeverminedConfigChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xa217fddf"},{"inputs":[],"name":"GOVERNOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0xccc57490"},{"inputs":[],"name":"feeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xb3f00674"},{"inputs":[],"name":"getFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xe8a35392"},{"inputs":[],"name":"getMarketplaceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x26a7b37b"},{"inputs":[],"name":"getProvenanceStorage","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x3b7f8923"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x248a9ca3"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f2ff15d"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x91d14854"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_governor","type":"address"},{"internalType":"bool","name":"_provenanceOff","type":"bool"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe4bbb5a8"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0xe43581b8"},{"inputs":[],"name":"marketplaceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6a166964"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"provenanceOff","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x83859d57"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x36568abe"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd547741f"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setGovernor","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc42cf535"},{"inputs":[{"internalType":"uint256","name":"_marketplaceFee","type":"uint256"},{"internalType":"address","name":"_feeReceiver","type":"address"}],"name":"setMarketplaceFees","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaa32ed60"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"setTrustedForwarder","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xda742228"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"trustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x7da0a877"}],"bytecode":"0x608060405234801561001057600080fd5b50610fe8806100206000396000f3fe608060405234801561001057600080fd5b50600436106101285760003560e01c806301ffc9a71461012d578063248a9ca31461015557806326a7b37b146101765780632f2ff15d1461017e57806336568abe146101935780633b7f8923146101a65780636a166964146101b9578063715018a6146101c25780637da0a877146101ca57806383859d57146101f55780638da5cb5b1461020957806391d1485414610211578063a217fddf14610224578063aa32ed601461022c578063b3f006741461023f578063c42cf53514610252578063ccc5749014610265578063ce1b815f1461027a578063d547741f1461028b578063da7422281461029e578063e43581b8146102b1578063e4bbb5a8146102c4578063e8a35392146102d7578063f2fde38b146102e8575b600080fd5b61014061013b366004610cb5565b6102fb565b60405190151581526020015b60405180910390f35b610168610163366004610cdf565b610332565b60405190815260200161014c565b60c954610168565b61019161018c366004610d14565b610347565b005b6101916101a1366004610d14565b610368565b60ca54600160a01b900460ff1615610140565b61016860c95481565b6101916103eb565b60cb546101dd906001600160a01b031681565b6040516001600160a01b03909116815260200161014c565b60ca5461014090600160a01b900460ff1681565b6101dd6103ff565b61014061021f366004610d14565b61040e565b610168600081565b61019161023a366004610d14565b610439565b60ca546101dd906001600160a01b031681565b610191610260366004610d40565b6105ea565b610168600080516020610f7383398151915281565b60cb546001600160a01b03166101dd565b610191610299366004610d14565b61060d565b6101916102ac366004610d40565b610629565b6101406102bf366004610d40565b610681565b6101916102d2366004610d5b565b61069b565b60ca546001600160a01b03166101dd565b6101916102f6366004610d40565b6107fa565b60006001600160e01b03198216637965db0b60e01b148061032c57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60009081526097602052604090206001015490565b61035082610332565b61035981610870565b610363838361087a565b505050565b6001600160a01b03811633146103dd5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103e78282610900565b5050565b6103f3610967565b6103fd60006109c6565b565b6033546001600160a01b031690565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b33610452600080516020610f738339815191528261040e565b61046e5760405162461bcd60e51b81526004016103d490610da7565b620f42408311156104e15760405162461bcd60e51b815260206004820152603760248201527f4e657665726d696e6564436f6e6669673a20466565206d7573742062652062656044820152761d1dd9595b880c08185b99080c4c0c081c195c98d95b9d604a1b60648201526084016103d4565b821561054f576001600160a01b03821661054f5760405162461bcd60e51b815260206004820152602960248201527f4e657665726d696e6564436f6e6669673a2052656365697665722063616e206e60448201526806f74206265203078360bc1b60648201526084016103d4565b60c983905560ca80546001600160a01b0319166001600160a01b0384161790556040517fee265260b6f7400b6f80ca3c64267ab53846ce48af5bef74bf25f5cae0d58edb903390600080516020610f9383398151915290600090a36040517f389e7cbf003e878980985f1a72c90dbe5b79c41a44fb160ac26b4fef395d0916903390600080516020610f9383398151915290600090a3505050565b6105f2610967565b61060a600080516020610f738339815191528261087a565b50565b61061682610332565b61061f81610870565b6103638383610900565b33610642600080516020610f738339815191528261040e565b61065e5760405162461bcd60e51b81526004016103d490610da7565b5060cb80546001600160a01b0319166001600160a01b0392909216919091179055565b600061032c600080516020610f738339815191528361040e565b600054610100900460ff16158080156106bb5750600054600160ff909116105b806106d55750303b1580156106d5575060005460ff166001145b6107385760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103d4565b6000805460ff19166001179055801561075b576000805461ff0019166101001790555b610763610a18565b61076c846107fa565b610774610a47565b61077f600085610a6e565b610797600080516020610f7383398151915284610a6e565b60ca805460ff60a01b1916600160a01b8415150217905580156107f4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b610802610967565b6001600160a01b0381166108675760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d4565b61060a816109c6565b61060a8133610a78565b610884828261040e565b6103e75760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556108bc3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61090a828261040e565b156103e75760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b336109706103ff565b6001600160a01b0316146103fd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103d4565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610a3f5760405162461bcd60e51b81526004016103d490610dde565b6103fd610ad1565b600054610100900460ff166103fd5760405162461bcd60e51b81526004016103d490610dde565b6103e7828261087a565b610a82828261040e565b6103e757610a8f81610b01565b610a9a836020610b13565b604051602001610aab929190610e4d565b60408051601f198184030181529082905262461bcd60e51b82526103d491600401610ebc565b600054610100900460ff16610af85760405162461bcd60e51b81526004016103d490610dde565b6103fd336109c6565b606061032c6001600160a01b03831660145b60606000610b22836002610f05565b610b2d906002610f1c565b6001600160401b03811115610b4457610b44610f2f565b6040519080825280601f01601f191660200182016040528015610b6e576020820181803683370190505b509050600360fc1b81600081518110610b8957610b89610f45565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610bb857610bb8610f45565b60200101906001600160f81b031916908160001a9053506000610bdc846002610f05565b610be7906001610f1c565b90505b6001811115610c5f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610c1b57610c1b610f45565b1a60f81b828281518110610c3157610c31610f45565b60200101906001600160f81b031916908160001a90535060049490941c93610c5881610f5b565b9050610bea565b508315610cae5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103d4565b9392505050565b600060208284031215610cc757600080fd5b81356001600160e01b031981168114610cae57600080fd5b600060208284031215610cf157600080fd5b5035919050565b80356001600160a01b0381168114610d0f57600080fd5b919050565b60008060408385031215610d2757600080fd5b82359150610d3760208401610cf8565b90509250929050565b600060208284031215610d5257600080fd5b610cae82610cf8565b600080600060608486031215610d7057600080fd5b610d7984610cf8565b9250610d8760208501610cf8565b915060408401358015158114610d9c57600080fd5b809150509250925092565b6020808252601f908201527f4e657665726d696e6564436f6e6669673a204f6e6c7920676f7665726e6f7200604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b83811015610e44578181015183820152602001610e2c565b50506000910152565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351610e7f816017850160208801610e29565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610eb0816028840160208801610e29565b01602801949350505050565b6020815260008251806020840152610edb816040850160208701610e29565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761032c5761032c610eef565b8082018082111561032c5761032c610eef565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610f6a57610f6a610eef565b50600019019056fe84dc795734050671741a791b768e85599401a837fc8df342a6e85d5dd29f8dad3b507973096b005f8c3169023d77692d542071db559c003da6fe0ef6c679c47da2646970667358221220e1bcf2938fa1e3970a49b2845b7f857a2ec320423229beb587500c9bfc09717564736f6c63430008110033","address":"0x92606482c8358bC1B4e423a2522deDce9d44F72E","implementation":"0xD652Ec5Ea8Fd1Ee648b12560FEB98D46B4C6c950","version":"v3.0.0","libraries":{}}')}}]);