import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./FAQ.css";
import { useState } from "react";
import theme from "../theme/theme";

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const [expanded1, setExpanded1] = useState(false);
  
  const [expanded2, setExpanded2] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };
  const handleAccordionChangeOne = () => {
    setExpanded1(!expanded1);
  };
  const handleAccordionChangeTwo = () => {
    setExpanded2(!expanded2);
  };
  return (
    <Box padding="6.25rem 8rem">
      <Box className="text-centered">
        <Typography variant="h3" color="#BED245" marginBottom="2%">
          Frequently <span style={{ color: theme.palette.primary.main }}>Asked Questions</span>
        </Typography>
        <Typography variant="body2" color="theme.palette.primary.main">
          Here are some of the most common questions our homebuyers have before
          they get started—and the answers too, of course.
        </Typography>
      </Box>

      <Box marginTop="4.3rem">
        <Accordion expanded={expanded} className="accordion-box">
          <AccordionSummary
            expandIcon={
              expanded ? (
                <RemoveIcon onClick={handleAccordionChange} />
              ) : (
                <AddIcon onClick={handleAccordionChange} />
              )
            }
          >
            <Typography>
              What are the steps to purchase a Tri Pointe home?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">
              There are three simple steps to purchasing a new Tri Pointe home.
              1. Explore and choose your neighborhood of interest, then schedule
              an in-person tour at our new home gallery or set up time to
              connect virtually. During the visit, your New Home Advisor will
              help you select a new home that fits your needs and lifestyle. 2.
              Financing is an important step in buying a new home and we’re with
              you every step of the way. Getting pre-qualified with our
              affiliated mortgage company, Tri Pointe Connect®, for your desired
              neighborhood will put you one step closer to the home of your
              dreams. 3. Execute your new home purchase agreement and complete
              your loan application. Our team will guide you through the process
              for final loan approval, loan funding and receiving keys to your
              new home. Download our Homebuying Journey guide here to dive
              deeper into every step of the homebuying process, from purchasing
              to design, to construction and move in day.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded1} className="accordion-box">
          <AccordionSummary
            expandIcon={
              expanded ? (
                <RemoveIcon onClick={handleAccordionChangeOne} />
              ) : (
                <AddIcon onClick={handleAccordionChangeOne} />
              )
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How can I personalize my new home?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">
              Personalization is one of the most important steps in the
              homebuying process. The Design Studio is a thoughtfully curated
              space where you can personalize many aspects of your home. Through
              our Design Studio, you’ll meet with your personal Design
              Consultant who will guide you through the entire process, which
              includes selecting the right options for your home, taking into
              consideration your style and budget, as well as the floorplan of
              your new home. To learn more about personalizing your new Tri
              Pointe home, visit our Design Studio FAQ’s
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded2} className="accordion-box accordian-box-bottom">
          <AccordionSummary
            expandIcon={
              expanded ? (
                <RemoveIcon onClick={handleAccordionChangeTwo} />
              ) : (
                <AddIcon onClick={handleAccordionChangeTwo} />
              )
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What is a priority group?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption">
              Personalization is one of the most important steps in the
              homebuying process. The Design Studio is a thoughtfully curated
              space where you can personalize many aspects of your home. Through
              our Design Studio, you’ll meet with your personal Design
              Consultant who will guide you through the entire process, which
              includes selecting the right options for your home, taking into
              consideration your style and budget, as well as the floorplan of
              your new home. To learn more about personalizing your new Tri
              Pointe home, visit our Design Studio FAQ’s
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default FAQ;
