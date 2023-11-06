import { Box, Typography } from "@mui/material";
import React from "react";
import "./Blog.css";
import theme from "../theme/theme";
import Footer from "./Footer.js";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Blog() {
  const pages = [
    "Design & Style",
    "Homebuying 101",
    "Homeowner Tips",
    "LivingSmart®",
    "Outdoor Living",
    "Wellness",
    "Live Local",
  ];

  const posts = [
    {
      title: "Bobby Berk is bringing his designs home",
      text: "Read on to learn more about our exclusive collaboration with Emmy-nominated TV host Bobby Berk.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Bobby-Berk-Office-Blog-Hero.jpg",
    },
    {
      title: "Next level design for optimized living",
      text: "From thoughtful space planning to design personalization, we’re elevating home design for optimized living — now and for the future.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Averly-at-Bedford-Plan-1-Model-Home-KitchenRESIZED.jpg",
    },
    {
      title: "Bobby Berk brings his design genius to Arroyo’s Edge",
      text: "The phenomenal creative partnership between Tri Pointe Homes and celebrated designer Bobby Berk takes center stage once again with a spread in Homes & Gardens featuring one of our newest Las Vegas communities – Arroyo’s Edge in Summerlin West.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Bobby-Berk-Arroyos-Edge-Home-and-Feature-D-1437x1035-1.jpg",
    },
    {
      title: "Six Design Trends for 2023",
      text: "We’re sharing the latest design trends to help you create the ultimate dream home this new year",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/2023-home-design-trends.jpg",
    },
    {
      title: "A Home Office that Inspires",
      text: "Working from home is here to stay and if you are one of the many that get to take advantage of this new way of working be sure to take the time to evaluate your space and make sure you are set up for success. Or better yet, start from scratch in a new Tri Pointe home at Woodlands Reserve in Kirkland Washington.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/wa-blog-wr-home-office-1.jpg",
    },
    {
      title: "Las Vegas Communities Designed for Healthier Living",
      text: "It’s that time of year again when lifestyle resolutions turn to getting fit and living healthier. People all over Las Vegas, and the U.S., are...",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Contour-Pool-Amenities.jpg",
    },
    {
      title: "Bobby Berk is bringing his designs home",
      text: "Read on to learn more about our exclusive collaboration with Emmy-nominated TV host Bobby Berk.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Bobby-Berk-Office-Blog-Hero.jpg",
    },
    {
      title: "Next level design for optimized living",
      text: "From thoughtful space planning to design personalization, we’re elevating home design for optimized living — now and for the future.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Averly-at-Bedford-Plan-1-Model-Home-KitchenRESIZED.jpg",
    },
    {
      title: "Bobby Berk brings his design genius to Arroyo’s Edge",
      text: "The phenomenal creative partnership between Tri Pointe Homes and celebrated designer Bobby Berk takes center stage once again with a spread in Homes & Gardens featuring one of our newest Las Vegas communities – Arroyo’s Edge in Summerlin West.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Bobby-Berk-Arroyos-Edge-Home-and-Feature-D-1437x1035-1.jpg",
    },
    {
      title: "Six Design Trends for 2023",
      text: "We’re sharing the latest design trends to help you create the ultimate dream home this new year",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/2023-home-design-trends.jpg",
    },
    {
      title: "A Home Office that Inspires",
      text: "Working from home is here to stay and if you are one of the many that get to take advantage of this new way of working be sure to take the time to evaluate your space and make sure you are set up for success. Or better yet, start from scratch in a new Tri Pointe home at Woodlands Reserve in Kirkland Washington.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/wa-blog-wr-home-office-1.jpg",
    },
    {
      title: "Las Vegas Communities Designed for Healthier Living",
      text: "It’s that time of year again when lifestyle resolutions turn to getting fit and living healthier. People all over Las Vegas, and the U.S., are...",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Contour-Pool-Amenities.jpg",
    },
  ];

  return (
    <Box>
      <Box display="flex" alignItems="center" bgcolor="#f7f7f7" height="100vh">
        <Box padding="5% 0.5% 5% 5%" width="50%">
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/Picture1.jpg"
            alt="person"
            className="person-image"
          />
        </Box>
        <Box width="50%" padding="5%">
          <Typography className="design-style">Design & Style</Typography>
          <Typography
            variant="h3"
            color={theme.palette.primary.main}
            className="blog-main-title"
          >
            The Bobby Berk and Tri Pointe Homes collaboration is here
          </Typography>
          <Typography variant="body1" className="blog-caption">
            Featuring 10 design collections, the Style Finder, and so much more,
            read on to learn more about the Bobby Berk x Tri Pointe Homes
            collaboration – out now!
          </Typography>
          <Box>
            <Typography className="blog-read-more" variant="caption">
              Read More
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="3%"
        borderBottom="1px solid #d2d0d0"
      >
        {pages.map((page, i) => (
          <Box key={i} padding="1%">
            <Typography variant="body2">{page}</Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <Box padding="5% 5% 2%">
          <Typography className="blog-title">TRI POINTE HOMES BLOG</Typography>
          <Typography variant="h3">The Latest</Typography>
        </Box>

        <Box className="blog-posts">
          {posts.map((post, i) => (
            <Box className="blog-post" key={i}>
              <img src={post.imageLink} alt={post.title} />
              <Typography color="#848484" className="design-style">
                DESIGN & STYLE
              </Typography>
              <Typography variant="h6" marginBottom="0.5rem">
                <b>{post.title}</b>
              </Typography>
              <Typography color={theme.palette.secondary.main} variant="body2">
                {post.text}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                color="#cfe548"
                margin="1% 0%"
              >
                <Typography variant="body2">READ MORE</Typography>
                <ArrowRightAltIcon fontSize="small" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Blog;
