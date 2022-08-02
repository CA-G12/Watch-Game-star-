function search(arr,title){
    return arr.filter(ele => ele.title.toLowerCase().includes(title.toLowerCase().trim()))
}

function addToArr(arr,obj){
    arr = [...arr , obj]
    return arr 
}


if (typeof module !== "undefined") {
    module.exports = { search , addToArr};
}
