import { db } from "../connect.js";

let timebetween = 0;

export function repeatingFunction() {
  timebetween = setInterval(checkAccount, 1000 *60 *60 )
}


export function checkAccount() {
  
  const query = "UPDATE Subscription SET Status_Subscription = 0  WHERE END_DATE < NOW()";
  const query2 = "UPDATE User SET Role = 'basic' WHERE Subscription_idSubscription = (SELECT idSubscription FROM Subscription WHERE END_DATE < NOW())";

  db.query(query)
  

  db.query(query2)
  

  console.log("checking accounts")
}