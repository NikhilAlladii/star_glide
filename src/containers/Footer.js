import { Box, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    "Tri Pointe Solutions",
    "LiveAbility",
    "Homeowners",
    "Brokers",
    "Careers",
    "Trade Partners",
    "Investors",
    "Contact Us",
  ];

  const footer_links = [
    "Do Not Sell My Personal Information",
    "Equal Housing Opportunity",
    "Terms and Conditions",
    "Privacy Policy",
    "Your California Privacy Rights",
    "Legal Notices",
    "State Licensing and Notices",
    "Sitemap",
    "Where We Build",
  ];

  const navigate = useNavigate();

  const goToYourHomePage = () => {
    navigate(`/your-new-home`);
  };

  const goToFinanacePage = () => {
    navigate("financing-your-home");
  };
  return (
    <Box>
      <Box className="footer-links">
        <Box className="life-group-logo">
          <img
            src="https://www.tripointehomes.com/wp-content/themes/tripointe_homes/front-end/build/static/media/life-inspiring.9635878e.png"
            alt="homes"
          />
        </Box>
        <Box className="logo-links">
          {links.map((link, i) => (
            <Link
              className="about-footer-link"
              key={i}
              sx={{
                padding: "0px 10px",
                color: "#545454",
                fontSize: "15px",
                fontWeight: "300",
              }}
              to="/about"
            >
              {link}
            </Link>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", padding: "39px 5% 0",cursor:"pointer" }}>
        <Box sx={{ opacity: "1", color: "#545454" }} onClick={goToYourHomePage} >
          <YouTubeIcon sx={{ fontSize: "35px", marginRight: "15px" }} />
          <InstagramIcon sx={{ fontSize: "35px", marginRight: "15px" }} />
          <LinkedInIcon sx={{ fontSize: "35px", marginRight: "15px" }} />
          <FacebookIcon sx={{ fontSize: "35px", marginRight: "15px" }} />
        </Box>
        <Box></Box>
      </Box>
      <Box></Box>

      <Box sx={{ padding: "35px 5%" }}>
        <div className="copyrightLinks-div" style={{ marginBottom: "1rem" }}>
          <div className="copyrightCaption">
            <Typography variant="caption">
              © 2023 Tri Pointe Homes, Inc. All rights reserved.
            </Typography>
          </div>
          <div>
            {footer_links.map((link, i) => (
              <Typography
                key={i}
                className="copyrightLinks"
                variant="caption"
                sx={{ cursor: "pointer" }}
                onClick={goToYourHomePage}
              >
                {link}
              </Typography>
            ))}
          </div>
        </div>
        <p
          style={{
            fontWeight: "300",
            fontSize: "11px",
            lineHeight: "1rem",
            color: "#545454",
          }}
        >
          *The prices of our homes, included features, plans, specifications,
          promotions/incentives, neighborhood build-out and available locations
          are subject to change without notice. Stated dimensions, square
          footage and acreage are approximate and should not be used as a
          representation of any home’s or homesite’s precise or actual size,
          location or orientation. There is no guarantee that any particular
          homesite or home will be available. No information or material herein
          is to be construed to be an offer or solicitation for sale. A
          Broker/Agent must register their client in person on client’s first
          visit at each community for a Broker/Agent to receive a commission or
          referral fee, if available. Not all features and options are available
          in all homes. Unless otherwise expressly stated, homes do not come
          with hardscape, landscape, or other decorator items. Any photographs
          or renderings used herein reflect artists’ conceptions and are for
          illustrative purposes only. Community maps, illustrations, plans
          and/or amenities reflect our current vision and are subject to change
          without notice. Maps not to scale. Photographs or renderings of people
          do not depict or indicate any preference regarding race, religion,
          gender, sexual orientation, disability, familial status, or national
          origin. Some amenities may not yet be constructed. Builder reserves
          the right to change the size, design, configuration and location of
          amenities not yet constructed and does not warrant the suitability
          thereof for any use or for any person. There is no guarantee that any
          particular homesite, home or common area will offer a view or that any
          particular view will be preserved. Views may also be altered by
          subsequent development, construction, and landscaping growth. A link
          to a third party website does not imply endorsement of that site nor
          any ability to control that site’s privacy practices. Marketing
          promotions/incentives, if any, are subject to conditions or
          restrictions and are subject to change without notice. No warranty or
          guarantee is made regarding any particular area public school/school
          district or that any particular public school/school district will
          service any given community. Schools/school districts may change over
          time. Builder does not warrant the suitability of any trail for any
          use or for any person. Our name and the logos contained herein are
          registered trademarks of Tri Pointe Homes, Inc. and/or its
          subsidiaries. © 2023 Tri Pointe Homes, Inc. All rights reserved.
        </p>
      </Box>
    </Box>
  );
}

export default Footer;
