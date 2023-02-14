function myEach(collection, alert) {
    //grabs the valuse of object to make array
    let array = Object.values(collection)
    array.forEach(element => alert(element))
    /* Long hand code using for loop
    for(let i = 0; i < array.length; i++) {
        alert(array[i])
    }
    for of loop
    for(let element of array) {
        alert(element)
    } */
    return collection
}

function myMap(collection, callback) {
    let array = Object.values(collection)
    let newArray = []
    for(let element of array) {
        //Pushes elements into new array
        newArray.push(callback(element))
    }
    return newArray
}

function myReduce(collection, callback, ...acc) {
    let array = Object.values(collection)
    let total
    let i
    if(acc.length > 0) {
        total = acc[0]
        i = 0
    } else {
        total = array[0]
        i = 1
    }
    for(i; i < array.length; i++) {
        total = callback(total, array[i], collection)
    }
    return total
}

function myFind(collection, predicate) {
    let array = Object.values(collection)
    for (let i = 0; i < array.length; i++) 
    if (predicate(array[i])) 
    return array[i]
}

function myFilter(collection, predicate) {
    let array = Object.values(collection)
    let filterTrue = array.filter(predicate)
    return filterTrue
}

function mySize(collection) {
    let array = Object.values(collection)
    return array.length
}

function myFirst(array, n) {
    let result = []
    if (n == undefined) {
        return array[0]
    }
    let m
    if (array.length < n) {
        m = array.length
    } else {
        m = n
    }
    for (let i = 0; i < m; i++) {
        result.push(array[i])
    } return result
}

function myLast(array, n) {
    if (n == undefined) {
        return array[array.length - 1]
    }
    return array.slice(Math.max(array.length -n , 0))
}

function myKeys(object) {
    return Object.getOwnPropertyNames(object)
}

function myValues(object) {
    return Object.values(object)
}