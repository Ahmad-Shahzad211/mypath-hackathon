"use client";
import React from "react";
import {Box, Container, Button} from "@mui/material";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import {OurTeam} from "@/data/constants";

const MeetOurTeam = () => {
  return (
    <Box sx={styles.container}>
      {/* Home Button */}
      <Box sx={{textAlign: "right", mb: 3}}>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </Box>

      <Container maxWidth="lg">
        <Box>
          <Box sx={styles.Title} className="font-promixa">
            {OurTeam.Title}
          </Box>

          <Box sx={styles.mainHeading}>{OurTeam.mainHeading}</Box>

          <Box sx={styles.subTitle} className="font-promixa">
            {OurTeam.subTitle}
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            },
            gap: 4,
            mt: 10,
          }}
        >
          {OurTeam.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: index * 0.2}}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                textAlign: "center",
                minHeight: "400px",
                padding: "0px",
                position: "relative",
                boxShadow: "0px 0px 0px 0px #1D68FF",
                transition: "box-shadow 0.2s ease-in-out", // only for shadow
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 4px 20px #1D68FF",
                transition: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                  "&:hover img": {
                    transform: "scale(1.05)", // slight zoom on image
                  },
                }}
              >
                <Image
                  src={member.img || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    padding: 2,
                    textAlign: "center",
                  }}
                >
                  <Box sx={styles.memberName}>{member.name}</Box>
                  <Box sx={styles.memberRole}>{member.role}</Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MeetOurTeam;

const styles = {
  container: {
    marginTop: {xs: 12, sm: 15},
    marginBottom: "25px",
    px: "2px",
  },
  Title: {
    color: "#000000",
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    lineHeight: "20px",
    fontFamily: "var(--font-promixa)",
    textAlign: "left",
  },
  mainHeading: {
    fontSize: "48px",
    fontWeight: 600,
    color: "#000000",
    letterSpacing: "-1px",
    lineHeight: "58px",
    mt: 3,
    textAlign: "left",
  },
  subTitle: {
    fontSize: "20px",
    fontWeight: 300,
    color: "gray",
    textAlign: "left",
    fontFamily: "var(--font-promixa)",
    mt: 2,
  },
  memberName: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#fff",
  },
  memberRole: {
    fontSize: "18px",
    color: "#ccc",
    mt: 1,
  },
};
