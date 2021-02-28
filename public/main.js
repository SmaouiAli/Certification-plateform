
console.log("main connected")

var createCertificate = function(){
 var name = $('#student-name').val()
 console.log(name);
 request.create(name,(res)=>{
     console.log(res)
 })
}

$('#create').on('click',()=>{
    createCertificate()
})