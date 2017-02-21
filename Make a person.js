// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.




var Person = function(firstAndLast) {
    var nameArr = firstAndLast.split(' ');
  
    
    this.getFirstName = function(){
      return nameArr[0];
    };
    
    this.getLastName = function(){
      return nameArr[1];
    };
    
    this.getFullName = function(){
      return nameArr.join(' ');
    };
    
    this.setFirstName = function(fname){
      nameArr[0] = fname;
    };
    
     this.setLastName = function(lname){
      nameArr[1] = lname;
    };
    
    this.setFullName = function(fullName){
      nameArr[0] = fullName.split(' ')[0];
       nameArr[1] = fullName.split(' ')[1];
      
    };
    
    
    // return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFirstName();