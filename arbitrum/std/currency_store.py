# Copyright 2019, Offchain Labs, Inc.
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from ..annotation import modifies_stack
from . import keyvalue_int_int
from .stack_manip import dup_n
from .struct import Struct
from .. import value

# currencyStore keep track of balances of currencies
# implemented as a keyvalue store, currencyid to balance

currency_store = Struct("currency_store", [
    ("store", keyvalue_int_int.typ)
])

typ = currency_store.typ

@modifies_stack(0, [typ])
def new(vm):
    keyvalue_int_int.new(vm)


@modifies_stack([typ, value.IntType()], [value.IntType()])
def get(vm):
    # cstore currId -> balance
    currency_store.get("store")(vm)
    keyvalue_int_int.get(vm)
    # value


@modifies_stack(
    [typ, value.IntType(), value.IntType()],
    [typ]
)
def add(vm):
    # cstore currId delta -> updatedcstore
    vm.swap1()
    vm.swap2()
    # delta cstore currId
    vm.dup2()
    vm.dup2()
    get(vm)
    # oldval delta cstore currId
    vm.add()
    # newval cstore currId
    vm.swap2()
    vm.swap1()
    # cstore currId newval
    currency_store.get("store")(vm)
    keyvalue_int_int.set_val(vm)
    currency_store.set_val("store")(vm)
    # updatedcstore


@modifies_stack([
    typ,
    value.IntType(),
    value.IntType()
], [
    value.IntType(),
    typ
])
def deduct(vm):
    # cstore currId delta -> success updatedcstore
    vm.swap1()
    vm.swap2()
    vm.dup2()
    vm.dup2()
    get(vm)
    vm.swap1()
    # oldval delta cstore currId
    vm.dup1()
    vm.dup1()
    vm.gt()
    vm.iszero()
    vm.ifelse(lambda vm: [
        vm.add(),
        # newval cstore currId
        vm.swap2(),
        vm.swap1(),
        # cstore currId newval
        currency_store.get("store")(vm),
        keyvalue_int_int.set_val(vm),
        currency_store.set_val("store")(vm),
        # updatedcstore
        vm.push(1),
    ], lambda vm: [
        # oldval delta cstore currId
        vm.pop(),
        vm.pop(),
        vm.swap1(),
        vm.pop(),
        vm.push(0)
    ])
