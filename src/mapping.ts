import { BigInt } from "@graphprotocol/graph-ts"
import {
  TRDCvault,
  Approval,
  BuyWeapon,
  GetCop,
  GetThief,
  GetWeapon,
  GiveTreasure,
  OwnershipTransferred,
  RewardsClaimed,
  Transfer,
  WithdrawalBNB,
  WithdrawalToken,
  copHeist,
  thiefHeist
} from "../generated/TRDCvault/TRDCvault"
import { transfer ,rewardsclaimed,thiefheists} from "../generated/schema"

export function Handletransfer(event: Transfer): void {
  let transactionHash = event.transaction.hash.toHexString()
  let token = transfer.load(transactionHash);
  if (token==null) {
       token = new transfer(transactionHash);
       token.id = event.transaction.hash.toHexString();
       token.from = event.params.from;
       token.to = event.params.to;
       token.value = event.params.value;

    }
token.save()
}
export function HandleRewardsClaimed(event: RewardsClaimed): void {
  let transactionHasha = event.transaction.from.toHexString()
  let tokenA = rewardsclaimed.load(transactionHasha);
       tokenA = new rewardsclaimed(transactionHasha);
       tokenA.id = event.transaction.hash.toHexString();
       tokenA.Amount = event.params.Amount;

tokenA.save()
}
export function HandlethiefHeist(event: thiefHeist): void {
    let transactionHashv = event.params.Thief;
    let tokenC = thiefheists.load(transactionHashv);
    tokenC = new thiefheists(transactionHashv);
    tokenC.id = event.transaction.hash.toHexString();
    tokenC.Bank = event.params.Bank;
    tokenC.BankPower = event.params.BankPower;
    tokenC.Thief = event.params.Thief;
    tokenC.ThiefPower = event.params.ThiefPower;
    tokenC.Result = event.params.Result;
    tokenC.Amount = event.params.Amount;
    tokenC.save()
}




// export function handleTransfer(event: TransferEvent): void {
//   let token = Token.load(event.params.tokenId.toString());
//   if (!token) {
//     token = new Token(event.params.tokenId.toString());
//     token.creator = event.params.to.toHexString();
//     token.tokenID = event.params.tokenId;
  
//     let tokenContract = TokenContract.bind(event.address);
//     token.contentURI = tokenContract.tokenURI(event.params.tokenId);
//     token.tokenIPFSPath = tokenContract.getTokenIPFSPath(event.params.tokenId);
//     token.name = tokenContract.name();
//     token.createdAtTimestamp = event.block.timestamp;
//   }
//   token.owner = event.params.to.toHexString();
//   token.save();
    
//   let user = User.load(event.params.to.toHexString());
//   if (!user) {
//     user = new User(event.params.to.toHexString());
//     user.save();
//   }
// }