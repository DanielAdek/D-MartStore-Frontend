import React, { useState, useEffect } from 'react';
import * as RC from '../assets/styles/kart';
import { Karts } from '../components/kart'
import { Modal } from '../components/modal';
import { ProductData } from '../assets/map.v';

export const KartList = () => {
  const [currentFigure, setCurrentFigure] = useState(null);
  const [visible, setVisible] = useState(false);

  const hideModal = () => setVisible(false)

  const showModal = () => setVisible(true)

  useEffect(() => {
    setCurrentFigure(
      ProductData.map((data, index) => {
        return { [index]: 1, data }
      })
    )
  }, [])

  const handleQtyAmout = (event, index) => {
    const currentFigures = currentFigure.slice();
    currentFigures.forEach((value, idx) => {
      if (idx === index) {
        const qty = event.target.textContent === "+" ? value[idx] += 1 : 
        event.target.textContent === "-" && value[idx] >= 2 ? value[idx] -= 1 : 1;
        setCurrentFigure([{[index]: qty }]);
      }
      setCurrentFigure(currentFigures);
    });
  }
  
  return (
    <RC.KartWrapper>
      <RC.KartContainer>
        <RC.KartTopSection>
          <RC.KartPageTitle>Shopping Cart</RC.KartPageTitle>
          <RC.KartTopButtonSection>
            <RC.KartTopButtons onClick={showModal} className="btn btn-md" bClr="rgb(61, 70, 77)" color="#fff" bgColor="rgb(61, 70, 77)">Cart Total</RC.KartTopButtons>
            <RC.KartTopButtons className="btn btn-sm" bClr="rgb(255, 211, 51)" color="rgb(61, 70, 77)" bgColor="rgb(255, 211, 51)">Checkout</RC.KartTopButtons>
          </RC.KartTopButtonSection>
        </RC.KartTopSection>
      <RC.KartTable>
        <RC.KartTableRow>
          <RC.KartTableHeader>Image</RC.KartTableHeader>
          <RC.KartTableHeader>Product</RC.KartTableHeader>
          <RC.KartTableHeader>Price</RC.KartTableHeader>
          <RC.KartTableHeader>Quantity</RC.KartTableHeader>
          <RC.KartTableHeader>Total</RC.KartTableHeader>
          <RC.KartTableHeader>&nbsp;</RC.KartTableHeader>
        </RC.KartTableRow>
        { ProductData.map((data, index) => ( <Karts key={index}
          data={data}
          index={index}
          currentFigure={currentFigure}
          handleQtyAmout={handleQtyAmout}
        /> ))}
      </RC.KartTable>
        <Modal visible={visible} w="530px" h="450px" t="25%" l="30%">
          <RC.KartTableDataDelButton onClick={hideModal}>X</RC.KartTableDataDelButton>
        </Modal>
      </RC.KartContainer>
    </RC.KartWrapper>
  )
}