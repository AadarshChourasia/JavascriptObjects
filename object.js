function person(FirstName, LastName, OfficeAddress) {
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.OfficeAddress = OfficeAddress;
   }

   var person1 = new person("Suresh", "Verma", "Delhi");
   var person2 = new person("Ramesh", "Sharma", "Mumbai");
   var person3 = new person("Mukesh", "Yadav", "Kolkata");

   console.log("The firstnames are : " +person1.FirstName + " ," + person2.FirstName + " ,"+ person3.FirstName);
   console.log("The second names are: " + person1.LastName + " ," + person2.LastName)+  " ,"+ person3.LastName);
   console.log("The offices OfficeAddress are :" + person1.OfficeAddress + " ," + person2.OfficeAddress + " ," +person3.OfficeAddress);

   
