import React, { useEffect } from "react";
import styles from "./Diary.module.css";

import { useState } from "react";
import Calendar from "react-calendar";

import { getDiaryData } from "../Redux/Food/food.action";

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
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  FormLabel,
  Input,
  FormHelperText,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Select,
  Stack,
  Flex,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

import { DiApple } from "react-icons/di";
import { RxMixerHorizontal } from "react-icons/rx";
import { FaRunning } from "react-icons/fa";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProgressBar from "../Components/Diary/ProgressBar";
import LineProgressBar from "../Components/Diary/LineProgressBar";
import CircularProgressTotal from "../Components/Diary/CircularProgressTotal";
import HighlitedCircular from "../Components/Diary/HighlitedCircular";
import MicroNutrientCart from "../Components/Diary/MicroNutrientCart";

import { useDispatch, useSelector } from "react-redux";
import ProgressFoodStatus from "../Components/Diary/ProgressFoodStatus";

const Diary = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const { data } = useSelector((store) => {
    return store.foodReducer;
  });

  console.log(data);

  useEffect(() => {
    dispatch(getDiaryData());
  }, []);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const Feature = ({ text,  iconBg,wieght,percentage }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
        marginBottom={"5px"}
          w={7}
          h={7}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
         
          
        </Flex>
        <Text fontWeight={600}>{text}</Text>
        <Text fontWeight={600}>{wieght}</Text>
        <Text fontWeight={600}>{percentage}</Text>

      </Stack>
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const btnRef = React.useRef();
  const [drawerStatus, setDrawerStatus] = useState(false);
  const [exerciseStatus, setExerciseStatus] = useState(false);

  const handleSingleFood = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <div className={styles.diary}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border={"none"}>
              <HStack fontWeight={"bold"} gap={"30px"}>
                <HStack>
                  <DiApple size={"30px"} />
                  <Box
                    ml="4"
                    onClick={() => {
                      setOverlay(<OverlayTwo />);
                      onOpen();
                    }}
                  >
                    FOOD
                  </Box>

                  <Modal
                    size={"6xl"}
                    isCentered
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    {overlay}
                    <ModalContent>
                      <ModalHeader>Add Food to Diary</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <FormControl>
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={
                                <Search2Icon
                                  color="blue.300"
                                  fontSize={"20px"}
                                />
                              }
                            />
                            <Input type="search" placeholder="Search" />
                            <InputRightAddon
                              mr={4}
                              children={<RxMixerHorizontal />}
                            />

                            <Button>search</Button>
                          </InputGroup>
                        </FormControl>
                        <Tabs>
                          <TabList>
                            <Tab>All</Tab>
                            <Tab>Favariote</Tab>
                            <Tab>Common Food</Tab>
                            <Tab>Supliments</Tab>
                            <Tab>Brands</Tab>
                            <Tab>Restaurants</Tab>
                            <Tab>Customs</Tab>
                          </TabList>

                          <TabPanels>
                            <TabPanel>
                              <div className={styles.headingOfFood}>
                                <h3>Description</h3>
                                <h3>Source</h3>
                              </div>
                              {data.map((el) => {
                                return (
                                  <>
                                    <div
                                      ref={btnRef}
                                      colorScheme="teal"
                                      onClick={() => setDrawerStatus(true)}
                                      className={styles.singleFoodName}
                                    >
                                      <div
                                        className={styles.FoodName}
                                        onClick={() => handleSingleFood(el._id)}
                                      >
                                        {el.foodData[0].foodName}
                                      </div>
                                      <div>NCCDB</div>
                                    </div>
                                    <Drawer
                                      size={"sm"}
                                      maxW={"5xl"}
                                      isOpen={drawerStatus}
                                      placement="right"
                                      onClose={() => setDrawerStatus(false)}
                                      finalFocusRef={btnRef}
                                    >
                                      <DrawerOverlay />
                                      <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader>
                                          Food Name Hoga Idhar
                                        </DrawerHeader>

                                        <DrawerBody>
                                          <div
                                            className={
                                              styles.MacroNutrientStatus
                                            }
                                          >
                                            <div
                                              className={
                                                styles.MacroNutrientStatusTop
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.ProgressFoodStatus
                                                }
                                              >
                                                <ProgressFoodStatus />
                                              </div>
                                              <div>
                                                {/* <ul>
                                                  <li>Protein</li>
                                                  <li>Net Carbs</li>
                                                  <li>Fat</li>
                                                </ul> */}
                                                <Feature
                                                 
                                                  iconBg="green"
                                                  text={"Protein"}
                                                  wieght={"40g"}
                                                  percentage={"(30%)"}
                                                />
                                                <Feature
                                                  
                                                  iconBg="green"
                                                  text={"Net Carbs"}
                                                  wieght={"40g"}
                                                  percentage={"(30%)"}
                                                />
                                                <Feature
                                                  
                                                  iconBg="red"
                                                  text={"Fat"}
                                                  wieght={"40g"}
                                                  percentage={"(30%)"}
                                                />
                                              </div>
                                            </div>
                                            <div>
                                              <p>Serving Size</p>
                                              <div className={styles.quantity}>
                                                <Input
                                                  htmlSize={1}
                                                  width="auto"
                                                />
                                                <Select placeholder="Select option">
                                                  <option value="g">g</option>
                                                  <option value="kg">kg</option>
                                                </Select>
                                              </div>
                                            </div>
                                          </div>
                                        </DrawerBody>

                                        <DrawerFooter>
                                          <Button
                                            variant="outline"
                                            mr={3}
                                            onClick={onClose}
                                          >
                                            Cancel
                                          </Button>
                                          <Button colorScheme="blue">
                                            Save
                                          </Button>
                                        </DrawerFooter>
                                      </DrawerContent>
                                    </Drawer>
                                  </>
                                );
                              })}
                              {/* Apple */}
                            </TabPanel>
                            <TabPanel>
                              {data.map((el) => (
                                <Box>{el.foodData[0].foodName}</Box>
                              ))}
                            </TabPanel>
                            <TabPanel>
                              {data.map((el) => (
                                <Box>{el.foodData[0].foodName}</Box>
                              ))}
                            </TabPanel>
                            <TabPanel>
                              {data.map((el) => (
                                <Box>{el.foodData[0].foodName}</Box>
                              ))}
                            </TabPanel>
                            <TabPanel>
                              {data.map((el) => (
                                <Box>{el.foodData[0].foodName}</Box>
                              ))}
                            </TabPanel>
                            <TabPanel>
                              {data.map((el) => (
                                <Box>{el.foodData[0].foodName}</Box>
                              ))}
                            </TabPanel>
                            <TabPanel>
                              <p>three!</p>
                            </TabPanel>
                          </TabPanels>
                        </Tabs>
                        <Box></Box>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </HStack>
                <HStack>
                  <FaRunning />
                  <Box
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    EXERCISE
                  </Box>
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
            <div className={styles.target}>
              {["Enerty", "Portein", "Net Carbs", "Fat"].map((el) => {
                return <LineProgressBar macro={el} />;
              })}
            </div>
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
            <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <div>
                <CircularProgressTotal toalPercent={"%"} />
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
                    well researched health
                  </p>
                </div>
                <div>
                  <Button>Upgrade</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Heading fontSize={"18px"} marginTop={"30px"}>
              Highlited Nutrients
            </Heading>
            <div className={styles.highlitedNutrients}>
              {[
                "Fiber",
                "Iron",
                "Calcium",
                "Vit.A",
                "Vit.C",
                "Vit.B12",
                "Folate",
                "Potasium",
              ].map((el) => {
                return <HighlitedCircular name={el} />;
              })}
              {/* {data.map((el)=>el.foodData[0].HighlightedNutrients.map((ele)=>{
                  return <HighlitedCircular name={ele.name} availableIn100g={ele.availableIn100g}/>
                }))} */}
            </div>
          </div>
          <div className={styles.allMicronutritionCart}>
            <div className={styles.leftMicronutritionCart}>
              <div className={styles.carbohydrates}>
                <Heading fontSize={"18px"}>Carbohydrates</Heading>
                {["fiber", "starch", "suger", "netCarbs"].map((el) => {
                  return <MicroNutrientCart name={el} />;
                })}
              </div>
              <div className={styles.carbohydrates}>
                <Heading fontSize={"18px"}>Lipits</Heading>
                {["fiber", "starch", "suger", "netCarbs"].map((el) => {
                  return <MicroNutrientCart name={el} />;
                })}
              </div>
            </div>
            <div>
              <div>
                <div className={styles.carbohydrates}>
                  <Heading fontSize={"18px"}>Protein</Heading>
                  {["fiber", "starch", "suger", "netCarbs"].map((el) => {
                    return <MicroNutrientCart name={el} />;
                  })}
                </div>
                <div className={styles.carbohydrates}>
                  <Heading fontSize={"18px"}>Vitamins</Heading>
                  {["fiber", "starch", "suger", "netCarbs"].map((el) => {
                    return <MicroNutrientCart name={el} />;
                  })}
                </div>
              </div>
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
