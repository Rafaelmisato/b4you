import { Container } from './styles'

import dynamic from 'next/dynamic'

interface ChartProps {
  data: { name: string; data: number[] }[]
  info: string[]
}

/**
 *
 * @param param0
 * Need to pass the params
 * - data: array with objects ex:
 * [
 *  {
 *  name: example 1,
 *  data: [1, 2, 3, 4, 5]
 *  },
 *  {
 *  name: example 2,
 *  data: [1, 2, 3, 4, 5]
 *  },
 * ]
 * - info: array with informations on chart Ex:
 *  [
 *    text, text, text, text, text
 *  ]
 */

const SellingChart: React.FC<ChartProps> = ({ data, info }) => {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  })

  const series = data

  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: info,
      labels: {
        style: {
          colors: '#a3a3a3',
          fontSize: '10px',
          fontWeight: 500
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#a3a3a3',
          fontSize: '10px',
          fontWeight: 500
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#fff',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 10,
        left: 10
      }
    },
    stroke: {
      show: true,
      width: 0,
      dashArray: 0
    },
    fill: {
      opacity: 0.7,
      type: 'solid',
      colors: ['#FFDC14', '#0075FF', '#EF4FF0']
    }
  }

  return (
    <Container>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={320}
      />
    </Container>
  )
}

// test

export default SellingChart
