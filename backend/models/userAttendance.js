const mongoose = require('mongoose');

const schema = mongoose.Schema

const userAttendanceSchema = new schema({
    userId: {
        type:String,
        required:true,
    },
},{timestamps:true})

userAttendanceSchema.statics.createAttend = async function(userId) {
    const attend = await this.create({
        userId,
    });
    return attend;
}

userAttendanceSchema.statics.getUserAttendance = async function(userId) {
    const attend = await this.find({
        userId,
    });
    return attend;
}

module.exports = mongoose.model('userAttendance',userAttendanceSchema)