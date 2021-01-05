def matrixElementsSum(matrix):
    flag = {}
    tong = 0
    for i, row in enumerate(matrix):
        for j, item in enumerate(row):
            if j in flag:
                continue
            if item == 0:
                flag[j] = True
                continue
            tong += item
    return tong


