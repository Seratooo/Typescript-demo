interface User{
  sms:string;
}

export class MyDataBase{

  private static Instance: MyDataBase | null = null
  private sms:User[] = []


  public static getInstance(){
    if(MyDataBase.Instance == null){
      MyDataBase.Instance = new MyDataBase()
    }
    return MyDataBase.Instance
  }

  add(msg:User){
    this.sms.push(msg);
  }
  show(){
    for(const sms of this.sms){
      console.log(sms)
    }
  }

}

const db = MyDataBase.getInstance()

db.add({sms:'Hello Word'})
db.show()



/*
interface User {
  name: string;
  age: number;
}


export class MyDataBaseClassic {
  private static instace: MyDataBaseClassic | null = null;
  private users: User[] =[]
  private constructor(){ }

  public static getInstante(): MyDataBaseClassic{
    if(MyDataBaseClassic.instace == null){
      MyDataBaseClassic.instace = new MyDataBaseClassic();
    }

    return MyDataBaseClassic.instace;
  }

  add(user: User):void{
    this.users.push(user);
  }

  remove(index:number):void{
    this.users.splice(index,1);
  }

  show():void{
    for(const user of this.users){
      console.log(user)
     
    }
  }
}

const Mydb = MyDataBaseClassic.getInstante();
Mydb.add({name:'Serato',age:21})
Mydb.add({name:'Paulo',age:21})
Mydb.add({name:'Miranda',age:25})
Mydb.add({name:'Mau',age:10})

Mydb.show()*/