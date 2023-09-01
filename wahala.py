class Solution(object):
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i, j = 0, 0
        res = []

        while i < len(word1) and j < len(word2):
            res.append(word1[i])
            res.append(word2[j])
            i += 1
            j += 1

        # After the loop, one of the strings might have remaining characters.
        # Append them to the result if any.
        res.extend(word1[i:])
        res.extend(word2[j:])

        return "".join(res)
