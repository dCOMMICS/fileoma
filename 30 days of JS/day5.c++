class Solution {
	ListNode cloneTheLinkedList(ListNode head) {
		ListNode currNode = head;
		while (currNode != null) {
			ListNode copyNode = new ListNode(currNode.data);
			copyNode.next = currNode.next;
			currNode.next = copyNode;
			currNode = currNode.next.next;	
		}
		currNode = head;
		while (currNode != null) {
			if (currNode.random != null) {
				currNode.next.random = currNode.random.next;
			}
			currNode = currNode.next.next;
		}
		head = head.next;
		currNode = head;
		while (currNode.next != null) {
			currNode.next = currNode.next.next;
			currNode = currNode.next;
		}
		return head;
	}
}