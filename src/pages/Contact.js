import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import axios from "axios";
import Layout from "../components/layout"
import { Heading, Button, Box, Section, Container, Text, Kicker } from "../components/ui"

const FORM_ENDPOINT = "";

const ContactForm = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <Box>Thank you!</Box>
        <Text center>{status}</Text>
      </>
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
