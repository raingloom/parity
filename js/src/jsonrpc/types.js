// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

export class Address {}

export class Data {}

export class Hash {}

export class Integer {}

export class Quantity {}

export class BlockNumber {
  static print = '`Quantity` | `Tag`';
}

export class CallRequest {
  static print = '`Object`';

  static details = {
    from: {
      type: Address,
      desc: '20 Bytes - The address the transaction is send from.',
      optional: true
    },
    to: {
      type: Address,
      desc: '(optional when creating new contract) 20 Bytes - The address the transaction is directed to.'
    },
    gas: {
      type: Quantity,
      desc: 'Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.',
      optional: true
    },
    gasPrice: {
      type: Quantity,
      desc: 'Integer of the gas price used for each paid gas.',
      optional: true
    },
    value: {
      type: Quantity,
      desc: 'Integer of the value sent with this transaction.',
      optional: true
    },
    data: {
      type: Data,
      desc: '4 byte hash of the method signature followed by encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI).',
      optional: true
    }
  }
}

export class TransactionRequest {
  static print = '`Object`';

  static details = {
    from: {
      type: Address,
      desc: '20 Bytes - The address the transaction is send from.'
    },
    to: {
      type: Address,
      desc: '20 Bytes - The address the transaction is directed to.',
      optional: true
    },
    gas: {
      type: Quantity,
      desc: 'Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.',
      optional: true
    },
    gasPrice: {
      type: Quantity,
      desc: 'Integer of the gas price used for each paid gas.',
      optional: true
    },
    value: {
      type: Quantity,
      desc: 'Integer of the value sent with this transaction.',
      optional: true
    },
    data: {
      type: Data,
      desc: '4 byte hash of the method signature followed by encoded parameters. For details see [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI).',
      optional: true
    },
    nonce: {
      type: Quantity,
      desc: 'Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.',
      optional: true
    },
    minBlock: {
      type: BlockNumber,
      desc: 'Delay until this block if specified.',
      optional: true
    }
  }
}
