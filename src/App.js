//https://www.nadra.gov.pk/wp-content/uploads/2023/12/visa.jpg
//https://www.nadra.gov.pk/wp-content/uploads/2023/12/PAO.jpg
//https://www.nadra.gov.pk/wp-content/uploads/2024/01/pak-id-slide.pngz
// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//import React, { useState, useEffect } from "react";
import "./App.css";
//import { AppBar, Box, Toolbar } from "@mui/material";
function App() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [overlayIndex, setOverlayIndex] = useState(0);
  // const images = [
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/visa.jpg",
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/PAO.jpg",
  //   "https://www.nadra.gov.pk/wp-content/uploads/2024/01/pak-id-slide.png",
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/succession-1.jpg",
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/home.jpg",
  // ];
  // const overlayImages = [
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/attorney.png",
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/home.png",
  //   "https://www.nadra.gov.pk/wp-content/uploads/2023/12/succession-5.png",
  // ];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   const overlayInterval = setInterval(() => {
  //     setOverlayIndex((prevIndex) => (prevIndex + 1) % overlayImages.length);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(overlayInterval);
  //   };
  // }, [images.length, overlayImages.length]);
  return (
    <div></div>
    // <Box
    //   className="App"
    //   style={{
    //     display: "flex",
    //     width: "100vw",
    //     height: "100vh",
    //     flexDirection: "column",
    //   }}
    // >
    //   <AppBar
    //     position="sticky"
    //     sx={{ backgroundColor: "#006600", height: "84px" }}
    //   >
    //     <Toolbar sx={{ display: "flex" }}>
    //       <img
    //         width="100px"
    //         src="https://www.nadra.gov.pk/wp-content/uploads/2023/11/Nadra-Logo.svg"
    //         alt="doslo"
    //       />
    //     </Toolbar>
    //   </AppBar>
    //   <div
    //     style={{
    //       backgroundImage: `url(${images[currentImageIndex]})`,
    //       width: "100%",
    //       height: "100%",
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "contain",
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "left" }}>
    //       <img src={overlayImages[overlayIndex]} alt="doslo" width="20%" />
    //     </div>
    //   </div>
    // </Box>
  );
}

export default App;
