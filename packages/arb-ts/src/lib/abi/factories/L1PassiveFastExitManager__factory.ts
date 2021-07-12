/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1PassiveFastExitManager } from '../L1PassiveFastExitManager'

export class L1PassiveFastExitManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1PassiveFastExitManager> {
    return super.deploy(overrides || {}) as Promise<L1PassiveFastExitManager>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1PassiveFastExitManager {
    return super.attach(address) as L1PassiveFastExitManager
  }
  connect(signer: Signer): L1PassiveFastExitManager__factory {
    return super.connect(signer) as L1PassiveFastExitManager__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1PassiveFastExitManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L1PassiveFastExitManager
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'onExitTransfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
    ],
    name: 'setBridge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506108b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063592e20701461003b5780638dd14802146100d2575b600080fd5b6100be6004803603606081101561005157600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561008057600080fd5b82018360208201111561009257600080fd5b803590602001918460018302840111600160201b831117156100b357600080fd5b5090925090506100fa565b604080519115158252519081900360200190f35b6100f8600480360360208110156100e857600080fd5b50356001600160a01b031661077f565b005b600080546001600160a01b03163314610148576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b6101506107fe565b838360e081101561016057600080fd5b6001600160a01b038235811692602081013592604082013583169260608301359260808101359091169181019060c0810160a0820135600160201b8111156101a757600080fd5b8201836020820111156101b957600080fd5b803590602001918460018302840111600160201b831117156101da57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561022c57600080fd5b82018360208201111561023e57600080fd5b803590602001918460018302840111600160201b8311171561025f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060c08f019490945250505060a08b01949094525050506001600160a01b0391821660808801819052606080890194909452938216604080890191909152602080890196909652958216875285516370a0823160e01b8152918c16600483015294519194936370a0823192602480840193829003018186803b15801561031557600080fd5b505afa158015610329573d6000803e3d6000fd5b505050506040513d602081101561033f57600080fd5b8101908080519060200190929190505050905082604001516001600160a01b031663effc168b8460000151856080015186606001518b8860a001516040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156104025781810151838201526020016103ea565b50505050905090810190601f16801561042f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561045257600080fd5b505af1158015610466573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561048f57600080fd5b8101908080516040519392919084600160201b8211156104ae57600080fd5b9083019060208201858111156104c357600080fd5b8251600160201b8111828201881017156104dc57600080fd5b82525081516020918201929091019080838360005b838110156105095781810151838201526020016104f1565b50505050905090810190601f1680156105365780820380516001836020036101000a031916815260200191505b50604081815260808901516370a0823160e01b83526001600160a01b038f811660048501529151969850600096911694506370a08231935060248083019350602092829003018186803b15801561058c57600080fd5b505afa1580156105a0573d6000803e3d6000fd5b505050506040513d60208110156105b657600080fd5b5051606085015160208601519192506105ce916107a1565b6105d882846107a1565b10156106155760405162461bcd60e51b815260040180806020018281038252602c815260200180610857602c913960400191505060405180910390fd5b505060008054835160408086015160c0870151915163bd5f3e7d60e01b8152600481018c81526001600160a01b038581166024840152838116604484015260a060648401908152895160a48501528951919097169763bd5f3e7d978f97968b959094939192608482019260c49092019160208801918190849084905b838110156106a9578181015183820152602001610691565b50505050905090810190601f1680156106d65780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156107095781810151838201526020016106f1565b50505050905090810190601f1680156107365780820380516001836020036101000a031916815260200191505b50975050505050505050600060405180830381600087803b15801561075a57600080fd5b505af115801561076e573d6000803e3d6000fd5b5060019a9950505050505050505050565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000828211156107f8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016060815260200160608152509056fe5573657220646964206e6f7420676574206372656469746564207769746820656e6f75676820746f6b656e73a2646970667358221220fc0ddf1e6a75fe66669c6324ebbc00a540e96622da62c9e461182a92fa12d06c64736f6c634300060b0033'
