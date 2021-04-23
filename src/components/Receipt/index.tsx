import { useState, useContext, useRef } from 'react'
import { Container } from './styles'

import MenuContext from '../../context/MenuContext'

import CheckBoxAcc from '../CheckBoxAccount'
import CheckBoxAntecipation from '../CheckBoxAntecipation'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

interface Props {
  data: any[]
}

const Receipts: React.FC<Props> = ({ data }) => {
  const { state, setState: setMenuState } = useContext(MenuContext)

  const formRef = useRef<FormHandles>(null)
  const formRefAnte = useRef<FormHandles>(null)

  const [available, setAvailable] = useState(false)
  const [antecipacion, setAntecipation] = useState(false)
  const [mounth, setMounth] = useState(null)
  const [year, setYear] = useState(null)
  const [openMounth, setOpenMounth] = useState(false)
  const [openYear, setOpenYear] = useState(false)
  const [saque, setSaque] = useState(false)
  const [ante, setAnte] = useState(false)

  const handleClick = info => {
    if (info.name === 'Mês') {
      setOpenMounth(!openMounth)
    }
    if (info.name === 'Ano') {
      setOpenYear(!openYear)
    }
  }

  const handleSubmit = data => {
    console.log(data)
  }
  const handleSubmitAntecipation = data => {
    console.log(data)
  }

  return (
    <Container available={available} antecipation={antecipacion}>
      {state.submenu === 'Receita' && (
        <>
          <h2>
            Esta página mostra sua receita total ao longo de toda sua trajetória
            como agente da B4you Starter
          </h2>
          <div className="buttonContainerReceipt">
            <button
              onClick={() => setAvailable(!available)}
              className="buttonAvailable"
            >
              <img src="/pointsReceipt.svg" className="points-receipt" />
              <div className="buttonTitleReceipt">
                <img src="/availablereceiptbutton.svg" />
                <span>Disponível para Saque</span>
              </div>
              <div className="valuescontainer">
                <span>R$</span>
                <span>
                  {data[0].availablebalance}
                  <div>{data[0].availablePercentage} de crescimento</div>
                </span>
                <img src="/up.svg" />
              </div>
            </button>

            <button
              onClick={() => setAntecipation(!antecipacion)}
              className="buttonAntecipation"
            >
              <img src="/pointsReceipt.svg" className="points-receipt" />
              <div className="buttonTitleReceipt">
                <img src="/antecipationreceiptbutton.svg" />
                <span>Antecipação de Saque</span>
              </div>
              <div className="valuescontainer">
                <span>R$</span>
                <span>
                  {data[0].antecipation}
                  <div>{data[0].antecipationPercentage} de crescimento</div>
                </span>
              </div>
            </button>
          </div>

          {!available &&
            !antecipacion &&
            data.map(single => {
              return single.availableData.map((info, index) => {
                return (
                  <div className="infodata" key={index}>
                    <span>{info.name}:</span>

                    {info.value.length > 1 && (
                      <span
                        className="infoClick"
                        onClick={() => handleClick(info)}
                      >
                        {mounth === null || year === null
                          ? info.value[info.value.length - 1].name
                          : info.value.map(single => {
                              if (mounth === single.name) {
                                return mounth
                              }
                              if (year === single.name) {
                                return year
                              }
                            })}
                        <img src="/chevrondown.svg" />
                        {openMounth && info.name === 'Mês' && (
                          <div>
                            {info.value.map((mounth, index) => {
                              return (
                                <div
                                  onClick={() => setMounth(mounth.name)}
                                  key={`${index}year`}
                                >
                                  {mounth.name}
                                </div>
                              )
                            })}
                          </div>
                        )}
                        {openYear && info.name === 'Ano' && (
                          <div>
                            {info.value.map((mounth, index) => {
                              return (
                                <div
                                  onClick={() => setYear(mounth.name)}
                                  key={`${index}mounth`}
                                >
                                  {mounth.name}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </span>
                    )}

                    <span className="infovalue">
                      {info.value.length === 1 && info.value[0]}
                      {info.value.length !== 1 &&
                        mounth === null &&
                        year === null &&
                        info.value[info.value.length - 1].value}
                      {info.value.length !== 1 &&
                        (mounth !== null || year !== null) &&
                        info.value.map(single => {
                          if (mounth === single.name && mounth !== null) {
                            return single.value
                          }
                          if (year === single.name && year !== null) {
                            return single.value
                          }
                        })}
                    </span>
                  </div>
                )
              })
            })}

          {available && (
            <div className="accounts">
              <h3>Contas Cadastradas</h3>

              <Form ref={formRef} onSubmit={handleSubmit}>
                {data[0].accounts.map((account, index) => {
                  return (
                    <CheckBoxAcc
                      name={`Banco ${index} ${account.name}`}
                      key={`${index}checkbox`}
                      text={`${account.number}-${account.name} - ${account.ag} | C/C: ${account.cc}`}
                    />
                  )
                })}
                <button
                  className="account-form-button"
                  onClick={() => setSaque(true)}
                >
                  {!saque ? (
                    <span>Solicitar Saque</span>
                  ) : (
                    <span>
                      Saque Solicitado <img src="/correct.svg" />
                    </span>
                  )}
                </button>
              </Form>
            </div>
          )}

          {antecipacion && (
            <div className="accounts">
              <h3>Contas Cadastradas</h3>

              <Form ref={formRefAnte} onSubmit={handleSubmitAntecipation}>
                {data[0].accounts.map((account, index) => {
                  return (
                    <CheckBoxAntecipation
                      name={`Banco ${index} ${account.name}`}
                      key={`${index}checkbox`}
                      text={`${account.number}-${account.name} - ${account.ag} | C/C: ${account.cc}`}
                    />
                  )
                })}
                <button
                  className="account-form-button"
                  onClick={() => setAnte(true)}
                >
                  {!ante ? (
                    <span>Antecipar Saque</span>
                  ) : (
                    <span>
                      Antecipação Concuída <img src="/correct.svg" />
                    </span>
                  )}
                </button>
              </Form>
            </div>
          )}
        </>
      )}
    </Container>
  )
}

// ajeitar 2 cards respons

export default Receipts
