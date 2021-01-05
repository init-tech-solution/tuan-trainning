def allLongestStrings(inputArray):
    longest = 0
    arr = []
    for i in inputArray:
        if len(i) == longest:
            arr.append(i)
        if len(i) > longest:
            longest = len(i)
            arr = [i]
    return arr

