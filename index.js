const mapToNegativize = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(-array[i])
    }
    return result;
}

const mapToNoChange = (array) => {
    return array;
}

const mapToDouble = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2)
    }
    return result;
}

const mapToSquare = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** 2)
    }
    return result;
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    for (let i = 0; i < sourceArray.length; i++) {
        startingPoint += sourceArray[i];
    }
    return startingPoint;
}

const reduceToAllTrue = (sourceArray) => {
    let value = true;
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] == false) {
            value = false;
        }
    }
    return value;
}

const reduceToAnyTrue = (sourceArray) => {
    let value = false;
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] == true) {
            value = true;
        }
    }
    return value;
}