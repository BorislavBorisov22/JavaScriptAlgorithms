class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}

class BinarySearchTree {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.root = null;
    }


    /**
     * Inserts new value in the tree
     * 
     * @param {any} value 
     * @returns {void}
     * 
     * @memberOf BinarySearchTree
     */
    insert(value) {
        const newNode = new Node(value, null, null);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (this.compareFunc(newNode.data, current.data) < 0) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                }

                current = current.right;
            }
        }
    }


    /**
     * Inserts many values passed as comma seperated parameters
     * to method
     * 
     * @param {any} values 
     * 
     * @memberOf BinarySearchTree
     */
    insertMany(...values) {
        values.forEach(value => this.insert(value));
    }

    _inOrder(node, callback) {
        if (!node) {
            return;
        }

        this._inOrder(node.left, callback);
        callback(node);
        this._inOrder(node.right, callback);
    }

    /**
     * Makes in order traversal of the tree
     * and calls the passed callback function for each node
     * passing the current node to the callback function
     * 
     * @param {function(node)} callback 
     * 
     * @memberOf BinarySearchTree
     */
    inOrder(callback) {
        const current = this.root;
        this._inOrder(current, callback);
    }

    _preOrder(node, callback) {
        if (!node) {
            return;
        }

        callback(node);
        this._preOrder(node.left, callback);
        this._preOrder(node.right, callback);
    }

    /**
     * Makes pre order traversal of the tree
     * and calls the passed callback function for each node
     * passing the current node to the callback function
     * 
     * @param {function(node)} callback 
     * 
     * @memberOf BinarySearchTree
     */
    preOrder(callback) {
        const current = this.root;
        this._preOrder(current, callback);
    }

    _postOrder(node, callback) {
        if (!node) {
            return;
        }

        this._postOrder(node.left, callback);
        this._postOrder(node.right, callback);
        callback(node);
    }

    /**
     * Makes pre order traversal of the tree
     * and calls the passed callback function for each node
     * passing the current node to the callback function
     * 
     * @param {function(node)} callback 
     * 
     * @memberOf BinarySearchTree
     */
    postOrder(callback) {
        const current = this.root;
        this._postOrder(current, callback);
    }
}

const tree = new BinarySearchTree((a, b) => a - b);
tree.insert(22);
tree.insert(44);
tree.insert(99);
tree.insert(30);
tree.insert(28);
tree.insert(30)

// tree.traverse((node) => console.log(node.data));
const preOrder = [];
const inOrder = [];
const postOrder = [];
tree.preOrder((node) => preOrder.push(node.data));
tree.inOrder((node) => inOrder.push(node.data));
tree.postOrder((node) => postOrder.push(node.data));

console.log(preOrder, 'preOrder');
console.log(inOrder, 'inOrder');
console.log(postOrder, 'postOrder');

module.exports = BinarySearchTree;