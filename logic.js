function search(arr,title){
    return arr.filter(ele => ele.title.toLowerCase().includes(title.toLowerCase().trim()))
}



if (typeof module !== "undefined") {
    module.exports = search;
}
