import React from "react";
import styles from "./Diary.module.css";

import { useState } from "react";
import Calendar from "react-calendar";


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  Heading,
  CircularProgress,
  Img,
  VStack,
  Button,
  border,
} from "@chakra-ui/react";

import { DiApple } from "react-icons/di";
import { FaRunning } from "react-icons/fa";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProgressBar from "../../Components/Diary/ProgressBar";
import LineProgressBar from "../../Components/Diary/LineProgressBar";
import CircularProgressTotal from "../../Components/Diary/CircularProgressTotal";
import HighlitedCircular from "../../Components/Diary/HighlitedCircular";

const Diary = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <div className={styles.diary}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border={"none"}>
              <HStack fontWeight={"bold"} gap={"30px"}>
                <HStack>
                  <DiApple size={"30px"} />
                  <Box>FOOD</Box>
                </HStack>
                <HStack>
                  <FaRunning />
                  <Box>EXERCISE</Box>
                </HStack>
                <HStack>
                  <BsFillHeartPulseFill />
                  <Box>BIOMETRIC</Box>
                </HStack>
                <HStack>
                  <GrNotes />
                  <Box>NOTE</Box>
                </HStack>
                <AccordionButton>
                  <AccordionIcon />
                </AccordionButton>
              </HStack>

              <AccordionPanel
                width={"100%"}
                height={"200px"}
                pb={4}
                border={"1px solid wheat"}
                padding={"20px"}
              >
                {/* <table>
                  <thead>
                    <tr>
                      <th colspan="2">Name</th>
                      <th colspan="2">weight</th>
                      <th colspan="2">Energy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apple</td>
                      <td>400g</td>
                      <td>500Cal.</td>
                    </tr>
                  </tbody>
                </table> */}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className={styles.energySummary}>
          <div>
            <Heading fontSize={"25px"} marginBottom={"20px"}>
              Energy Summary
            </Heading>
            <HStack>
              {["Consumed", "Burned", "Remaining"].map((el) => {
                return <ProgressBar status={el} />;
              })}
            </HStack>
          </div>
          <div>
            <Heading fontSize={"22px"} marginBottom={"20px"}>
              Macronutrient Targets
            </Heading>
            {["Enerty", "Portein", "Net Carbs", "Fat"].map((el) => {
              return <LineProgressBar macro={el} />;
            })}
          </div>
        </div>
        <div className={styles.nutrientTarget}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Heading fontSize={"21px"} marginBottom={"20px"}>
              Nutrient Targets
            </Heading>

            <Heading fontSize={"14px"} marginBottom={"20px"}>
              SUGGEST FOOD
            </Heading>
          </div>
          <Heading fontSize={"16px"} marginBottom={"20px"}>
            Nutrition Score
          </Heading>
          <div>
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <CircularProgressTotal toalPercent={"4%"} />
              </div>
              <div className={styles.upgrade}>
                <div>
                  <Img src="https://cronometer.com/img/nutrition-scores.svg" />
                </div>
                <div
                  style={{
                    textAlign: "left",
                    width: "200px",
                    fontSize: "14px",
                  }}
                >
                  <p
                    style={{
                      width: "200px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Get more with Cronometer Gold
                  </p>
                  <p>
                    Upgrade to view full set of nutrition scores representing
                    well researched health concepts
                  </p>
                </div>
                <div>
                  <Button>Upgrade</Button>
                </div>
              </div>
            </div>
          </div>
          <div >
            <Heading fontSize={"18px"} marginTop={"30px"}>Highlited Nutrients</Heading>
            <div className={styles.highlitedNutrients}>
            {["Fiber",'Iron',"Calcium","Vit.A","Vit.C","Vit.B12",'Folate',"Potasium",].map((el)=>{
              return (
                <HighlitedCircular name={el}/>
              )
            })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Part (Not Moving Part) */}
      <div className={styles.rightSide}>
        <div className={styles.calender}>
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary;
