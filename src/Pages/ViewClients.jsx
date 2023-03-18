import UserData from "../Components/UserData";
// import one from "../assets/1.svg";
// import two from "../assets/2.svg";
import userImage from "../assets/user.png"

const Data = [
  { company_name : [ "Infosys" , userImage ] , email : "management@infosys.com " , phone : "+91 9563214587" , person : "Vijayent Roy" , Facilitator : "-" , sites : 12 , tenants : "- -"   },
  { company_name : [ "Infosys" , userImage ] , email : "management@wipro.com " , phone : "+91 9563214587" , person : "Vijayent Roy" , Facilitator : "-" , sites : 12 , tenants : "- -"   },
  { company_name : [ "Infosys" , userImage ] , email : "management@infosys.com " , phone : "+91 9563214587" , person : "Vijayent Roy" , Facilitator : "-" , sites : 12 , tenants : "- -"   },
  { company_name : [ "Infosys" , userImage ] , email : "management@wipro.com " , phone : "+91 9563214587" , person : "Vijayent Roy" , Facilitator : "-" , sites : 12 , tenants : "- -"   },
]

const ViewClients = () => {                   
  return (           
    <div  >
      <h1>View Clients</h1> 
      <span>
        <b>
          Client Master / <span style={{ color: "grey" }}>
            View Clients
          </span>
        </b>
      </span>
      <br />
      <div className="p-3 mt-2"  style={{ background : "white" }} >  
        <div className="row align-items-center"  >
            <div className="col-sm-6" >
              <form action="">
                <input className="form-control" type="search"   name="user" placeholder="Search" id="" />
              </form>
            </div>
            <div className="col-sm-6">
                <div className="align-self-endd" >
                <button className="btn-btn" > Columns  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-btn" > Export  </button>

                  </div> 
                             </div>
        </div>
        <br />
        
        <UserData  Data={Data}  />

      </div>

      
    </div>
  );
};

export default ViewClients;


/* User */
