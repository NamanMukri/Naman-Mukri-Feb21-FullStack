def quick_sort(sequence):
    length=len(sequence)
    if length<=1:
        return sequence
    else:
        pivot=sequence.pop()
    items_greater,items_lower=[],[]
    for item in sequence:
        if item > pivot:
            items_greater.append(item)
        else:
            items_lower.append(item)
    return quick_sort(items_greater) + [pivot] + quick_sort(items_lower)
print(quick_sort([25,85,89,110,11,223,56,65,89,1,2,5,20]))