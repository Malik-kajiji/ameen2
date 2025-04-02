const mongoose = require('mongoose');

const schema = mongoose.Schema

const packageSchema = new schema({
    name: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    durationDays: {
        type:Number,
        required:true,
    },
    pauseDaysAllowed: {
        type:Number,
        required:true,
    },
},{timestamps:true})



packageSchema.statics.createPackage = async function(name,price,durationDays,pauseDaysAllowed) {
    const exists = await this.findOne({name})
    if(exists){
        throw Error('الإسم مستخدم بالفعل!')
    }
    const package = await this.create({
        name,
        price,
        durationDays,
        pauseDaysAllowed
    })
    return package
}

packageSchema.statics.deletePackage = async function(_id) {
    const exists = await this.findOne({_id})
    if(!exists){
        throw Error('الإسم غير موجود!')
    }

    await this.findOneAndDelete({_id})
    
    return exists
}


module.exports = mongoose.model('package',packageSchema)