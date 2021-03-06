const mongoose = require("mongoose")

const pizzaSchema = new mongoose.Schema({
    name:{
        type:String
    },
    cost:{
        type:Number,
        min:1,
        max:1000
    },
    production:{
        type:Number,
        min:1,
        max:1000
    }
})

const storeSchema = new mongoose.Schema({
    profitmultiplier:{
        type:Number
    }
})

const sellerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    pizzaTokens:{
        type:Number,
        default:1000
    },
    menu: {
        type:[pizzaSchema],
        default:[]
    },
    discord_id:{
        type:String
    }, 
    stores:{
        type:[storeSchema],
        default:[{profitmultiplier:2}]
    },
    bathrooms:{
        type:Number,
        default:0
    },
    sodaMachine:{
        type:Number,
        default:0
    },
    toppingBar:{
        type:Number,
        default:0
    },
    playPlace:{
        type:Number,
        default:0
    },
    reviewScore:{
        type:Number,
        default:0
    },
    votingStreak:{
        type:Number,
        default:0
    },
    collects:{
        type:Number,
        default:0
    }
})

module.exports = {Seller:mongoose.model("Sellers", sellerSchema), sellerSchema, storeSchema}