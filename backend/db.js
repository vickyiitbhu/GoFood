const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://vickybijarniyaciv20:V1bmongo@cluster0.xs6kngz.mongodb.net/gofoodmern?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodcategory = await mongoose.connection.db.collection("foodCategory");
                foodcategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory =catData;
                    }
                })
                // if(err) console.log(err);
                // else
                // {
                //     global.food_items = data;

                // }
            })
        }
    });
}

module.exports = mongoDB;

