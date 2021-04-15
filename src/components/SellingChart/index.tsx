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
  sellCount,
  period,
  data,
  date,
  haveSelling,
  sellerInfo
}) => {
  const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  })

  const haveSell = haveSelling

  const sellersInfo = sellerInfo

  const series = [
    {
      name: 'vendas',
      data: data
    }
  ]

  const options = {
    chart: {
      height: 350
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#4ff08f'],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 1,
        opacityTo: 0,
        stops: [70, 100]
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '8px',
        borderRadius: 6
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
    grid: {
      show: true,
      borderColor: '#244282'
    }
  }

  return (
    <Container>
      <Header>
        <div>
          <img src="/sellchart.svg" alt="Título" />
          <h2>{sellCount} Vendas</h2>
        </div>
        <div>
          <button>
            <img src="/sellingChart/chevronRight.svg" alt="Botão esquerda" />
          </button>
          <span>{period}</span>
          <button>
            <img src="/sellingChart/chevronLeft.svg" alt="Botão esquerda" />
          </button>
        </div>
      </Header>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />

      {haveSell && (
        <Sellings>
          <div className="borderTop" />

          <h3>Relatório de vendas</h3>

          <Table>
            <div>
              <span>Cliente</span>
              <span>Valor</span>
              <span>Data</span>
            </div>

            {sellersInfo &&
              sellersInfo.map(seller => {
                return (
                  <div key={seller.name}>
                    <span>{seller.name}</span>
                    <span>
                      <img src="/sellingChart/greenPoint.svg" />
                      R$ {seller.value}
                    </span>
                    <span>{seller.date}</span>
                  </div>
                )
              })}
          </Table>
        </Sellings>
      )}
    </Container>
  )
}

export default SellingChart
