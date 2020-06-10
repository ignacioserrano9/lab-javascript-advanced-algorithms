class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    
    if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }else {
      return false
    }
  }

  display() {
    // ... your code goes here
  }

  isEmpty() {
    
    if (this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }


  push(item) {
    
    if (this.stackControl.length === this.MAX_SIZE ) {
      return 'Stack Overflow'
    } else {
      this.stackControl.push(item)
    }
    return this.stackControl
  }


  pop() {
    if (this.stackControl.length === 0){
      return 'Stack Underflow'
  }
    else {
       
      let f = this.stackControl[this.stackControl.length-1]
      this.stackControl.pop()
      return f
  }
}
}