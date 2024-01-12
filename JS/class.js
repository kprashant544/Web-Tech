class classroom{
    constructor(faculty,room_no){
        this.faculty = faculty;
        this.room_no = room_no;
    }

    //setter function for faculty
    set_faculty(faculty)
    {
        this.faculty = faculty;
    }

    //getter function for faculty
    get_faculty()
    {
        return this.faculty;
    }

    //setter function for room_no
    set_room_no(room_no)
    {
         this.room_no = room_no;
    }
  
    //getter function for room_no
    get_room_no()
    {
        return this.room_no;
     }
  

}
    const classroom1 = new classroom("csit",101);
    classroom1.set_faculty("bca");
    console.log(classroom1.get_faculty());

    classroom1.set_room_no(305);
    console.log(classroom1.get_room_no());


    //for 2nd classroom
    const classroom2 = new classroom("bim",201);
    console.log(classroom2.get_faculty());

    classroom2.set_room_no(501);
    console.log(classroom2.get_room_no());
        


