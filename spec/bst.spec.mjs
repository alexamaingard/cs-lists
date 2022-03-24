import { bst } from '../src/bst.mjs'

console.log( bst );

describe('add', function() {
    it('correctly adds', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();       
        const myArray = tree.getOrdered(myRoot);
        
        expect(myArray).toEqual([4, 8, 9, 10, 11, 12, 15]);
    })
})

describe('remove', function() {
    it('correctly removes', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);
        tree.remove(9)

        const myRoot = tree.getRoot();
        const myArray = tree.getOrdered(myRoot);
        
        expect(myArray).toEqual([4, 8, 10, 11, 12, 15]);
    })
})

describe('minimum', function() {
    it('correctly finds minimum', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();
        const minimum = tree.findMinimum(myRoot);

        expect(minimum.data).toEqual(4);
    })
})

describe('maximum', function() {
    it('correctly finds maximum', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();
        const minimum = tree.findMaximum(myRoot);

        expect(minimum.data).toEqual(15);
    })
})

describe('search', function() {
    it('correctly finds', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();
        const mySearch = tree.search(myRoot, 8);

        expect(mySearch?.data).toEqual(8);
    })
})

describe('size', function() {
    it('correctly gets size', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();
        const mySize = tree.getSize(myRoot);
        
        expect(mySize).toEqual(7);
    })
})

describe('breadth', function() {
    it('correctly traverses breadth first', function() {

        //         15
        //        /
        //       10
        //      /  \
        //     8    12
        //    / \   /
        //   4   9 11 

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();
        const myArray = tree.getBreadthFirst(myRoot);
        
        expect(myArray).toEqual([15, 10, 8, 12, 4, 9, 11]);
    })
})


describe('ordered', function() {
    it('correctly gets ordered tree', function() {

        const tree = bst();
        tree.add(15)
        tree.add(10);
        tree.add(8);
        tree.add(4);
        tree.add(9);
        tree.add(12);
        tree.add(11);

        const myRoot = tree.getRoot();
        const myArray = tree.getOrdered(myRoot);
        
        expect(myArray).toEqual([4, 8, 9, 10, 11, 12, 15]);
    })
})