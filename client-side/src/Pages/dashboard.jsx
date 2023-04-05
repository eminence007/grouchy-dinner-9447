
// import axios from 'axios';
// import React from 'react';
// import { Line } from 'react-chartjs-2';

// import BarChart from "../Components/Graph/Bar";
// class Graph extends React.Component {
//   state = {
//     foodData: [],
//     exerciseData: [],
//     chartData: {},
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     try {
//       const foodResponse = await axios.get('http://localhost:4900/diary/food');
//       const exerciseResponse = await axios.get('http://localhost:4900/diary/exercise');

//       const { today, yesterday, dayBeforeYesterday } = this.groupDataByDay(foodResponse.data, exerciseResponse.data);

//       const chartData = this.generateChartData(today, yesterday, dayBeforeYesterday);
//       console.log(foodResponse.data)
//       console.log(exerciseResponse.data)
//       this.setState({ foodData: foodResponse.data, exerciseData: exerciseResponse.data, chartData });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   groupDataByDay = (foodData, exerciseData) => {
//     const today = { consumed: 0, burnt: 0 };
//     const yesterday = { consumed: 0, burnt: 0 };
//     const dayBeforeYesterday = { consumed: 0, burnt: 0 };

//     const todayDate = new Date();
//     todayDate.setHours(0, 0, 0, 0);

//     foodData.forEach((item) => {
//       const itemDate = new Date(item.date);
//       itemDate.setHours(0, 0, 0, 0);

//       if (itemDate.getTime() === todayDate.getTime()) {
//         today.consumed += item.kcal;
//       } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
//         yesterday.consumed += item.kcal;
//       } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
//         dayBeforeYesterday.consumed += item.kcal;
//       }
//     });

//     todayDate.setDate(todayDate.getDate() + 2);

//     exerciseData.forEach((item) => {
//       const itemDate = new Date(item.date);
//       itemDate.setHours(0, 0, 0, 0);

//       if (itemDate.getTime() === todayDate.getTime()) {
//         today.burnt += item.kcal;
//       } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
//         yesterday.burnt += item.kcal;
//       } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
//         dayBeforeYesterday.burnt += item.kcal;
//       }
//     });

//     return { today, yesterday, dayBeforeYesterday };
//   };

//    generateChartData = (today, yesterday, dayBeforeYesterday) => {
//     return {
//       labels: [dayBeforeYesterday.date, yesterday.date, today.date],
//       datasets: [
//         {
//           label: 'Energy Consumed',
//           data: [dayBeforeYesterday.consumed, yesterday.consumed, today.consumed],
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         },
//         {
//           label: 'Energy Burnt',
//           data: [dayBeforeYesterday.burnt, yesterday.burnt, today.burnt],
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };
//   };
//   render() {
//     return (
//       <div>
//         <Line
//           data={this.state.chartData}
//           options={{
//             title: {
//               display: true,
//               text: 'Energy Consumption Chart',
//               fontSize: 25,
//             },
//             legend: {
//               display: true,
//               position: 'bottom',
//             },
//           }}
//         />
//         <BarChart
//           data={this.state.chartData}
//           options={{
//             title: {
//               display: true,
//               text: 'Energy Consumption Chart',
//               fontSize: 25,
//             },
//             legend: {
//               display: true,
//               position: 'bottom',
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default Graph

import { LinearScale, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import BarChart from "../Components/Graph/Bar";
import axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect } from "react";
Chart.register(LinearScale, CategoryScale);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      ticks: {
        align: 'center',
      },
    },
  },
};

const Graph = () => {
  const [foodData, setFoodData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);

  useEffect(() => {
    console.log("hiii")
    const foodUrl = `http://localhost:4900/diary/food`;
    const exerciseUrl = `http://localhost:4900/diary/exercise`;
    const fetchData = async () => {
      try {
        const [foodResponse, exerciseResponse] = await Promise.all([
          axios.get(foodUrl),
          axios.get(exerciseUrl)
        ]);
        setFoodData(foodResponse.data);
        setExerciseData(exerciseResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchData();
  }, []);
  console.log("food data",foodData) 
  console.log("exerciseData",exerciseData)
  useEffect(() => {
    const macronutrients = foodData.Macronutrient || {};
    const carbsCal = macronutrients.Carbohydrates ? macronutrients.Carbohydrates.reduce((acc, carb) => acc + (carb.weight * 4), 0) : 0;
    const proteinCal = macronutrients.Protein ? macronutrients.Protein.reduce((acc, protein) => acc + (protein.weight * 4), 0) : 0;
    const fatCal = macronutrients.Fat ? macronutrients.Fat.reduce((acc, fat) => acc + (fat.weight * 9), 0) : 0;    
const highlightCal = foodData.HighlightedNutrients ? foodData.HighlightedNutrients.reduce((acc, nutrient) => acc + (nutrient.weight * 4), 0) : 0;
const totalCal = carbsCal + proteinCal + fatCal + highlightCal;
setSum(totalCal)
console.log(totalCal)

    const exercises = exerciseData;
    let totalExerciseCalories = 0;
    exercises.forEach(activity => {
      activity.activities.forEach(exerciseType => {
        exerciseType.types.forEach(level => {
          totalExerciseCalories += level.calories;
        });
      });
    });
    setSum1(totalExerciseCalories);
    console.log(totalExerciseCalories)
  }, [foodData, exerciseData]);
 
  const calculateTotalEnergy = (data, index = 0) => {
    const date = moment().subtract(index, 'days').format('YYYY-MM-DD');
    const items = data.filter((item) => item.date === date);
    const totalEnergy = items.reduce((total, item) => total + item.energy, 0);
    return totalEnergy;
  };
  const barData = {
    labels: ['Day 1', 'Day 2', 'Day 3'],
    datasets: [
      {
        label: 'Food Calories',
        data: [calculateTotalEnergy(foodData), calculateTotalEnergy(foodData, 1), calculateTotalEnergy(foodData, 2)],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Exercise Calories',
        data: [calculateTotalEnergy(exerciseData), calculateTotalEnergy(exerciseData, 1), calculateTotalEnergy(exerciseData, 2)],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const energyData = {
    labels: ['Day 1', 'Day 2', 'Day 3'],
    datasets: [
      {
        label: 'Energy (kcal)',
        data: [
          calculateTotalEnergy(foodData) - calculateTotalEnergy(exerciseData),
          calculateTotalEnergy(foodData, 1) - calculateTotalEnergy(exerciseData, 1),
          calculateTotalEnergy(foodData, 2) - calculateTotalEnergy(exerciseData, 2),
          ],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          },
          ],
          };
         
          return (
            <div>
              <div style={{ width: 700 }}>
              <Line data={energyData} options={options} />
              </div>
               <div style={{ width: 700 }}>
               <BarChart data={barData} options={options}/>
             </div>
             
            </div>
          
            );
}

  

export default Graph;