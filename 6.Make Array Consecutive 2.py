def makeArrayConsecutive2(statues):
    max = 0
    min = 20
    for i in range(len(statues)):
        if statues[i] > max:
            max = statues[i]
        if statues[i] < min:
            min = statues[i]
    return (max - min - (len(statues) - 1))

