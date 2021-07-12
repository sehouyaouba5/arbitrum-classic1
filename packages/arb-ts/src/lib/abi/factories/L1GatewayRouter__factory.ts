/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1GatewayRouter } from '../L1GatewayRouter'

export class L1GatewayRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1GatewayRouter> {
    return super.deploy(overrides || {}) as Promise<L1GatewayRouter>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayRouter {
    return super.attach(address) as L1GatewayRouter
  }
  connect(signer: Signer): L1GatewayRouter__factory {
    return super.connect(signer) as L1GatewayRouter__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayRouter {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayRouter
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newDefaultGateway',
        type: 'address',
      },
    ],
    name: 'DefaultGatewayUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'GatewaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userFrom',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'TransferRouted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getGateway',
    outputs: [
      {
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_defaultGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_whitelist',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_counterpartGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isRouter',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1TokenToGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newL1DefaultGateway',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setDefaultGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_creditBackAddress',
        type: 'address',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_token',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_gateway',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateways',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506118e6806100206000396000f3fe60806040526004361061011f5760003560e01c80638da5cb5b116100a0578063d2ce7d6511610064578063d2ce7d651461067e578063dd61456914610718578063ed08fdc614610750578063f887ea4014610783578063fb0e722b146107985761011f565b80638da5cb5b1461051557806393e59dc11461052a578063a0c76a961461053f578063a7e28d4814610618578063bda009fe1461064b5761011f565b80632e567b36116100e75780632e567b361461024857806347466f98146103535780635625a9521461038657806363851c31146103be578063658b53f4146103e75761011f565b8063032958021461012457806313af4035146101555780631459457a1461018a5780632d67b72d146101df5780632db09c1c14610233575b600080fd5b34801561013057600080fd5b506101396107ad565b604080516001600160a01b039092168252519081900360200190f35b34801561016157600080fd5b506101886004803603602081101561017857600080fd5b50356001600160a01b03166107bc565b005b34801561019657600080fd5b50610188600480360360a08110156101ad57600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610875565b610221600480360360a08110156101f557600080fd5b506001600160a01b038135811691602081013591604082013591606081013591608090910135166108c1565b60408051918252519081900360200190f35b34801561023f57600080fd5b50610139610a1b565b6102de600480360360a081101561025e57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156102a057600080fd5b8201836020820111156102b257600080fd5b803590602001918460018302840111600160201b831117156102d357600080fd5b509092509050610a2a565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610318578181015183820152602001610300565b50505050905090810190601f1680156103455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035f57600080fd5b506101886004803603602081101561037657600080fd5b50356001600160a01b0316610a70565b6102216004803603608081101561039c57600080fd5b506001600160a01b038135169060208101359060408101359060600135610b13565b3480156103ca57600080fd5b506103d3610c89565b604080519115158252519081900360200190f35b610221600480360360a08110156103fd57600080fd5b810190602081018135600160201b81111561041757600080fd5b82018360208201111561042957600080fd5b803590602001918460208302840111600160201b8311171561044a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561049957600080fd5b8201836020820111156104ab57600080fd5b803590602001918460208302840111600160201b831117156104cc57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060208101359060400135610c8e565b34801561052157600080fd5b50610139610cf5565b34801561053657600080fd5b50610139610d04565b34801561054b57600080fd5b506102de600480360360a081101561056257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156105a457600080fd5b8201836020820111156105b657600080fd5b803590602001918460018302840111600160201b831117156105d757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d13945050505050565b34801561062457600080fd5b506101396004803603602081101561063b57600080fd5b50356001600160a01b0316610dbb565b34801561065757600080fd5b506101396004803603602081101561066e57600080fd5b50356001600160a01b0316610dce565b6102de600480360360c081101561069457600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156106da57600080fd5b8201836020820111156106ec57600080fd5b803590602001918460018302840111600160201b8311171561070d57600080fd5b509092509050610e30565b6102216004803603608081101561072e57600080fd5b506001600160a01b038135169060208101359060408101359060600135610f19565b34801561075c57600080fd5b506101396004803603602081101561077357600080fd5b50356001600160a01b0316610f31565b34801561078f57600080fd5b50610139610f4c565b3480156107a457600080fd5b50610139610f5b565b6004546001600160a01b031681565b6005546001600160a01b03163314610808576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b6001600160a01b038116610853576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b61087f8285610f6a565b600580546001600160a01b03199081166001600160a01b0397881617909155600080548216948716949094179093556006805490931694169390931790555050565b60006108cc33610f98565b610911576040805162461bcd60e51b81526020600482015260116024820152701393d517d19493d357d0d3d395149050d5607a1b604482015290519081900360640190fd5b610923866001600160a01b0316610f98565b610966576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d513d7d0d3d395149050d5608a1b604482015290519081900360640190fd5b60408051600180825281830190925260609160208083019080368337019050509050338160008151811061099657fe5b6001600160a01b03929092166020928302919091019091015260408051600180825281830190925260609181602001602082028036833701905050905087816000815181106109e157fe5b60200260200101906001600160a01b031690816001600160a01b031681525050610a0f828289898989610f9e565b98975050505050505050565b6001546001600160a01b031681565b6040805162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b6044820152905160609181900360640190fd5b6000546001600160a01b03163314610abf576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600080546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b6005546000906001600160a01b03163314610b62576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b600480546001600160a01b0387166001600160a01b0319909116811790915560408051918252517f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac3319181900360200190a160006001600160a01b03861615610c2c57856001600160a01b0316632db09c1c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610bfd57600080fd5b505afa158015610c11573d6000803e3d6000fd5b505050506040513d6020811015610c2757600080fd5b505190505b604080516001600160a01b0383166024808301919091528251808303909101815260449091019091526020810180516001600160e01b031663f7c9362f60e01b179052610c7e33600086898986611283565b979650505050505050565b600190565b6005546000906001600160a01b03163314610cdd576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b610ceb868686868633610f9e565b9695505050505050565b6005546001600160a01b031681565b6000546001600160a01b031681565b6060848260405160200180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d6f578181015183820152602001610d57565b50505050905090810190601f168015610d9c5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190529a9950505050505050505050565b6000610dc6826112a8565b90505b919050565b6001600160a01b038082166000908152600360205260409020541680610dfc57506004546001600160a01b03165b6001600160a01b03811660011480610e235750610e21816001600160a01b0316610f98565b155b15610dc957506000610dc9565b6000546060906001600160a01b031615610efe576000546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b158015610e8f57600080fd5b505afa158015610ea3573d6000803e3d6000fd5b505050506040513d6020811015610eb957600080fd5b5051610efe576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b610f0d88888888888888611357565b50979650505050505050565b6000610f2885858585336108c1565b95945050505050565b6003602052600090815260409020546001600160a01b031681565b6002546001600160a01b031681565b6006546001600160a01b031681565b610f758260006115e4565b600480546001600160a01b0319166001600160a01b039290921691909117905550565b3b151590565b60008551875114610fe5576040805162461bcd60e51b815260206004820152600c60248201526b0aea49e9c8ebe988a9c8ea8960a31b604482015290519081900360640190fd5b60005b87518110156111a357868181518110610ffd57fe5b6020026020010151600360008a848151811061101557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555086818151811061106d57fe5b60200260200101516001600160a01b031688828151811061108a57fe5b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a360006001600160a01b03168782815181106110de57fe5b60200260200101516001600160a01b03161461119b5786818151811061110057fe5b60200260200101516001600160a01b0316632db09c1c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561114057600080fd5b505afa158015611154573d6000803e3d6000fd5b505050506040513d602081101561116a57600080fd5b5051875188908390811061117a57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b600101610fe8565b506060634201f98560e01b8888604051602401808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156111f75781810151838201526020016111df565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561123657818101518382015260200161121e565b50505050905001945050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050610a0f836000868989865b600654600154600091610c7e916001600160a01b0391821691168989898989896116b0565b6000806112b483610dce565b90506001600160a01b0381166112ce576000915050610dc9565b806001600160a01b031663a7e28d48846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561132457600080fd5b505afa158015611338573d6000803e3d6000fd5b505050506040513d602081101561134e57600080fd5b50519392505050565b6060600061136489610dce565b905060606113ab8a338b8b89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d1392505050565b604080516001600160a01b0385811682529151929350818c169233928e16917f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f5919081900360200190a4816001600160a01b031663d2ce7d65348c8c8c8c8c886040518863ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b0316815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611499578181015183820152602001611481565b50505050905090810190601f1680156114c65780820380516001836020036101000a031916815260200191505b509750505050505050506000604051808303818588803b1580156114e957600080fd5b505af11580156114fd573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052602081101561152757600080fd5b8101908080516040519392919084600160201b82111561154657600080fd5b90830190602082018581111561155b57600080fd5b8251600160201b81118282018810171561157457600080fd5b82525081516020918201929091019080838360005b838110156115a1578181015183820152602001611589565b50505050905090810190601f1680156115ce5780820380516001836020036101000a031916815260200191505b5060405250505092505050979650505050505050565b6001600160a01b038216611635576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6001546001600160a01b031615611682576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b600080896001600160a01b031663679b6ded348b8a8a8d8e8c8c8c6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561177757818101518382015260200161175f565b50505050905090810190601f1680156117a45780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b1580156117c957600080fd5b505af11580156117dd573d6000803e3d6000fd5b50505050506040513d60208110156117f457600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808f1694908e16937fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0938a93919283929083019185019080838360005b83811015611869578181015183820152602001611851565b50505050905090810190601f1680156118965780820380516001836020036101000a031916815260200191505b509250505060405180910390a4999850505050505050505056fea2646970667358221220e49d8c3daed7a4acbc44953fd755db3e93078d8cc81bd72570f886bf59e444b564736f6c634300060b0033'
