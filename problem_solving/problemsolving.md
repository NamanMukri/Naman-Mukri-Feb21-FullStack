# https://leetcode.com/problems/3sum/

    class Solution(object):
        def threeSum(self, nums):
            """
            :type nums: List[int]
            :rtype: List[List[int]]
            """
            nums.sort()
            N, result = len(nums), []
            for i in range(N):
                if i > 0 and nums[i] == nums[i-1]:
                    continue
                target = nums[i]*-1
                s,e = i+1, N-1
                while s<e:
                    if nums[s]+nums[e] == target:
                        result.append([nums[i], nums[s], nums[e]])
                        s = s+1
                        while s<e and nums[s] == nums[s-1]:
                            s = s+1
                    elif nums[s] + nums[e] < target:
                        s = s+1
                    else:
                        e = e-1
            return result

![](2022-01-25-10-43-16.png)

# https://leetcode.com/problems/kth-largest-element-in-an-array/

    class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        heapq.heapify(nums)
        amount = len(nums)
        while amount > k:
            heapq.heappop(nums)
            amount -= 1
        return nums[0]

![](2022-01-25-12-41-17.png)


# https://www.hackerrank.com/challenges/alternating-characters/problem
# https://www.hackerrank.com/challenges/special-palindrome-again/problem
# https://leetcode.com/problems/array-of-doubled-pairs/
# https://leetcode.com/problems/unique-email-addresses/
# https://leetcode.com/problems/reorder-data-in-log-files/
