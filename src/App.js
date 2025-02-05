
import { VStack, Box } from "@chakra-ui/layout";
import Navbar from "./componentsnew/Navbar";
// import Pantry from "./componentsnew/Pantry";
import "./App.css"
import {Routes, Route} from "react-router-dom";
import Pantry from "./componentsnew/Pantry";
import Notifications from "./componentsnew/Notifications";
import GroceryList from "./componentsnew/GroceryList";
import Hero from "./componentsnew/Hero";


function App() {
  return (
      <Box
        width={{ base: "100%" }}
        height="200vh"
        bgGradient={["linear(to-bl, white, #8CD18F)"]}
      >
        <VStack spacing={0} p={0} maxW="100%" align="center">
          <Navbar />
          {/* <Kitchen /> */}
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/grocerylist' element={<GroceryList/>}/>
            <Route path='/pantry' element={<Pantry/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
          </Routes>
        </VStack>
      </Box>
  );
}

export default App;
