const mongoose = require('mongoose');

const schema = mongoose.Schema

const subscriptionSchema = new schema({
    userId: {
        type:String,
        required:true,
    },
    packageId: {
        type:String,
        required:true,
    },
    startData: {
        type:Date,
        required:true,
    },
    endData: {
        type:Date,
        required:true,
    },
    status: {
        type:String,
        enum:['active','paused'],
        default:'active'
    },
    createdBy: {
        type:String,
        required:true,
    }
},{timestamps:true})



subscriptionSchema.statics.createSubscription = async function(userId, packageId, createdBy, durationDays) {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + durationDays * 24 * 60 * 60 * 1000);
    const subscription = await this.create({
        userId,
        packageId,
        startDate,
        endDate,
        createdBy,
    });
    return subscription;
}

subscriptionSchema.statics.pauseSubsription = async function(_id) {
    await this.findOneAndUpdate({_id},{status:'paused'})

    return {message:'paused successfully'}
}

subscriptionSchema.statics.activeSubsription = async function(_id) {
    await this.findOneAndUpdate({_id},{status:'active'})

    return {message:'activated successfully'}
}


module.exports = mongoose.model('subscription',subscriptionSchema)