import * as React from "react"
import { graphql, Link } from "gatsby"
import axios from "axios";
import Layout from "../components/layout"
import { Heading, Button, Box, Section, Container } from "../components/ui"


// const MyForm = () => {
    
//     const [serverState, setServerState] = useState({
//       submitting: false,
//       status: null
//     });
//     const handleServerResponse = (ok, msg, form) => {
//       setServerState({
//         submitting: false,
//         status: { ok, msg }
//       });
//       if (ok) {
//         form.reset();
//       }
//     };
//     const handleOnSubmit = e => {
//       e.preventDefault();
//       const form = e.target;
//       setServerState({ submitting: true });
//       axios({
//         method: "post",
//         url: "https://getform.io/f/4113f349-e99f-495a-b529-18c2cb40e11c",
//         data: new FormData(form)
//       })
//         .then(r => {
//           handleServerResponse(true, "Thanks!", form);
//         })
//         .catch(r => {
//           handleServerResponse(false, r.response.data.error, form);
//         });
//     };
//     return (
//         <Layout>

//                     <div>
//                         <div className="col-md-8 mt-5">
//                             <Heading>CONTACT</Heading>
//                             <form onSubmit={handleOnSubmit}>
//                             <div className="form-group">
//                                 <label for="exampleInputEmail1" required="required">Email address</label>
//                                 <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//                             </div> 
//                             <div className="form-group">
//                                 <label for="exampleInputName">Name</label>
//                                 <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
//                             </div>
//                             <div className="form-group">
//                                 <label for="exampleFormControlSelect1">Favourite Platform</label>
//                                 <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
//                                 <option>Github</option>
//                                 <option>Gitlab</option>
//                                 <option>Bitbucket</option>
//                                 </select>
//                             </div>
//                             <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
//                                 Submit
//                             </button>
//                             {serverState.status && (
//                                 <p className={!serverState.status.ok ? "errorMsg" : ""}>
//                                 {serverState.status.msg}
//                                 </p>
//                             )}
//                             </form>
//                         </div>
//                     </div>  
    
//          </Layout>
     
//     );
//   };
  
//   export default MyForm;

const Contact = () => {
    return (
        <Layout>
            <Section>
            <Container width="tight" center>
                <Box center>
                    <Heading>My Contact Page</Heading>
                </Box>
                    
                <form action="{Formeezy-Endpoint}" method="POST">
                        <Box  padding={2} center> 
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                        center
                                    ></input>
                        </Box>
                        <Box  padding={2} center> 
                                    <textarea
                                        placeholder="Enter message"
                                        name="message"
                                        required
                                        center
                                    ></textarea>
                        </Box>
                        <Box padding={3} center> 
                                    <Button type="submit" center>Send</Button>
                        </Box>
                </form>
            </Container>
            </Section>
        </Layout>  
    );
  };
  
  export default Contact;