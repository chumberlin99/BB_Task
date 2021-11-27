var arr = [
{
    a:"foo",
    b:"bar",
    c:{
        d:"foo",
        e:"bar",
        f:{
            g:"test",
            h:"bar"
        }
    }
}
];

arr.filter(item=> itrableObj(item) );

function itrableObj(obj){
    for(props in obj){
        if(typeof(obj[props])=="object"){
            itrableObj(obj[props])
        }
        else{
            if(obj[props] == "bar"){
                obj[props]="foo-bar"
                console.log(props + ':', obj[props])
            }
        }
    }
}
console.log(arr)
