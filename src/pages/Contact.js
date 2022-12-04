import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import axios from "axios";
import Layout from "../components/layout"
import { Heading, Button, Box, Section, Container, Text, Kicker } from "../components/ui"

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
       <Layout>
            <Section>
                <Container width="tight" center>
                    <Heading>Thank you!</Heading>
                    <Text>We'll be in touch soon.</Text>
                </Container>
            </Section>
        </Layout>
    );
  }

  return (

    <Layout>
        <Section>
            <Container width="tight" center>
                    <Box  padding={1} center>
                        <Heading>CONTACT</Heading>
                    </Box>
                        <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                        >
                        <Box  padding={2} center>
                            <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            class="form-control"
                            required
                            />
                        </Box>
                        <Box  padding={2} center>
                            <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            class="form-control"
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
  );
};

export default ContactForm;
