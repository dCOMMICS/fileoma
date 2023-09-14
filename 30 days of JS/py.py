class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle=="":
            return 0
        else:
            for i in range(len(haystack)):
                if haystack[i]==needle[0]:
                    if haystack[i:i+len(needle)]==needle:
                        return i
            
            return -1
       
        
        # questio 
         list = [1,2,3,4,5,6,7,8,9]
         
         for item in list:
             
             if item == 0:
             list.remove(item)
             list.append(item)
             
             print(list)