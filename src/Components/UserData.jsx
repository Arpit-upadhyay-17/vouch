import React from 'react'


const DataTable = ({ item }) => {
    return(
        <tr  >
           <td> { item.company_name[0] }</td>
            <td className='email' > { item.email } </td>
           <td> { item.phone }</td>
           <td> { item.person }</td>
           <td> { item.Facilitator }</td>
           <td> { item.sites } </td>
           <td> { item.tenants } </td>
           <td> Action </td>
        </ tr >
    )
}

const UserData = ( { Data } ) => {

  console.log(Data);
    
    if(!Data){
        return (
            <>Reload...</>
        )
    } 

  return (

    <table className="table" >
        <thead>
            <tr  >
            { Object.keys(Data[0]).map((fieldName , i) => <th key={i} scope="col"  > { fieldName } </th> )}
                 <th> <b>Action</b></th>
            </tr>
        </thead>

        <tbody>

            {  Data.map(( item , i)  =>  <DataTable key={i}  item={item} />   ) }

        </tbody>
    </table>
    // <div className="User-data">
    //      <div className="row table-heading">
    //         { Object.keys(Data[0]).map((fieldName , i) => <p key={i}  > <b  > { fieldName } </b>  </p> )}
    //              <p> <b>Action</b></p>
    //      </div>
    //      <div className="data">
    //      {  Data.map(( item , i)  =>  <DataTable key={i}  item={item} />   ) }
    //      </div>
    // </div>
    )
}





export default UserData

