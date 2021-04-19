import { Container, Header, Sellings, Table } from './styles'

import dynamic from 'next/dynamic'

interface ChartProps {
  sellCount: string | number
  period: string
  data: number[]
  date: string[][]
  haveSelling: boolean
  sellerInfo: { name: string; value: string; date: string }[]
}

/**
 *
 * @param param0
 * Need to pass the params
 * - sellCount: number of sellings (string | number)
 * - data: array total sellings (7 datas) ex: [1,2,3,4,5,6,7]
 * - date: array dates of the sellings (7datas) ex:
 *[
 *  ['11/04'],
 *  ['12/04'],
 *  ['13/04'],
 *  ['14/04'],
 *  ['15/04'],
 *  ['16/04'],
 *  ['17/04']
 *]
 * - haveSelling: have or not have sellings boolean
 * - if have sellings:
 * - sellerInfo?: An array with obejcts Ex:
 * [{name: "name", value: "300,29", date: "15/04"}]
 */

const SellingChart: React.FC<ChartProps> = ({
  data,
  date,
  haveSelling,
  sellerInfo
}) => {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  })

  // copiar os states do grafico ja pronto, pra ser rapido, fazer tudo estatico pra terminar logo

  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]

  // ajustar chart e responsivo
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
      categories: date,
      labels: {
        style: {
          colors: '#fff',
          fontSize: '14px',
          fontWeight: 500
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff',
          fontSize: '14px',
          fontWeight: 500
        }
      }
    },
    // grid: {
    //   show: true,
    //   borderColor: '#244282'
    // },
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
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0
    }
  }

  return (
    <Container>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={250}
      />
    </Container>
  )
}

export default SellingChart
