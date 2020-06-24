const mongoose = require('mongoose');


// uri for cloud mongoDB atlas database
const uri = "mongodb+srv://khanna:honululu@cluster69-ddhsv.mongodb.net/Medeli?retryWrites=true&w=majority"

// Connect to database
mongoose.connect(uri,{
	useNewUrlParser: true,
	useUnifiedTopology: true
});
	
//Schema
const schema = mongoose.Schema;
const MedicineSchema = new schema({
	name: String,
	expiry: Date,
	manufacture: Date,
	batch: String,
	mrp: Number,
	stock: Number
})

//Model
const Medicine = mongoose.model('Medicine', MedicineSchema, 'Medicine');

// query
function checkStock(name){
	var x = Medicine
			.find({name:name},{
				stock:1,
				_id: 0
			})
			.exec();
	return x;
}

function updateStock(name,qt){
	Medicine
    	.findOneAndUpdate({name:name}, {$inc : {'stock' : -qt}}, {new: true }).exec()
}

let q=checkStock('Honitus');

let s=q.then((data)=>{
	if(data[0]==undefined) {console.log("not in stock"); return 0;}
	else{
		if(data[0].stock>0) {updateStock('Honitus',10); console.log("updated stock"); return 1}
		else {console.log("not in stock"); return 0}
	}
})
