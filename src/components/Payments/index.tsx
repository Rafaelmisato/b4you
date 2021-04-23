import { useState, useRef } from 'react'
import { Container } from './styles'

interface Props {
  data: any[]
}

const Payments: React.FC<Props> = ({ data }) => {
  const [dataInfo, setDataInfo] = useState(null)

  const handleClick = info => {
    if (dataInfo === null) {
      setDataInfo(info.data)
    }
    if (dataInfo !== null) {
      setDataInfo(null)
    }
  }

  return (
    <>
      <Container>
        <>
          <h2>
            Esta página mostra seus próximos pagamentos. Para acessar suas
            comissões futuras clique na aba Agendamento acima.
          </h2>
          <div className="buttonContainerReceipt">
            <button className="buttonAvailable">
              <img src="/pointsReceipt.svg" className="points-receipt" />
              <div className="buttonTitleReceipt">
                <img src="/availablereceiptbutton.svg" />
                <span>Saque Agendado</span>
              </div>
              <div className="valuescontainer">
                <span>R$</span>
                <span>{data[0].scheduled}</span>
                <img src="/calendar.svg" />
              </div>
            </button>

            <button className="buttonAntecipation">
              <img src="/share.svg" className="points-receipt" />
              <div className="buttonTitleReceipt">
                <img src="/cashSquare.svg" />
                <span>Total Sacado</span>
              </div>
              <div className="valuescontainer">
                <span>R$</span>
                <span>{data[0].total}</span>
              </div>
            </button>
          </div>

          {data.map(single => {
            return single.withdrawData.map((info, index) => {
              return (
                <>
                  <div
                    className="infodata"
                    key={index}
                    onClick={() => handleClick(info)}
                  >
                    <img src="/cashcircle.svg" />
                    <span>Saque {info.data}</span>
                    <span className="value">R$ {info.value}</span>
                  </div>

                  {info.data === dataInfo && (
                    <div className="moreInfo">
                      <div className="border" />
                      <div className="content">
                        <h2>Minhas vendas</h2>

                        {info.info.map((details, index) => {
                          return (
                            <div
                              key={`${index}detailss`}
                              className="moreDetails"
                            >
                              <span>{details.name}</span>
                              <span>{details.product}</span>
                              <span>{details.data}</span>
                              <span>
                                <img src="/greenpoint.svg" />
                                {details.value}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </>
              )
            })
          })}
        </>
      </Container>
    </>
  )
}

export default Payments
