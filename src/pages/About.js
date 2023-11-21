import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Thank you very much. Let him flee that
           he accepts, but I will reveal all the guilt when it comes to suffering as it is
           look at the snacks. For there is nothing to refuse because of hatred of pleasures
           do all the easy things? By rejecting the blessed for us, who
           times, they do not know what they want but how to refuse
           most times They fall to be repulsed, especially with the labor of pain
           where shall I open? But those who are flattered by lust do not know the truth
           the greater I am, I will forgive the practice of pleasures
           to assume? By reason of carrying out the duties of our desert, we are astounded
           but rougher! We are pleased to lead them to be gentle
           but the pleasure of praising the convenience of some people often repels us free
           she will succeed in obtaining it.
​
Send feedback
Side panels
History
Saved
Contribute
        </p>
        <br />
        <p>
        The company itself is a very successful company. comfortable,
           they leave the free one to criticize when they are fleeing and at different times
           to do will happen to be blinded we lead of these wants most or who
           with pleasures that are often corrupted by hatred, indeed the pleasure of pains
           at the time? To be a wise man is less trouble, for no one blames him for his pains
           whatever he wants to prevent, we never lead the body worthy
           the inventor of the elders. For therefore our sorrows and sorrows
           some, that the pleasures should be wisely discerned by the pains of the labors
           so that unless there is a distinction nothing will come of flattery
           they don't know! Our pleasures will turn out to be repulsed or our duties will be softened
           at the time of the pleasures to be endured and those times further?
           But he is blessed with gentleness!
​
Send feedback
Side panels
History
Saved
Contribute
        </p>
      </Box>
    </Layout>
  );
};

export default About;