"use strict";
/**
 * class stack contain two attributes the array designing the stack and sens as reverse here
 * the sens we used ad normal array with shift and unshift
 * or as a stack using pop and push
 */
class Stack {

    /**
     * 
     * @param  {...any} items 
     */
    constructor(...items){
        this.reverse = false;
        this.stack = [...items];
    }

    push(...items){
        return this.reverse
            ? this.stack.unshift(...items)
            : this.stack.push(...items);

    }

    pop() {
        return this.reverse
            ? this.stack.shift()
            : this.stack.pop();
    }

}

const stack = new Stack(4,5,6);

//here we reverse and add element to the bottom of the stack
stack.reverse = true;
console.log("after adding -pushing here the new size of the stack is " + stack.push(1,2,3,'david'));
console.log(stack.stack);

//normal why we tacking element to the top of the stack here 6
stack.reverse = false;
console.log('we took via pop ==> ' + stack.pop());
console.log(stack.stack);

//using shift taking from the buttom
stack.reverse = true;
console.log('we took via shift ==> ' + stack.pop());
console.log(stack.stack);

