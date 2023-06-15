"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8114],{8114:e=>{e.exports=JSON.parse('{"name":"DIDSalesTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0xaf640d0f"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_lockConditionAddress","type":"address"},{"internalType":"address","name":"_transferConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1459457a"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611aff806100206000396000f3fe6080604052600436106100e45760003560e01c80631459457a146100e9578063162790551461010b5780632e166f3e146101415780634183e72b14610161578063572b6c05146101815780635ced058e146101a15780635ea3ab85146101d75780636104ff1a146102055780636fd902e1146102185780636ff015ae1461022b578063715018a61461026b57806382c947b7146102805780638da5cb5b146102a757806391a169bf146102bc578063ab9de230146102de578063af640d0f146102f3578063ce1b815f14610307578063f2fde38b1461031c578063f8fe10701461033c575b600080fd5b3480156100f557600080fd5b50610109610104366004610fe3565b61034f565b005b34801561011757600080fd5b5061012c610126366004611054565b3b151590565b60405190151581526020015b60405180910390f35b34801561014d57600080fd5b5061010961015c36600461114c565b61063e565b34801561016d57600080fd5b5061010961017c3660046111e7565b6106e5565b34801561018d57600080fd5b5061012c61019c366004611054565b610700565b3480156101ad57600080fd5b506101bf6101bc366004611295565b90565b6040516001600160a01b039091168152602001610138565b3480156101e357600080fd5b506101f76101f23660046112bb565b610725565b604051908152602001610138565b61010961021336600461135b565b610774565b34801561022457600080fd5b50436101f7565b34801561023757600080fd5b5061024b610246366004611295565b610890565b604080516001600160a01b03938416815292909116602083015201610138565b34801561027757600080fd5b506101096109f7565b34801561028c57600080fd5b506101f761029b366004611054565b6001600160a01b031690565b3480156102b357600080fd5b506101bf610a0b565b3480156102c857600080fd5b506102d1610a1a565b60405161013891906114b0565b3480156102ea57600080fd5b506101bf610a7c565b3480156102ff57600080fd5b5060026101f7565b34801561031357600080fd5b506101bf610b11565b34801561032857600080fd5b50610109610337366004611054565b610b9c565b61010961034a3660046114c3565b610c15565b600054610100900460ff161580801561036f5750600054600160ff909116105b806103895750303b158015610389575060005460ff166001145b6103f15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610414576000805461ff0019166101001790555b6001600160a01b0386161580159061043457506001600160a01b03851615155b801561044857506001600160a01b03841615155b801561045c57506001600160a01b03831615155b801561047057506001600160a01b03821615155b6104ae5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016103e8565b6104b6610c42565b6104bf86610b9c565b606680546001600160a01b0319166001600160a01b0387169081179091556040805163579e6e3f60e01b8152905163579e6e3f916004808201926020929091908290030181865afa158015610518573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053c91906115f9565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c7918201805488169096179095559254815480860183558401805491881691871691909117905590548154938401909155910180549190931691161790558015610636576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6066546001600160a01b031663955d0c2a86610658610c71565b604051602001610669929190611616565b6040516020818303038152906040528051906020012086610688610a1a565b8787876040518763ffffffff1660e01b81526004016106ac9695949392919061165d565b600060405180830381600087803b1580156106c657600080fd5b505af11580156106da573d6000803e3d6000fd5b505050505050505050565b6106f2868686868661063e565b610636868685858589610c7b565b600061070a610b11565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b835181101561076d57838181518110610746576107466116c3565b60200260200101518261075991906116ef565b91508061076581611702565b91505061072b565b5092915050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490808e6107a1610c71565b6040516020016107b2929190611616565b6040516020818303038152906040528051906020012081526020018d81526020016107db610a1a565b81526020018c81526020018b81526020018a81526020016107fa610c71565b6001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b8152600401610852919061171b565b6000604051808303818588803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b505050505050505050505050505050565b600080600060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091091906115f9565b600087815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b519916109549160040190815260200190565b600060405180830381865afa158015610971573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610999919081019061192e565b5050815196995090975050931593506109d29250505057816000815181106109c3576109c36116c3565b602002602001015193506109d6565b8293505b505050600092835260676020526040909220546001600160a01b0316929050565b6109ff610d47565b610a096000610db6565b565b6033546001600160a01b031690565b60606065805480602002602001604051908101604052809291908181526020018280548015610a7257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610a54575b5050505050905090565b6066546000906001600160a01b0316610a955750600090565b606660009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0c91906115f9565b905090565b600080610b1c610a7c565b90506001600160a01b038116610b3457600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9691906115f9565b91505090565b610ba4610d47565b6001600160a01b038116610c095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103e8565b610c1281610db6565b50565b610c278b8b8b8b8b8a8a8a8a8a610774565b610c358b8b8a8a8a8e610c7b565b5050505050505050505050565b600054610100900460ff16610c695760405162461bcd60e51b81526004016103e890611a06565b610a09610e08565b6000610b0c610e3f565b600086610c86610c71565b604051602001610c97929190611616565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be3489898988610d1a8f82610e6d565b8f610d23610c71565b604051610d369796959493929190611a51565b60405180910390a450505050505050565b610d4f610c71565b6001600160a01b0316610d60610a0b565b6001600160a01b031614610a095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103e8565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610e2f5760405162461bcd60e51b81526004016103e890611a06565b610a09610e3a610c71565b610db6565b600060143610801590610e565750610e5633610700565b15610e68575060131936013560601c90565b503390565b6060600083610e7a610c71565b604051602001610e8b929190611616565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610ebe57610ebe611078565b604051908082528060200260200182016040528015610ee7578160200160208202803683370190505b50905060005b8151811015610fb3578260658281548110610f0a57610f0a6116c3565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110610f3a57610f3a6116c3565b6020026020010151604051602001610f6e939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110610f9657610f966116c3565b602090810291909101015280610fab81611702565b915050610eed565b509150505b92915050565b6001600160a01b0381168114610c1257600080fd5b8035610fde81610fbe565b919050565b600080600080600060a08688031215610ffb57600080fd5b853561100681610fbe565b9450602086013561101681610fbe565b9350604086013561102681610fbe565b9250606086013561103681610fbe565b9150608086013561104681610fbe565b809150509295509295909350565b60006020828403121561106657600080fd5b813561107181610fbe565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156110b6576110b6611078565b604052919050565b60006001600160401b038211156110d7576110d7611078565b5060051b60200190565b600082601f8301126110f257600080fd5b81356020611107611102836110be565b61108e565b82815260059290921b8401810191818101908684111561112657600080fd5b8286015b84811015611141578035835291830191830161112a565b509695505050505050565b600080600080600060a0868803121561116457600080fd5b853594506020860135935060408601356001600160401b038082111561118957600080fd5b61119589838a016110e1565b945060608801359150808211156111ab57600080fd5b6111b789838a016110e1565b935060808801359150808211156111cd57600080fd5b506111da888289016110e1565b9150509295509295909350565b60008060008060008060c0878903121561120057600080fd5b863595506020870135945060408701356001600160401b038082111561122557600080fd5b6112318a838b016110e1565b9550606089013591508082111561124757600080fd5b6112538a838b016110e1565b9450608089013591508082111561126957600080fd5b5061127689828a016110e1565b92505060a087013561128781610fbe565b809150509295509295509295565b6000602082840312156112a757600080fd5b5035919050565b6001600160a01b03169052565b6000602082840312156112cd57600080fd5b81356001600160401b038111156112e357600080fd5b6112ef848285016110e1565b949350505050565b600082601f83011261130857600080fd5b81356020611318611102836110be565b82815260059290921b8401810191818101908684111561133757600080fd5b8286015b8481101561114157803561134e81610fbe565b835291830191830161133b565b6000806000806000806000806000806101408b8d03121561137b57600080fd5b8a35995060208b0135985060408b01356001600160401b03808211156113a057600080fd5b6113ac8e838f016110e1565b995060608d01359150808211156113c257600080fd5b6113ce8e838f016110e1565b985060808d01359150808211156113e457600080fd5b6113f08e838f016110e1565b975060a08d0135965061140560c08e01610fd3565b955061141360e08e01610fd3565b94506101008d013591508082111561142a57600080fd5b6114368e838f016110e1565b93506101208d013591508082111561144d57600080fd5b5061145a8d828e016112f7565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b838110156114a55781516001600160a01b031687529582019590820190600101611480565b509495945050505050565b602081526000611071602083018461146c565b60008060008060008060008060008060006101608c8e0312156114e557600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561150957600080fd5b6115198e60408f01358f016110e1565b99508060608e0135111561152c57600080fd5b61153c8e60608f01358f016110e1565b98508060808e0135111561154f57600080fd5b61155f8e60808f01358f016110e1565b975061156d60a08e01610fd3565b965060c08d0135955061158260e08e01610fd3565b94506115916101008e01610fd3565b9350806101208e013511156115a557600080fd5b6115b68e6101208f01358f016110e1565b9250806101408e013511156115ca57600080fd5b506115dc8d6101408e01358e016112f7565b90509295989b509295989b9093969950565b8051610fde81610fbe565b60006020828403121561160b57600080fd5b815161107181610fbe565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b838110156114a557815187529582019590820190600101611641565b86815285602082015260c06040820152600061167c60c083018761146c565b828103606084015261168e818761162d565b905082810360808401526116a2818661162d565b905082810360a08401526116b6818561162d565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610fb857610fb86116d9565b600060018201611714576117146116d9565b5060010190565b6020815281516020820152602082015160408201526000604083015161018080606085015261174e6101a085018361146c565b91506060850151601f198086850301608087015261176c848361162d565b935060808701519150808685030160a0870152611789848361162d565b935060a08701519150808685030160c08701526117a6848361162d565b935060c087015191506117bc60e08701836112ae565b60e08701516101008781019190915287015191506101206117df818801846112ae565b87015191506101406117f3878201846112ae565b80880151925050610160818786030181880152611810858461162d565b90880151878203909201848801529350905061182c838261146c565b9695505050505050565b600082601f83011261184757600080fd5b81516001600160401b0381111561186057611860611078565b6020611874601f8301601f1916820161108e565b828152858284870101111561188857600080fd5b60005b838110156118a657858101830151828201840152820161188b565b506000928101909101919091529392505050565b600082601f8301126118cb57600080fd5b815160206118db611102836110be565b82815260059290921b840181019181810190868411156118fa57600080fd5b8286015b8481101561114157805161191181610fbe565b83529183019183016118fe565b80518015158114610fde57600080fd5b60008060008060008060008060006101208a8c03121561194d57600080fd5b6119568a6115ee565b60208b015160408c0151919a5098506001600160401b038082111561197a57600080fd5b6119868d838e01611836565b985061199460608d016115ee565b975060808c0151965060a08c01519150808211156119b157600080fd5b6119bd8d838e016118ba565b955060c08c0151945060e08c01519150808211156119da57600080fd5b506119e78c828d01611836565b9250506119f76101008b0161191e565b90509295985092959850929598565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b87815260e060208201526000611a6a60e083018961162d565b8281036040840152611a7c818961162d565b90508281036060840152611a90818861162d565b90508281036080840152611aa4818761162d565b60a084019590955250506001600160a01b039190911660c0909101529594505050505056fea2646970667358221220c4309f8d260f53f4b0f80ad1b9372c2e5910bb7994b2bd3dcf3ec0af9eb74e4064736f6c63430008110033","address":"0x814A33238cD336e1373DBbA7072fC3016b073e0b","implementation":"0x814A33238cD336e1373DBbA7072fC3016b073e0b","version":"v3.0.0","libraries":{}}')}}]);