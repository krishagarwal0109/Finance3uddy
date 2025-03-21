
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const YearlyChart = ({ yearlyData,thememode }) => {



  const lightTheme = {
    colorText: 'black',
    income: 'rgba(75,192,192,0.5)', 
    incomeBorder: 'rgba(75,192,192,1)',
    expenses: 'rgba(255,99,132,0.5)', 
    expensesBorder: 'rgba(255,99,132,1)',
  };
   

  const darkTheme = {
    colorText: 'white',
    income: 'rgba(34,139,34,0.5)', 
    incomeBorder: 'rgba(34,139,34,1)',
    expenses: 'rgba(165,42,42,0.5)', 
    expensesBorder: 'rgba(165,42,42,1)',
  };
  

  const colors = thememode === 'dark' ? darkTheme : lightTheme;


  const data = {
    labels: yearlyData.map(data=>data.year),
    datasets: [

      {
        label: 'Income',
        backgroundColor: colors.income,
        borderColor: colors.incomeBorder,
        borderWidth: 1,
        data: yearlyData.map(data=>data.total_income),
      },

      {
        label: 'Expenses',
        backgroundColor: colors.expenses,
        borderColor: colors.expensesBorder,
        borderWidth: 1,
        data: yearlyData.map(data=>data.total_expense),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: colors.colorText, 
        },
      },
      y: {
        ticks: {
          color: colors.colorText, 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: colors.colorText,
        },
      },
    },
  };


  return(
    <div className='w-100 h-auto p-4 shadow-md rounded-lg dark:text-white m-auto' style={{backgroundColor:thememode==='dark'? "#2c3034" : "white"}}>
    <p className='w-full text-center font-bold'>Yearly Statistics</p>
    <Bar data={data} options={options}/>
    </div>
)
};

export default YearlyChart;
