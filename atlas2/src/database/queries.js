
function getDistricts(){
const db=new Connection;
let data =  db.database()
.from('district')
.select('*');
data.then((result) => {
console.log(result.data);
}).catch((err) => {
console.log(error);
});

}