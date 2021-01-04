def adjacentElementsProduct(inputArray):
    max = inputArray[0] * inputArray[1]
    for i in range(len(inputArray) - 1):
        print('==>', inputArray[i], inputArray[i + 1])
        a = inputArray[i] * inputArray[i + 1]
        if a > max:
            max = a
    return max




