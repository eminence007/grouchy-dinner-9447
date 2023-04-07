
import { Box, Grid, GridItem, Image, Text, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../Redux/exercise/exercise.action";

const ExerciseCard = ({ exercise, onExerciseClick }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => onExerciseClick(exercise)}>
      <Image src={exercise.image} alt={exercise.name} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            {exercise.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const ActivityCard = ({ activity, onActivityClick }) => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => onActivityClick(activity)}>
      <Image src={activity.image} alt={activity.name} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            {activity.name}
          </Text>
        </Box>
        <Box mt={4}>
          <Select placeholder="Select activity type" onChange={(e) => {
            const selectedType = activity.types.find(type => type.type === e.target.value);
            setSelectedType(selectedType);
          }}>
            {activity.types.map((type) => (
              <option key={type._id} value={type.type}>
                {type.type}
              </option>
            ))}
          </Select>
          {selectedType && (
            <Box mt={4}>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                {selectedType.type}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Calories burnt: {selectedType.levels[0].calories}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};


function Exercise() {
  const dispatch = useDispatch();
  const { exerciseData, loading } = useSelector((state) => state.exercisesReducer.exercises);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setSelectedActivity(null);
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Exercises
        </Text>
        {exerciseData.map((exercise) => (
          <ExerciseCard key={exercise._id} exercise={exercise} onExerciseClick={handleExerciseClick} />
        ))}
      </GridItem>
      <GridItem colSpan={1}>
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Activities
        </Text>
        {selectedExercise ? (
          selectedExercise.activities.map((activity) => (
            <ActivityCard
              key={activity._id}
              activity={activity}
              onActivityClick={handleActivityClick}
            />
          ))
        ) : (
          <div>Please select an exercise to view activities.</div>
        )}
        {selectedActivity && selectedActivity.levels && (
  <Box mt={4}>
    <Text fontSize="sm" fontWeight="semibold" color="gray.700">
      {selectedActivity.name}
    </Text>
    <Text fontSize="sm" color="gray.500">
      Calories burnt: {selectedActivity.levels[0].calories}
    </Text>
  </Box>
)}

      </GridItem>
    </Grid>
  );
  
 
}


export default Exercise