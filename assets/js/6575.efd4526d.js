"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6575],{16575:e=>{e.exports=JSON.parse('{"name":"Dispenser","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"uint256","name":"minPeriod","type":"uint256"}],"name":"RequestFrequencyExceeded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxAmount","type":"uint256"}],"name":"RequestLimitExceeded","type":"event"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x485cc955"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"requestTokens","outputs":[{"internalType":"bool","name":"tokensTransferred","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xeef9c27c"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxAmount","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4fe47f70"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x088a4ed0"},{"inputs":[{"internalType":"uint256","name":"period","type":"uint256"}],"name":"setMinPeriod","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf8210769"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract NeverminedToken","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xfc0c546a"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50610a5e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c8063088a4ed014610088578063485cc9551461009d5780634fe47f70146100b0578063715018a6146100c35780638da5cb5b146100cb578063eef9c27c146100f0578063f2fde38b14610113578063f821076914610126578063fc0c546a14610139575b600080fd5b61009b610096366004610798565b61014c565b005b61009b6100ab3660046107cd565b610168565b61009b6100be366004610798565b610370565b61009b61038c565b6100d36103a0565b6040516001600160a01b0390911681526020015b60405180910390f35b6101036100fe366004610798565b6103af565b60405190151581526020016100e7565b61009b610121366004610800565b6105e1565b61009b610134366004610798565b61065a565b606b546100d3906001600160a01b031681565b610154610667565b606a546101629082906106c6565b60685550565b600054610100900460ff16158080156101885750600054600160ff909116105b806101a25750303b1580156101a2575060005460ff166001145b61020a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801561022d576000805461ff0019166101001790555b826001600160a01b0381166102545760405162461bcd60e51b81526004016102019061081b565b61025c6106db565b610265836105e1565b6000606655606b80546001600160a01b0319166001600160a01b0386169081179091556040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa1580156102c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e79190610861565b6102f59060ff16600a610985565b606a819055610307906103e8906106c6565b6067556000606955606a54610321906305f5e100906106c6565b60685550801561036b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b610378610667565b606a546103869082906106c6565b60675550565b610394610667565b61039e600061070a565b565b6033546001600160a01b031690565b600033806103cf5760405162461bcd60e51b81526004016102019061081b565b60006103e6606a54856106c690919063ffffffff16565b9050606854606654826103f99190610991565b1061043f5760405162461bcd60e51b8152602060048201526016602482015275115e18d959591959081b585e135a5b9d105b5bdd5b9d60521b6044820152606401610201565b6069543360009081526065602052604090205461045c9190610991565b4210156104a65760695460405190815233907f5fc1aee0cb9820976755a7c88bb366506eba3eaa69cdbf057e50a893c07f3ddf906020015b60405180910390a260009250506105db565b6067548111156104ec5760675460408051868152602081019290925233917f6ba017f04268af016965afed4b76d07ee8b8d2822593b565af060c914e015d409101610494565b33600090815260656020526040902042905560665461050b908261075c565b606655606b546001600160a01b03166340c10f19336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af115801561056d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059191906109a4565b6105d55760405162461bcd60e51b81526020600482015260156024820152742a37b5b2b71036b4b73a34b733903330b4b632b21760591b6044820152606401610201565b60019250505b50919050565b6105e9610667565b6001600160a01b03811661064e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610201565b6106578161070a565b50565b610662610667565b606955565b336106706103a0565b6001600160a01b03161461039e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610201565b60006106d282846109c6565b90505b92915050565b600054610100900460ff166107025760405162461bcd60e51b8152600401610201906109dd565b61039e610768565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006106d28284610991565b600054610100900460ff1661078f5760405162461bcd60e51b8152600401610201906109dd565b61039e3361070a565b6000602082840312156107aa57600080fd5b5035919050565b80356001600160a01b03811681146107c857600080fd5b919050565b600080604083850312156107e057600080fd5b6107e9836107b1565b91506107f7602084016107b1565b90509250929050565b60006020828403121561081257600080fd5b6106d2826107b1565b60208082526026908201527f697356616c696441646472657373206661696c65642c204164647265737320696040820152653990183c181760d11b606082015260800190565b60006020828403121561087357600080fd5b815160ff8116811461088457600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156108dc5781600019048211156108c2576108c261088b565b808516156108cf57918102915b93841c93908002906108a6565b509250929050565b6000826108f3575060016106d5565b81610900575060006106d5565b816001811461091657600281146109205761093c565b60019150506106d5565b60ff8411156109315761093161088b565b50506001821b6106d5565b5060208310610133831016604e8410600b841016171561095f575081810a6106d5565b61096983836108a1565b806000190482111561097d5761097d61088b565b029392505050565b60006106d283836108e4565b808201808211156106d5576106d561088b565b6000602082840312156109b657600080fd5b8151801515811461088457600080fd5b80820281158282048414176106d5576106d561088b565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212208c4a586ffe3d09ec2c79cce94aece4b02c1d32627766a32ab782829b2cfec73964736f6c63430008110033","address":"0x4DC0D4248907176e42948D9588B32295ce1D44D9","implementation":"0x4DC0D4248907176e42948D9588B32295ce1D44D9","version":"v3.0.0","libraries":{}}')}}]);