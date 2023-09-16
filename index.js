function myEach (collection, callback) {
    let newCollection =[]
    if (Array.isArray(collection) === true) {
        console.log('this is an array')
        for(let item of collection) {
            newCollection.push(item);
           callback()
        }
    }
    else {
        let values = Object.values(collection)
        values.forEach((value) => callback(value))
        return collection
    }
   
    
    return newCollection
}

function myMap ( collection, callback ) {
    console.log(collection)
    let newCollection = Object.values(collection)
    let newArray =  newCollection.map((item) => callback(item))
    return newArray
}

function myReduce (collection, callback, initial) {
    let newCollection = Object.values(collection)

    
if (!initial ) {
    initial = newCollection[0]
   newCollection = newCollection.slice(1)
    
}
for (let i=0; i<newCollection.length ; i++) {
        
    initial = callback(initial, newCollection[i], newCollection)
}


return initial
    }


function myFind (collection, predicate) {
    let newCollection = Object.values(collection)
    for (let i=0; i<newCollection.length; i++){
        if(predicate(newCollection[i]) === true){
            return newCollection[i]
        }
    }
}

function myFilter (collection, predicate) {
    let newCollection = Object.values(collection)
    let result = []
    for (let i=0; i<newCollection.length; i++){
        if (predicate(newCollection[i]) === true) {
            result.push(newCollection[i])
        }
        
    }
    return result
}

function mySize (collection){
  let newCollection = Object.values(collection)
  let length = newCollection.length
  return length
}

function myFirst (collection, n) {
    let newCollection = Object.values(collection)
    if (n !== undefined) {
        return newCollection.slice(0,n)
    }
    return newCollection[0]
}

function myLast (array, n) {
    let newCollection = Object.values(array)
    if ( n!== undefined) {
        return newCollection.slice(-n)
    }
    return newCollection[array.length-1]
}

function myKeys(object) {
    let newCollection = Object.keys(object)
  return newCollection
}

function myValues (object) {
    let newCollection = Object.values(object)
    return newCollection
}

