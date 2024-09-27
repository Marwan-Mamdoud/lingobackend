import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  userId: { type: String },
  stripeCustomerId: { type: String },
  stripeSubscriptionId: { type: String },
  stripePriceId: { type: String },
  stripeCurrentPeriodEnd: { type: Date },
});

const UserSubscription = mongoose.model("User_Subscription", Schema);

export default UserSubscription;
