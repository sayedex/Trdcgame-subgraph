// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("transfer", id.toString(), this);
    }
  }

  static load(id: string): transfer | null {
    return changetype<transfer | null>(store.get("transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class rewardsclaimed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("Amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save rewardsclaimed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type rewardsclaimed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("rewardsclaimed", id.toString(), this);
    }
  }

  static load(id: string): rewardsclaimed | null {
    return changetype<rewardsclaimed | null>(store.get("rewardsclaimed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Amount(): BigInt {
    let value = this.get("Amount");
    return value!.toBigInt();
  }

  set Amount(value: BigInt) {
    this.set("Amount", Value.fromBigInt(value));
  }
}

export class thiefheists extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("Bank", Value.fromString(""));
    this.set("BankPower", Value.fromBigInt(BigInt.zero()));
    this.set("Thief", Value.fromString(""));
    this.set("ThiefPower", Value.fromBigInt(BigInt.zero()));
    this.set("Result", Value.fromString(""));
    this.set("Amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save thiefheists entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type thiefheists must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("thiefheists", id.toString(), this);
    }
  }

  static load(id: string): thiefheists | null {
    return changetype<thiefheists | null>(store.get("thiefheists", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Bank(): string {
    let value = this.get("Bank");
    return value!.toString();
  }

  set Bank(value: string) {
    this.set("Bank", Value.fromString(value));
  }

  get BankPower(): BigInt {
    let value = this.get("BankPower");
    return value!.toBigInt();
  }

  set BankPower(value: BigInt) {
    this.set("BankPower", Value.fromBigInt(value));
  }

  get Thief(): string {
    let value = this.get("Thief");
    return value!.toString();
  }

  set Thief(value: string) {
    this.set("Thief", Value.fromString(value));
  }

  get ThiefPower(): BigInt {
    let value = this.get("ThiefPower");
    return value!.toBigInt();
  }

  set ThiefPower(value: BigInt) {
    this.set("ThiefPower", Value.fromBigInt(value));
  }

  get Result(): string {
    let value = this.get("Result");
    return value!.toString();
  }

  set Result(value: string) {
    this.set("Result", Value.fromString(value));
  }

  get Amount(): BigInt {
    let value = this.get("Amount");
    return value!.toBigInt();
  }

  set Amount(value: BigInt) {
    this.set("Amount", Value.fromBigInt(value));
  }
}
