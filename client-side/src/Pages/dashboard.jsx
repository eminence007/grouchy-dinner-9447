import axios from 'axios';
import React from 'react';
import { Line } from 'react-chartjs-2';

import BarChart from "../Components/Graph/Bar";
class Graph extends React.Component {
  state = {
    foodData: [],
    exerciseData: [],
    chartData: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const foodResponse = await axios.get('http://localhost:4900/diary/food');
      const exerciseResponse = await axios.get('http://localhost:4900/diary/exercise');

      const { today, yesterday, dayBeforeYesterday } = this.groupDataByDay(foodResponse.data, exerciseResponse.data);

      const chartData = this.generateChartData(today, yesterday, dayBeforeYesterday);
      console.log(foodResponse.data)
      console.log(exerciseResponse.data)
      this.setState({ foodData: foodResponse.data, exerciseData: exerciseResponse.data, chartData });
    } catch (error) {
      console.error(error);
    }
  };

  groupDataByDay = (foodData, exerciseData) => {
    const today = { consumed: 0, burnt: 0 };
    const yesterday = { consumed: 0, burnt: 0 };
    const dayBeforeYesterday = { consumed: 0, burnt: 0 };

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    foodData.forEach((item) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      if (itemDate.getTime() === todayDate.getTime()) {
        today.consumed += item.kcal;
      } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
        yesterday.consumed += item.kcal;
      } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
        dayBeforeYesterday.consumed += item.kcal;
      }
    });

    todayDate.setDate(todayDate.getDate() + 2);

    exerciseData.forEach((item) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      if (itemDate.getTime() === todayDate.getTime()) {
        today.burnt += item.kcal;
      } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
        yesterday.burnt += item.kcal;
      } else if (itemDate.getTime() === todayDate.setDate(todayDate.getDate() - 1)) {
        dayBeforeYesterday.burnt += item.kcal;
      }
    });

    return { today, yesterday, dayBeforeYesterday };
  };

   generateChartData = (today, yesterday, dayBeforeYesterday) => {
    return {
      labels: [dayBeforeYesterday.date, yesterday.date, today.date],
      datasets: [
        {
          label: 'Energy Consumed',
          data: [dayBeforeYesterday.consumed, yesterday.consumed, today.consumed],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Energy Burnt',
          data: [dayBeforeYesterday.burnt, yesterday.burnt, today.burnt],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  };
  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Energy Consumption Chart',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
        <BarChart
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Energy Consumption Chart',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          }}
        />
      </div>
    );
  }
}

export default Graph