s="aa"
longest = -1
visited = {}
for i, c in enumerate(s):
    if c in visited:
        longest = max(longest, i - visited[c] - 1)
    else:
        visited[c] = i
            
print(longest)
