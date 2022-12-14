import React, { useState } from "react"
// import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Heading, Button, Box, Section, Container, Input, TextInput } from "../components/ui"


const ContactForm = () => {

    const [formState, setFormState] = useState({
      name: "",
      email: ""
    })

    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }

    const handleChange = e => (
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    )
    
    const handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    }

    return (

        <Layout>
            <Section>
                <Container width="tight" center>
                        <Box  padding={1} center>
                            <Heading>CONTACT</Heading>
                        </Box>
                            <form
                            onSubmit={handleSubmit}
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            >
                            <input type="hidden" name="form-name" value="contact" />
                            <Box  padding={2} center>
                                <Input 
                                type="text"
                                placeholder="Your name"
                                name="name"
                                onChange={handleChange}
                                value={formState.name}
                                required
                                />
                            </Box>
                            <Box  padding={2} center>
                                <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={formState.email}
                                required
                                />
                            </Box>
                            <Box className="form-group" padding={1} center>
                                <TextInput
                                placeholder="Your message"
                                name="message"
                                required
                                />
                            </Box>
                            <Box  padding={1} center>
                                <Button type="submit">
                                Send a message
                                </Button>
                            </Box>
                            </form>
                </Container>
            </Section>
        </Layout>
      )
}

export default ContactForm;
