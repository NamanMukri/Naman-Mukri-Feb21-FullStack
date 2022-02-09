word1,word2="abcf","bca"        
set1=set(word1)
set2=set(word2)        
freq1,freq2={},{}        
for char in word1:
    freq1[char]=freq1.get(char,0)+1
        
for char in word2:
    freq2[char]=freq2.get(char,0)+1
if sorted(freq1.values())==sorted(freq2.values()) and sorted(set1)==sorted(set2):
    print(True)
elif len(word1)!=len(word2):
    print(False)
else: print(False)