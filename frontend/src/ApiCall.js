// import React from "react";
// export default class FetchRandomUser extends React.Component{
//     state={
//         loading : true,
//         person : null,
//     };

//     async componentDidMount(){
//         const url = "http://localhost:5000/subscribers/";
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({person , loading :false });
//     }
//     render(){
//         return(
//             <div>
//                 {
//                     this.state.loading || !this.state.person ?
//                     (
//                         <div>loading...</div> 
//                     ):
//                     (
//                         <div>
//                             {this.state.person.name}
//                             {this.state.person.id}
//                             {this.state.person.address}
//                         </div>

//                     ) 
//                 }
//             </div>
//         );
//     }
// }