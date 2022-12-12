import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Heading, Button, Box, Section, Container, Text, Kicker } from "../components/ui"

const FORM_ENDPOINT = "";

const ContactForm = () => {

    const [formState, setFormState] = useState({
      name: "",
      email: ""
    })

    const handleChange = e => (
      setFormState({
        ...formState,
        [e.target.name]: e.tagret.value,
      })
    )
    
    const handleSubmit = e => (
      e.preventDefault()
    )

    return (

        <Layout>
            <Section>
                <Container width="tight" center>
                        <Box  padding={1} center>
                            <Heading>CONTACT</Heading>
                        </Box>
                            <form
                            method="POST"
                            target="_blank"
                            data-netlify="true"
                            netlify_honeypot="bot-field"
                            >
                            <Box  padding={2} center>
                                <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                class="form-control"
                                onChange={handleChange}
                                value={formState.name}
                                required
                                />
                            </Box>
                            <Box  padding={2} center>
                                <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                class="form-control"
                                onChange={handleChange}
                                value={formState.email}
                                required
                                />
                            </Box>
                            <Box className="form-group" padding={1} center>
                                <textarea
                                placeholder="Your message"
                                name="message"
                                class="form-control form-control-lg"
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
