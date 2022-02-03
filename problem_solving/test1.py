a = "xbdef"
b = "xecab"
res=False
for i in range(0,len(a)):
    a_pre,a_suf=a[:i],a[i:]
    b_pre,b_suf=b[:i],b[i:]
    if a_pre + b_suf==(a_pre + b_suf)[::-1] or b_pre+a_suf==(b_pre+a_suf)[::-1]:
        res=True
        break
    else:
        res=False
print(res)