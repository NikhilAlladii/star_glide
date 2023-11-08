import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "./MainPage.css";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { fetchHome } from "../redux/homes/homeActions";
import { styled } from "styled-components";
import Search from "../components/Search";
import theme from "../theme/theme";

const StyledBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
  margin-left: 1rem;
`;

const StyledTabs = styled(Box)`
  font-size: 20px;
  font-weight: 500 !important;
`;

function MainPage() {
  const [progress, setProgress] = useState(1);
  const [post, setPost] = useState(0);

  const newHomes = useSelector((state) => state.homes);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [homes, setHomes] = useState(newHomes);

  const [tab, setTab] = useState("neighbourHood");

  const posts = [
    {
      title: "The Five Benefits of a Move-In Ready Home",
      text: "Read on to learn more about the benefits of a move-in ready home and why it may be the perfect fit for your next move.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/blog-hero-1.jpg",
    },
    {
      title: "Four Steps to Buying a New Home",
      text: "Read on as we reveal some of the exciting steps involved in the homebuying process and how you can reach the ultimate destination: Homeownership",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/model-home-living-room-1.jpg",
    },
    {
      title: "A Guide to Financing Your New Home",
      text: "Discover a simpler way to shop for your dream home. Our innovative digital tools offer virtual tours, interactive floor plans, site maps, and an online design studio. Experience effortless and enjoyable home shopping like never before.",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/KITCHEN-55-1.jpg",
    },
  ];

  const states = [
    {
      state: "Arizona",
      cities: [
        {
          name: "Phoenix Metro",
        },
      ],
    },
    {
      state: "California",
      cities: [
        {
          name: "Bay Area",
        },
        {
          name: "Los Angeless Country",
        },
        {
          name: "Orange Country",
        },
        {
          name: "Riverside Country",
        },
        {
          name: "Sacramento",
        },
        {
          name: "San Berrnardino Country",
        },
        {
          name: "San Diego Country",
        },
      ],
    },
    {
      state: "Colorado",
      cities: [
        {
          name: "Denver Metro",
        },
      ],
    },
    {
      state: "District Of Columbia",
      cities: [
        {
          name: "Washington D.C",
        },
      ],
    },
    {
      state: "Maryland",
      cities: [
        {
          name: "Montgomery Country",
        },
      ],
    },
    {
      state: "Nevada",
      cities: [
        {
          name: "Las Vegas",
        },
      ],
    },
    {
      state: "North Carolina",
      cities: [
        {
          name: "Charlotte",
        },
        {
          name: "Raleigh",
        },
      ],
    },
    {
      state: "South Carolina",
      cities: [
        {
          name: "York Country",
        },
      ],
    },
    {
      state: "Texas",
      cities: [
        {
          name: "Austin",
        },
        {
          name: "Dallas-Fort Worth",
        },
        {
          name: "Houston",
        },
      ],
    },
    {
      state: "Virginia",
      cities: [
        {
          name: "Alexandria",
        },
        {
          name: "Loudoun County",
        },
      ],
    },
    {
      state: "Washington",
      cities: [
        {
          name: "Greater Seattle Area",
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
        // return setProgress(progress+1);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 0 && progress <= 33) {
      setPost(posts[0]);
    } else if (progress >= 34 && progress <= 66) {
      setPost(posts[1]);
    } else if (progress <= 100) {
      setPost(posts[2]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const handleHomeClick = (homeId) => {
    navigate(`/home/${homeId}`);
    dispatch(fetchHome(homeId));
  };

  const handleNeighbourHoodTab = () => {
    setTab("neighbourHood");
  };

  const handleHomeTab = () => {
    setTab("home");
  };

  const goToBlogsPage = () => {
    navigate("/blog");
  };

  return (
    <Box>
      <Box position="relative">
        <Box
          position="relative"
          sx={{
            backgroundImage:
              "radial-gradient(51.61% 51.61% at 50% 50%,rgba(0,0,0,.5) 0,transparent 100%)",
          }}
        >
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/Hero-5-1.jpg"
            alt="main-home-page"
            className="main-page-home-image"
          />
        </Box>
        <Box position="absolute" className="main-page-search">
          <Typography variant="h2" color="#ffffff">
            Where do you want to live?
          </Typography>
          <Box sx={{ width: "60%" }}>
            <Search />
          </Box>
        </Box>
      </Box>

      <Box padding="0rem 4.35rem">
        <Typography variant="h3" color="#545454" paddingTop="3rem">
          Recently Viewed
        </Typography>
        <Box marginBottom="2rem">
          <Box
            sx={{
              display: "flex",
              paddingTop: "2rem",
              borderBottom: "1px solid rgb(235 235 235)",
            }}
          >
            <Box
              onClick={handleNeighbourHoodTab}
              sx={{
                borderBottom:
                  tab === "neighbourHood"
                    ? "4px solid rgb(190 211 68)"
                    : "4px solid #FFFFFF",
                padding: "8px 0px",
                marginRight: "1rem",
                cursor: "pointer",
                color:
                  tab === "neighbourHood"
                    ? theme.palette.secondary.main
                    : "#8c8c8c !important",
              }}
            >
              <StyledTabs>Neighbourhoods</StyledTabs>
            </Box>
            <Box
              onClick={handleHomeTab}
              sx={{
                borderBottom:
                  tab === "home"
                    ? "4px solid rgb(190 211 68)"
                    : "4px solid #ffffff",
                padding: "8px 0px",
                cursor: "pointer",
                color:
                  tab === "home"
                    ? theme.palette.secondary.main
                    : "#8c8c8c !important",
              }}
            >
              <StyledTabs>Homes & Floorplans</StyledTabs>
            </Box>
          </Box>
        </Box>
        <StyledBox className="eachHome">
          {homes?.length > 0 ? (
            homes?.slice(0, 4).map((home, i) => (
              <Box onClick={() => handleHomeClick(home._id)} key={i}>
                <Home home={home} key={i} />
              </Box>
            ))
          ) : (
            <Typography variant="h6">No Homes Available</Typography>
          )}
        </StyledBox>
      </Box>

      <Box padding="3.25rem 3.75rem">
        <Box>
          <Typography variant="body2" color="#bfbfc0" marginBottom="0.5rem">
            MEET TRI POINTE HOMES
          </Typography>
          <Typography variant="h3" color="rgb(190, 212, 55)">
            Life-changing
          </Typography>
          <Typography
            variant="h3"
            color="rgb(132, 132, 132)"
            marginBottom="3rem"
          >
            by Design™
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <img
            src={post.imageLink}
            alt="slider-images"
            className="slide-images"
          />

          <LinearProgress variant="determinate" value={progress} />

          <Grid container marginTop="1rem">
            {posts.map((p, i) => (
              <Grid md={4} key={i}>
                <Typography
                  variant="h6"
                  marginBottom="0.5rem"
                  sx={{ opacity: p.title === post.title ? "1" : "0.5" }}
                >
                  {p.title}
                </Typography>

                <Typography
                  sx={{ opacity: p.title === post.title ? "1" : "0.5" }}
                >
                  {p.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={0}>
          <Grid item md={7} >
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/Introducing-a-new-design-experience.jpg"
              alt="tri-homes"
              className="tri-homes-pointes"
            />
          </Grid>
          <Grid item md={5} >
            <Typography variant="h3" marginBottom="2rem">
              Introducing A<br /> New Design
              <br />
              <span style={{ color: "rgb(190, 210, 70)" }}>Experience</span>
            </Typography>
            <Typography variant="h6">Bobby Berk x Tri Pointe Homes</Typography>
            <Typography marginBottom="2rem">
              Tri Pointe Homes® has teamed up with the distinguished and
              effortlessly stylish Bobby Berk, bringing you captivating home
              designs curated to reflect your personal aesthetic. Through this
              exclusive collaboration, you’ll have the opportunity to discover
              your unique style and incorporate it into every aspect of your new
              Tri Pointe home. From flooring and countertops to paint and
              fixtures across 10 uniquely curated collections, we’ve got every
              detail covered to help you craft your dream designer home.
            </Typography>

            <Box marginTop="2rem">
              <Typography
                padding="1rem 4rem"
                width="20vw"
                bgcolor="#bed245"
                variant="body2"
                borderRadius="0.3rem"
                color="black"
              >
                GET THE DETAILS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box marginTop="-0.5rem">
        <Grid container alignItems="center" bgcolor="rgb(247, 247, 247)">
          <Grid item md={4}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/map-1.png"
              alt="world-map"
              className="main-page-map"
            />
          </Grid>
          <Grid item md={8} padding="5rem 5rem">
            <Box>
              <Typography variant="body2" color="#848484" marginBottom="0.8rem">
                WHERE WE BUILD
              </Typography>
              <Typography variant="h4" color="#848484" marginBottom="2rem">
                Location is key
              </Typography>
              <Box>
                <Grid container spacing={3}>
                  <Grid item={3}>
                    {states.slice(0, 2).map((state, i) => (
                      <Box key={i} paddingBottom="1rem">
                        <Typography
                          variant="body2"
                          color="#545454"
                          paddingBottom="0.5rem"
                        >
                          <b>{state.state}</b>
                        </Typography>
                        {state.cities.map((city) => (
                          <Typography
                            fontSize="13px"
                            color="#848484"
                            marginBottom="0.5rem"
                            className="main-page-cityname"
                          >
                            {city.name}
                          </Typography>
                        ))}
                      </Box>
                    ))}
                  </Grid>

                  <Grid item={3}>
                    {states.slice(2, 6).map((state, i) => (
                      <Box key={i} paddingBottom="1rem">
                        <Typography
                          color="#545454"
                          variant="body2"
                          paddingBottom="0.5rem"
                        >
                          <b>{state.state}</b>
                        </Typography>
                        {state.cities.map((city) => (
                          <Typography
                            fontSize="13px"
                            color="#848484"
                            marginBottom="0.5rem"
                            className="main-page-cityname"
                          >
                            {city.name}
                          </Typography>
                        ))}
                      </Box>
                    ))}
                  </Grid>

                  <Grid item={3}>
                    {states.slice(6, 9).map((state, i) => (
                      <Box key={i} paddingBottom="1rem">
                        <Typography
                          color="#545454"
                          variant="body2"
                          paddingBottom="0.5rem"
                        >
                          <b>{state.state}</b>
                        </Typography>
                        {state.cities.map((city) => (
                          <Typography
                            fontSize="13px"
                            color="#848484"
                            marginBottom="0.5rem"
                            className="main-page-cityname"
                          >
                            {city.name}
                          </Typography>
                        ))}
                      </Box>
                    ))}
                  </Grid>
                  <Grid item={3}>
                    {states.slice(9).map((state, i) => (
                      <Box key={i} paddingBottom="1rem">
                        <Typography
                          color="#545454"
                          variant="body2"
                          paddingBottom="0.5rem"
                        >
                          <b>{state.state}</b>
                        </Typography>
                        {state.cities.map((city) => (
                          <Typography
                            fontSize="13px"
                            color="#848484"
                            marginBottom="0.5rem"
                            className="main-page-cityname"
                          >
                            {city.name}
                          </Typography>
                        ))}
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid
          container
          padding="5.62rem 3.25rem 4rem 3.25rem"
          alignItems="center"
        >
          <Grid item md={6}>
            <Typography variant="body2" color="#848484">
              BETTER INSIDE AND OUT
            </Typography>
            <Typography variant="h3" color="#848484">
              Built differently
            </Typography>
            <Typography variant="h3" color="rgb(190, 211, 68)">
              to live differently
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body1" color="#545454" marginLeft="6%">
              We’ve been a leader in green building for over 20 years and our
              commitment is always expanding. With a steadfast passion for
              improving the quality of life for our homeowners and the legacy
              we’ll all leave on our planet.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/Gather-Your-Inspiration_RT.jpg"
              alt="tri-homes"
              className="tri-homes-pointe"
            />
          </Grid>
          <Grid item md={5} padding="2.5rem 4.35rem">
            <Typography variant="h4">LivingSmart®</Typography>
            <Typography>
              LivingSmart®️ encompasses the latest in energy-saving features,
              materials and equipment that help improve your home’s indoor air
              quality, smart technology, and systems to help conserve water and
              our natural resources.
            </Typography>
            <ul>
              <li>Energy efficient HVAC equipment</li>
              <li>
                Low-E glass windows for more stable temperature control and
                better protection against interior sun fading
              </li>
              <li>Smart thermostats</li>
              <li>Tankless or high-performance water heater systems</li>
            </ul>

            <Box>
              <Typography borderBottom="2px solid #bed245" width="7vw">
                Learn More
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop="-1rem">
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/Couple-in-Kitchen.jpg"
              alt="tri-homes"
              className="tri-homes-pointe"
            />
          </Grid>
          <Grid item md={5} padding="2.5rem 4.35rem">
            <Typography variant="h4">Livability™</Typography>
            <Typography>
              LivingSmart®️ encompasses the latest in energy-saving features,
              materials and equipment that help improve your home’s indoor air
              quality, smart technology, and systems to help conserve water and
              our natural resources.
            </Typography>
            <ul>
              <li>Energy efficient HVAC equipment</li>
              <li>
                Low-E glass windows for more stable temperature control and
                better protection against interior sun fading
              </li>
              <li>Smart thermostats</li>
              <li>Tankless or high-performance water heater systems</li>
            </ul>

            <Box>
              <Typography borderBottom="2px solid #bed245" width="7vw">
                Learn More
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop="-1rem">
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/200601_TriPointeDesignStudio0065.jpg"
              alt="tri-homes"
              className="tri-homes-pointe"
            />
          </Grid>
          <Grid item md={5} padding="2.5rem 4.35rem">
            <Typography variant="h4">Your Homebuying Journey</Typography>
            <Typography>
              LivingSmart®️ encompasses the latest in energy-saving features,
              materials and equipment that help improve your home’s indoor air
              quality, smart technology, and systems to help conserve water and
              our natural resources.
            </Typography>
            <ul>
              <li>Energy efficient HVAC equipment</li>
              <li>
                Low-E glass windows for more stable temperature control and
                better protection against interior sun fading
              </li>
              <li>Smart thermostats</li>
              <li>Tankless or high-performance water heater systems</li>
            </ul>

            <Box>
              <Typography borderBottom="2px solid #bed245" width="7vw">
                Learn More
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        color="rgb(132, 132, 132)"
        bgcolor="rgb(190, 211, 68)"
        padding="5.5rem 3.25rem"
        marginTop="-0.5rem"
      >
        <Box>
          <Typography variant="body2" color="#545454">
            SPECIAL EVENT SAVINGS
          </Typography>
          <Typography variant="h3" color="#545454">
            Let us <br />
            <span style={{ color: "#fff" }}>Pointe the Way</span>
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography width="60%" color="#545454">
            Sometimes you just need someone to guide you, show you your options,
            help you identify the unique offers available and, most importantly,
            support you every step of the way. This winter, Tri Pointe Homes®
            can Pointe the Way to exceptional savings on a life-changing home.
          </Typography>
          <Box>
            <Typography
              padding="1rem 4rem"
              bgcolor="#fff"
              variant="body2"
              borderRadius="0.3rem"
              color="black"
            >
              LEARN MORE
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <Grid container padding="3.75rem 3.25rem">
          <Grid item md={6} padding="3rem">
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/Fortune-100-logo-for-website-red.jpg"
              alt="tripointehomes"
              className="main-page-badge-image"
            />
          </Grid>
          <Grid item md={6}>
            <Typography color="#545454" variant="h3" paddingBottom="1rem">
              Building a culture
              <br />
              <span style={{ color: "rgb(190, 210, 70)" }}>of excellence</span>
            </Typography>
            <Typography color="#545454" marginBottom="0.5rem">
              Tri Pointe Homes earned 100 Best Companies to Work For®
              recognition from Fortune Magazine and Great Place to Work®. Great
              Place To Work selected the 2023 Fortune 100 Best Companies to Work
              For list by analyzing survey responses of over half a million
              employees who work for Great Place To Work Certified companies
              with at least 1,000 workers. Tri Pointe team members love what
              they do and deeply believe that their work has direct and
              life-changing impact on our customers and enriches the communities
              we serve.
            </Typography>

            <Typography variant="body2" marginBottom="1rem">
              From Fortune. ©2023 Fortune Media IP Limited. All rights reserved.
              Used under <br />
              license.
            </Typography>

            <Box marginTop="2rem">
              <Typography
                padding="1rem 4rem"
                width="40%"
                bgcolor="#bed245"
                variant="body2"
                borderRadius="0.3rem"
                color="black"
              >
                READ MORE
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box padding="5rem 4.5rem" bgcolor="#545454" color="#ffffff">
        <Box border="1px solid #fff" bgcolor="#545454" padding="4rem">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="2rem"
          >
            <Typography variant="body2">BLOG & NEWS</Typography>
            <Typography
              variant="h6"
              borderBottom="2px solid #bed334"
              onClick={goToBlogsPage}
            >
              All Atricals
            </Typography>
          </Box>
          <Grid container spacing={8}>
            {posts.map((post) => (
              <Grid item md={4}>
                <Box>
                  <img
                    src={post.imageLink}
                    alt={post.title}
                    className="mainpage-blog-image"
                  />
                  <Typography variant="body2" margin="1rem 0rem 0.5rem 0rem">
                    HOMEBUYING 101
                  </Typography>
                  <Typography variant="h6" marginBottom="0.5rem">
                    {post.title}
                  </Typography>
                  <Typography variant="caption" marginBottom="0.5rem">
                    {post.text}
                  </Typography>
                  <br />
                  <Typography
                    variant="caption"
                    color="#bed334"
                    sx={{ cursor: "pointer" }}
                  >
                    Learn More
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        color="rgb(132, 132, 132)"
        bgcolor="rgb(209, 209, 209)"
        padding="5.5rem 3.25rem"
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3" width="70%" padding="1.5rem 0rem">
            A Legacy of Trusted Homebuilding Brands
          </Typography>
          <Typography></Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography width="60%">
            Tri Pointe Homes® grew from a family of trusted regional
            homebuilding brands, some with nearly a century of service in their
            communities, including Pardee Homes ®, Maracay®, Quadrant Homes®,
            Winchester® Homes1 and Trendmaker® Homes. [1] Winchester is a
            registered trademark and is used with permission
          </Typography>
          <Box>
            <Typography
              padding="1rem 4rem"
              bgcolor="#fff"
              variant="body2"
              borderRadius="0.3rem"
              color="black"
            >
              READ MORE
            </Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default MainPage;
