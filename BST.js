
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17




class Node{
  // initailizing the node (each node has a data, left node and right node)
  constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree{

  // initializing the root to null
  constructor(){
      this.root = null;
  }

  getRoot(){
      return this.root;
  }

  // add new node to the tree
  insert(data){
      const newNode = new Node(data);

      if(this.root === null){
          this.root = newNode;
      }else{
          this.insertNode(this.root, newNode);
      }
  }

  // helper recursive (private) method for adding a new node
  insertNode(node, newNode){
      if(newNode.data < node.data){
          
          if(node.left === null){
              node.left = newNode;
          }else{
              this.insertNode(node.left, newNode);
          }

      }else{

          if(node.right === null){
              node.right = newNode;
          }else{
              this.insertNode(node.right,newNode);
          }

      }
  }

  // binary search
  search(data){
      return this.searchNode(this.root, data);
  }

  // helper recursive method for binary search
  searchNode(node, data){
      if(node === null){
          
          return null;
      
      }else if(data < node.data){
      
          return this.searchNode(node.left, data);
      
      }else if(data > node.data){
      
          return this.search(node.right, data);
      
      }else{
      
          return node;
      
      }
  }

  remove(data){
      this.root = this.removeNode(this.root, data);
  }


  removeNode(node, data){
      if(node == null){
          return null;
      }else if(data < node.data){
          node.left = this.removeNode(node.left,data);
          return node;
      }else if(data > node.data){
          node.right = this.removeNode(node.right,data);
          return node;
      }else{

          // delete leaf node (with no children)
          if(node.left === null && node.right === null){
              node = null;
              return node;
          }

          // delete node with one children
          if(node.left === null){
              node = node.right;
              return node;
          }else if(node.right === null){
              node = node.left;
              return node;
          }

          // delete node with two children
          // 1- find the minimum node in the right subtree
          let minRightNode = this.findMinNode(node.right);

          // 2- assign the minimum node to the current node
          node.data = minRightNode.data;

          // 3- remove the minimum node in the right subtree
          node.right = this.removeNode(node.right,minRightNode.data);
          return node;

      }
  }


  findMinNode(node){
      if(node.left == null){
          return node;
      }else{
          return this.findMinNode(node.left);
      }
  }

//------------------------------------------------------------ tree traversal ----------------------------------------------------------

  // Depth first traversal (inorder, preorder, postorder)

  // 1- inorder
  inorder(node){
      if(node != null){
          this.inorder(node.left);
          console.log(node.data);
          this.inorder(node.right);
      }
  }

  // 2- preorder
  preorder(node){
      if(node != null){
          console.log(node.data);
          this.preorder(node.left);
          this.preorder(node.right);
      }
  }


  // 3- postorder
  postorder(node){
      if(node != null){
          this.postorder(node.left);
          this.postorder(node.right);
          console.log(node.data);
      }
  }
  

  // Bredth First Traversal

  // try to solve this problem using queue :)

}


// ------------------------------------------testing the tree------------------------------------------------

// create an object for the BinarySearchTree
const BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                       
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let root = BST.getRoot();
// console.log(JSON.stringify(root, null, 4));
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
           
// Removing node with no children
// BST.remove(5);
           
          
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17
           
                       
root = BST.getRoot();
           
// prints 7 9 10 13 15 17 22 25 27
// BST.inorder(root);
           
// Removing node with one child
BST.remove(7);
           
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17
           
           
root = BST.getRoot();

// prints 9 10 13 15 17 22 25 27
// BST.inorder(root);
           
// Removing node with two children
BST.remove(15);
// console.dir(root);
   
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

// root = BST.Root;
// console.log("inorder traversal");

// // prints 9 10 13 17 22 25 27
// BST.inorder(root);
           
// console.log("postorder traversal");
// BST.postorder(root);
// console.log("preorder traversal");
// BST.preorder(root);