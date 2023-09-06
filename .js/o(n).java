package com.codewithmosh;

public class Main {
    public void log(int[] number){
        //o(1)
        System.out.println(numbers[0];)
    }
}



// STREAK 6 DAYS // 


class Solution {
    public ListNode[] splitListToParts(ListNode root, int k) {
        ListNode[] res = new ListNode[k];

        if (root == null) {
            return res;
        }

        ListNode curNode = root;
        int count = 0;

        while (curNode != null) {
            curNode = curNode.next;
            ++count;
        }

        int size = count / k, rem = count % k;

        curNode = root;
        for (int i = 0; i < k; i++) {
            ListNode head = curNode;
            for (int j = 0; j < size + (i < rem ? 1 : 0) - 1; j++) {
                if (curNode != null) {
                    curNode = curNode.next;
                }
            }

            
            if (curNode != null) {
                ListNode preNode = curNode;
                curNode = curNode.next;
                preNode.next = null;
            }
            res[i] = head;
        }
        return res;
    }

}

// repeated substring pattern//

public class Solution {
    public boolean repeatedSubstringPattern(String str) {
        for (int i = 1; i <= str.length() / 2; i ++) {
            if (str.length() % i == 0) {
                if (str.substring(0, str.length() - i).equals(str.substring(i))) {
                    return true;
                }
            }
        }
        return false;
    }
}