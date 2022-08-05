import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src={
              process.env.PUBLIC_URL +
              "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            }
          />
          <Avatar
            alt="Travis Howard"
            src={
              process.env.PUBLIC_URL +
              "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            }
          />
          <Avatar
            alt="Cindy Baker"
            src={
              process.env.PUBLIC_URL +
              "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            }
          />
          <Avatar
            alt="Agnes Walker"
            src={
              process.env.PUBLIC_URL +
              "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            }
          />
          <Avatar
            alt="Trevor Henderson"
            src={
              process.env.PUBLIC_URL +
              "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
            }
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} marginTop={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5}>
          <ImageListItem rowheight={"auto"}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
              }
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
              }
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
              }
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
              }
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} marginTop={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
