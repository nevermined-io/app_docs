"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[842],{842:e=>{e.exports=JSON.parse('{"name":"NFTSalesTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"bytes[]","name":"_params","type":"bytes[]"}],"name":"createAgreementFulfill","outputs":[],"stateMutability":"payable","type":"function","signature":"0xe4fe989c"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0xaf640d0f"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_lockPaymentConditionAddress","type":"address"},{"internalType":"address","name":"_transferConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1459457a"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"nftPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x49199215"},{"inputs":[{"internalType":"address","name":"nftAddress","type":"address"},{"internalType":"bytes32","name":"nftId","type":"bytes32"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"nftSale","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0416aae8"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50612ab9806100206000396000f3fe6080604052600436106101055760003560e01c80630416aae81461010a5780631459457a1461012c578063162790551461014c5780632e166f3e146101825780634183e72b146101a257806349199215146101c2578063572b6c05146102175780635ced058e146102375780635ea3ab851461026d5780636104ff1a1461028d5780636fd902e1146102a05780636ff015ae146102b3578063715018a6146102f357806382c947b7146103085780638da5cb5b1461032f57806391a169bf14610344578063ab9de23014610366578063af640d0f1461037b578063ce1b815f1461038f578063e4fe989c146103a4578063f2fde38b146103b7578063f8fe1070146103d7575b600080fd5b34801561011657600080fd5b5061012a610125366004611a07565b6103ea565b005b34801561013857600080fd5b5061012a610147366004611a4f565b61043a565b34801561015857600080fd5b5061016d610167366004611ac0565b3b151590565b60405190151581526020015b60405180910390f35b34801561018e57600080fd5b5061012a61019d366004611bb8565b610729565b3480156101ae57600080fd5b5061012a6101bd366004611c53565b6107d0565b3480156101ce57600080fd5b506102096101dd366004611d01565b606d60209081526000948552604080862082529385528385208152918452828420909152825290205481565b604051908152602001610179565b34801561022357600080fd5b5061016d610232366004611ac0565b6107eb565b34801561024357600080fd5b50610255610252366004611d42565b90565b6040516001600160a01b039091168152602001610179565b34801561027957600080fd5b50610209610288366004611d68565b610810565b61012a61029b366004611e08565b61085f565b3480156102ac57600080fd5b5043610209565b3480156102bf57600080fd5b506102d36102ce366004611d42565b61097b565b604080516001600160a01b03938416815292909116602083015201610179565b3480156102ff57600080fd5b5061012a610ae2565b34801561031457600080fd5b50610209610323366004611ac0565b6001600160a01b031690565b34801561033b57600080fd5b50610255610af6565b34801561035057600080fd5b50610359610b05565b6040516101799190611f5d565b34801561037257600080fd5b50610255610b67565b34801561038757600080fd5b506001610209565b34801561039b57600080fd5b50610255610bfc565b61012a6103b2366004611f97565b610c87565b3480156103c357600080fd5b5061012a6103d2366004611ac0565b610fb5565b61012a6103e5366004612108565b61102e565b80606d60006103f761105b565b6001600160a01b03908116825260208083019390935260409182016000908120988216815297835281882095168752938152838620948652939093525090912055565b600054610100900460ff161580801561045a5750600054600160ff909116105b806104745750303b158015610474575060005460ff166001145b6104dc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156104ff576000805461ff0019166101001790555b6001600160a01b0386161580159061051f57506001600160a01b03851615155b801561053357506001600160a01b03841615155b801561054757506001600160a01b03831615155b801561055b57506001600160a01b03821615155b6105995760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016104d3565b6105a1611065565b6105aa86610fb5565b606680546001600160a01b0319166001600160a01b0387169081179091556040805163579e6e3f60e01b8152905163579e6e3f916004808201926020929091908290030181865afa158015610603573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610627919061223e565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c7918201805488169096179095559254815480860183558401805491881691871691909117905590548154938401909155910180549190931691161790558015610721576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6066546001600160a01b031663955d0c2a8661074361105b565b60405160200161075492919061225b565b6040516020818303038152906040528051906020012086610773610b05565b8787876040518763ffffffff1660e01b8152600401610797969594939291906122a2565b600060405180830381600087803b1580156107b157600080fd5b505af11580156107c5573d6000803e3d6000fd5b505050505050505050565b6107dd8686868686610729565b610721868685858589611094565b60006107f5610bfc565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b83518110156108585783818151811061083157610831612308565b6020026020010151826108449190612334565b91508061085081612347565b915050610816565b5092915050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490808e61088c61105b565b60405160200161089d92919061225b565b6040516020818303038152906040528051906020012081526020018d81526020016108c6610b05565b81526020018c81526020018b81526020018a81526020016108e561105b565b6001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b815260040161093d9190612360565b6000604051808303818588803b15801561095657600080fd5b505af115801561096a573d6000803e3d6000fd5b505050505050505050505050505050565b600080600060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fb919061223e565b600087815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b51991610a3f9160040190815260200190565b600060405180830381865afa158015610a5c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a849190810190612558565b505081519699509097505093159350610abd925050505781600081518110610aae57610aae612308565b60200260200101519350610ac1565b8293505b505050600092835260676020526040909220546001600160a01b0316929050565b610aea611160565b610af460006111cf565b565b6033546001600160a01b031690565b60606065805480602002602001604051908101604052809291908181526020018280548015610b5d57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610b3f575b5050505050905090565b6066546000906001600160a01b0316610b805750600090565b606660009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf7919061223e565b905090565b600080610c07610b67565b90506001600160a01b038116610c1f57600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c81919061223e565b91505090565b600086610c9261105b565b604051602001610ca392919061225b565b60408051601f1981840301815282825280516020918201206003808552608085019093529350600092919082016060803683375050604080516002808252606082018352939450600093909250906020830190803683375050604080516002808252606082018352939450600093909250906020830190803683375050604080516002808252606082019092529293506000929150602082015b6060815260200190600190039081610d3d579050509050610d5c61105b565b82600081518110610d6f57610d6f612308565b60200260200101906001600160a01b031690816001600160a01b03168152505060005b6002811015610e045780848281518110610dae57610dae612308565b602002602001018181525050868181518110610dcc57610dcc612308565b6020026020010151828281518110610de657610de6612308565b60200260200101819052508080610dfc90612347565b915050610d92565b5060005b6003811015610e6157868181518110610e2357610e23612308565b602002602001015180519060200120858281518110610e4457610e44612308565b602090810291909101015280610e5981612347565b915050610e08565b506000856065600081548110610e7957610e79612308565b600091825260208220015487516001600160a01b03909116918891610ea057610ea0612308565b6020026020010151604051602001610eba93929190612630565b6040516020818303038152906040528051906020012090506000866065600181548110610ee957610ee9612308565b9060005260206000200160009054906101000a90046001600160a01b031687600181518110610f1a57610f1a612308565b6020026020010151604051602001610f3493929190612630565b604051602081830303815290604052805190602001209050610f5788838e611221565b84600181518110610f6a57610f6a612308565b60200260200101906001600160a01b031690816001600160a01b031681525050610f9588838361156e565b610fa68d8d888e8e8e8b8b8b611786565b50505050505050505050505050565b610fbd611160565b6001600160a01b0381166110225760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d3565b61102b816111cf565b50565b6110408b8b8b8b8b8a8a8a8a8a61085f565b61104e8b8b8a8a8a8e611094565b5050505050505050505050565b6000610bf76117a4565b600054610100900460ff1661108c5760405162461bcd60e51b81526004016104d39061264f565b610af46117d2565b60008661109f61105b565b6040516020016110b092919061225b565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be34898989886111338f82611809565b8f61113c61105b565b60405161114f979695949392919061269a565b60405180910390a450505050505050565b61116861105b565b6001600160a01b0316611179610af6565b6001600160a01b031614610af45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d3565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000806000806060808860008151811061123d5761123d612308565b6020026020010151806020019051810190611258919061276d565b809550819650829750839850849950505050505060008060008060008d60018151811061128757611287612308565b60200260200101518060200190518101906112a291906127f4565b949950919750955093509091505089851480156112be5750898c145b6112f95760405162461bcd60e51b815260206004820152600c60248201526b0c8d2c840dad2e6dac2e8c6d60a31b60448201526064016104d3565b8c821461133b5760405162461bcd60e51b815260206004820152601060248201526f0d8dec6d640d2c840dad2e6dac2e8c6d60831b60448201526064016104d3565b606560028154811061134f5761134f612308565b6000918252602090912001546001600160a01b038a81169116146113a95760405162461bcd60e51b8152602060048201526011602482015270726577617264206e6f7420657363726f7760781b60448201526064016104d3565b606d6000876000815181106113c0576113c0612308565b6020908102919091018101516001600160a01b039081168352828201939093526040918201600090812085851682528252828120938c1681529281528183208f8452905281205490036114435760405162461bcd60e51b815260206004820152600b60248201526a6e6f74206f6e2073616c6560a81b60448201526064016104d3565b8660008151811061145657611456612308565b602002602001015183606d60008960008151811061147657611476612308565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000846001600160a01b03166001600160a01b0316815260200190815260200160002060008b6001600160a01b03166001600160a01b0316815260200190815260200160002060008f8152602001908152602001600020546115009190612850565b11156115405760405162461bcd60e51b815260206004820152600f60248201526e746f6f20736d616c6c20707269636560881b60448201526064016104d3565b8560008151811061155357611553612308565b60200260200101519a50505050505050505050509392505050565b60008060006060808760008151811061158957611589612308565b60200260200101518060200190518101906115a4919061276d565b80955081965082975083985084995050505050506000606080600080600060608e6002815181106115d7576115d7612308565b60200260200101518060200190518101906115f29190612867565b969d50949b509299509750909550909350909150508d82146116485760405162461bcd60e51b815260206004820152600f60248201526e3637b1b59036b4b9b6b0ba31b4101960891b60448201526064016104d3565b80516001146116915760405162461bcd60e51b81526020600482015260156024820152743130b2103932b632b0b9b29031b7b73234ba34b7b760591b60448201526064016104d3565b868387876040516020016116a89493929190612935565b604051602081830303815290604052805190602001208c8b8b8b6040516020016116d59493929190612935565b604051602081830303815290604052805190602001201461172a5760405162461bcd60e51b815260206004820152600f60248201526e0cae6c6e4deee40dad2e6dac2e8c6d608b1b60448201526064016104d3565b8c8160008151811061173e5761173e612308565b60200260200101511461096a5760405162461bcd60e51b815260206004820152601060248201526f0e8e4c2dccccae440dad2e6dac2e8c6d60831b60448201526064016104d3565b6117968989898989888888611940565b6107c589898888888c611094565b6000601436108015906117bb57506117bb336107eb565b156117cd575060131936013560601c90565b503390565b600054610100900460ff166117f95760405162461bcd60e51b81526004016104d39061264f565b610af461180461105b565b6111cf565b606060008361181661105b565b60405160200161182792919061225b565b604051602081830303815290604052805190602001209050600083516001600160401b0381111561185a5761185a611ae4565b604051908082528060200260200182016040528015611883578160200160208202803683370190505b50905060005b81518110156119355782606582815481106118a6576118a6612308565b9060005260206000200160009054906101000a90046001600160a01b03168683815181106118d6576118d6612308565b60200260200101516040516020016118f093929190612630565b6040516020818303038152906040528051906020012082828151811061191857611918612308565b60209081029190910101528061192d81612347565b915050611889565b509150505b92915050565b6066546001600160a01b031663122b3d45348a61195b61105b565b60405160200161196c92919061225b565b604051602081830303815290604052805190602001208a61198b610b05565b8b8b8b8a8c8b6040518b63ffffffff1660e01b81526004016119b59998979695949392919061297c565b6000604051808303818588803b1580156119ce57600080fd5b505af1158015610fa6573d6000803e3d6000fd5b6001600160a01b038116811461102b57600080fd5b8035611a02816119e2565b919050565b60008060008060808587031215611a1d57600080fd5b8435611a28816119e2565b9350602085013592506040850135611a3f816119e2565b9396929550929360600135925050565b600080600080600060a08688031215611a6757600080fd5b8535611a72816119e2565b94506020860135611a82816119e2565b93506040860135611a92816119e2565b92506060860135611aa2816119e2565b91506080860135611ab2816119e2565b809150509295509295909350565b600060208284031215611ad257600080fd5b8135611add816119e2565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611b2257611b22611ae4565b604052919050565b60006001600160401b03821115611b4357611b43611ae4565b5060051b60200190565b600082601f830112611b5e57600080fd5b81356020611b73611b6e83611b2a565b611afa565b82815260059290921b84018101918181019086841115611b9257600080fd5b8286015b84811015611bad5780358352918301918301611b96565b509695505050505050565b600080600080600060a08688031215611bd057600080fd5b853594506020860135935060408601356001600160401b0380821115611bf557600080fd5b611c0189838a01611b4d565b94506060880135915080821115611c1757600080fd5b611c2389838a01611b4d565b93506080880135915080821115611c3957600080fd5b50611c4688828901611b4d565b9150509295509295909350565b60008060008060008060c08789031215611c6c57600080fd5b863595506020870135945060408701356001600160401b0380821115611c9157600080fd5b611c9d8a838b01611b4d565b95506060890135915080821115611cb357600080fd5b611cbf8a838b01611b4d565b94506080890135915080821115611cd557600080fd5b50611ce289828a01611b4d565b92505060a0870135611cf3816119e2565b809150509295509295509295565b60008060008060808587031215611d1757600080fd5b8435611d22816119e2565b93506020850135611d32816119e2565b92506040850135611a3f816119e2565b600060208284031215611d5457600080fd5b5035919050565b6001600160a01b03169052565b600060208284031215611d7a57600080fd5b81356001600160401b03811115611d9057600080fd5b611d9c84828501611b4d565b949350505050565b600082601f830112611db557600080fd5b81356020611dc5611b6e83611b2a565b82815260059290921b84018101918181019086841115611de457600080fd5b8286015b84811015611bad578035611dfb816119e2565b8352918301918301611de8565b6000806000806000806000806000806101408b8d031215611e2857600080fd5b8a35995060208b0135985060408b01356001600160401b0380821115611e4d57600080fd5b611e598e838f01611b4d565b995060608d0135915080821115611e6f57600080fd5b611e7b8e838f01611b4d565b985060808d0135915080821115611e9157600080fd5b611e9d8e838f01611b4d565b975060a08d01359650611eb260c08e016119f7565b9550611ec060e08e016119f7565b94506101008d0135915080821115611ed757600080fd5b611ee38e838f01611b4d565b93506101208d0135915080821115611efa57600080fd5b50611f078d828e01611da4565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b83811015611f525781516001600160a01b031687529582019590820190600101611f2d565b509495945050505050565b602081526000611add6020830184611f19565b60006001600160401b03821115611f8957611f89611ae4565b50601f01601f191660200190565b60008060008060008060c08789031215611fb057600080fd5b86359550602087013594506001600160401b036040880135811015611fd457600080fd5b611fe48960408a01358a01611b4d565b94508060608901351115611ff757600080fd5b6120078960608a01358a01611b4d565b935061201660808901356119e2565b608088013592508060a0890135111561202e57600080fd5b60a0880135880189601f82011261204457600080fd5b612051611b6e8235611b2a565b81358082526020808301929160051b8401018c101561206f57600080fd5b602083015b6020843560051b8501018110156120f657848135111561209357600080fd5b803584018d603f8201126120a657600080fd5b60208101356120b7611b6e82611f70565b8181528f60408385010111156120cc57600080fd5b81604084016020830137600060208383010152808652505050602083019250602081019050612074565b50809450505050509295509295509295565b60008060008060008060008060008060006101608c8e03121561212a57600080fd5b8b359a5060208c013599506001600160401b0360408d013581101561214e57600080fd5b61215e8e60408f01358f01611b4d565b99508060608e0135111561217157600080fd5b6121818e60608f01358f01611b4d565b98508060808e0135111561219457600080fd5b6121a48e60808f01358f01611b4d565b97506121b260a08e016119f7565b965060c08d013595506121c760e08e016119f7565b94506121d66101008e016119f7565b9350806101208e013511156121ea57600080fd5b6121fb8e6101208f01358f01611b4d565b9250806101408e0135111561220f57600080fd5b506122218d6101408e01358e01611da4565b90509295989b509295989b9093969950565b8051611a02816119e2565b60006020828403121561225057600080fd5b8151611add816119e2565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b83811015611f5257815187529582019590820190600101612286565b86815285602082015260c0604082015260006122c160c0830187611f19565b82810360608401526122d38187612272565b905082810360808401526122e78186612272565b905082810360a08401526122fb8185612272565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561193a5761193a61231e565b6000600182016123595761235961231e565b5060010190565b602081528151602082015260208201516040820152600060408301516101808060608501526123936101a0850183611f19565b91506060850151601f19808685030160808701526123b18483612272565b935060808701519150808685030160a08701526123ce8483612272565b935060a08701519150808685030160c08701526123eb8483612272565b935060c0870151915061240160e0870183611d5b565b60e087015161010087810191909152870151915061012061242481880184611d5b565b870151915061014061243887820184611d5b565b808801519250506101608187860301818801526124558584612272565b9088015187820390920184880152935090506124718382611f19565b9695505050505050565b60005b8381101561249657818101518382015260200161247e565b50506000910152565b600082601f8301126124b057600080fd5b81516124be611b6e82611f70565b8181528460208386010111156124d357600080fd5b611d9c82602083016020870161247b565b600082601f8301126124f557600080fd5b81516020612505611b6e83611b2a565b82815260059290921b8401810191818101908684111561252457600080fd5b8286015b84811015611bad57805161253b816119e2565b8352918301918301612528565b80518015158114611a0257600080fd5b60008060008060008060008060006101208a8c03121561257757600080fd5b6125808a612233565b60208b015160408c0151919a5098506001600160401b03808211156125a457600080fd5b6125b08d838e0161249f565b98506125be60608d01612233565b975060808c0151965060a08c01519150808211156125db57600080fd5b6125e78d838e016124e4565b955060c08c0151945060e08c015191508082111561260457600080fd5b506126118c828d0161249f565b9250506126216101008b01612548565b90509295985092959850929598565b9283526001600160a01b03919091166020830152604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b87815260e0602082015260006126b360e0830189612272565b82810360408401526126c58189612272565b905082810360608401526126d98188612272565b905082810360808401526126ed8187612272565b60a084019590955250506001600160a01b039190911660c09091015295945050505050565b600082601f83011261272357600080fd5b81516020612733611b6e83611b2a565b82815260059290921b8401810191818101908684111561275257600080fd5b8286015b84811015611bad5780518352918301918301612756565b600080600080600060a0868803121561278557600080fd5b855194506020860151612797816119e2565b60408701519094506127a8816119e2565b60608701519093506001600160401b03808211156127c557600080fd5b6127d189838a01612712565b935060808801519150808211156127e757600080fd5b50611c46888289016124e4565b60008060008060008060c0878903121561280d57600080fd5b86519550602087015161281f816119e2565b6040880151909550612830816119e2565b80945050606087015192506080870151915060a0870151611cf3816119e2565b808202811582820484141761193a5761193a61231e565b600080600080600080600080610100898b03121561288457600080fd5b885160208a01519098506001600160401b03808211156128a357600080fd5b6128af8c838d01612712565b985060408b01519150808211156128c557600080fd5b6128d18c838d016124e4565b97506128df60608c01612233565b96506128ed60808c01612233565b95506128fb60a08c01612233565b945060c08b0151935060e08b015191508082111561291857600080fd5b506129258b828c01612712565b9150509295985092959890939650565b8481526001600160a01b038416602082015260806040820181905260009061295f90830185612272565b82810360608401526129718185611f19565b979650505050505050565b60006101208b835260208b8185015281604085015261299d8285018c611f19565b915083820360608501526129b1828b612272565b915083820360808501526129c5828a612272565b915083820360a08501526129d98289612272565b915083820360c08501526129ed8288611f19565b915083820360e0850152612a018287612272565b91508382036101008501528185518084528284019150828160051b85010183880160005b83811015612a6b57601f198088850301865282518051808652612a4d818a88018b850161247b565b96880196601f01909116939093018601925090850190600101612a25565b505080955050505050509a995050505050505050505056fea2646970667358221220825859cbc694caa23146d6b927f71bcab9d5231aa1300c5d0b7e15b217e25aac64736f6c63430008110033","address":"0x46b93F5b528AaF7C68b58DD1dd28dcdE118C4571","implementation":"0x46b93F5b528AaF7C68b58DD1dd28dcdE118C4571","version":"v3.0.0","libraries":{}}')}}]);