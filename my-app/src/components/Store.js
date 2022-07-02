import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

let conditionCardDefault = '';
let conditionListDefault = 'hidden';

export default function Store(props) { // компонент "Страница товаров"
  const { products } = props;

  const [selected, setSelected] = useState('view_list');
  const [conditionCard, setConditionCard] = useState(conditionCardDefault);
  const [conditionList, setConditionList] = useState(conditionListDefault);

  let conditionCardsView = '';
  let conditionListView = 'hidden';
  let valueSelected;
    
  const handlePush = evt => { // ОБРАБОТКА НАЖАТИЯ ИКОНКИ

    
    const preSelected = evt.target.dataset.selected; // получаем текущее значение выбранного вида по нажатой кнопке
    console.log('preSelected = ', preSelected); // КОНТРОЛЬНАЯ ТОЧКА (старое значение фильтра)

    if (preSelected === 'view_module') {
        valueSelected = 'view_list';
    } else {
        valueSelected = 'view_module';
    };
           
    setSelected(prevSelected => valueSelected); // отправляем новое значение выбранного вида в компонент "IconSwitch"
    
    if (valueSelected === 'view_list') {
        conditionCardsView = '';
        conditionListView = 'hidden';
    } else {
        conditionCardsView = 'hidden';
        conditionListView = '';
    }

    setConditionCard(prevConditionCard => conditionCardsView); // отправляем новое значение параметра "hidden" в компонент "CardsView"
    setConditionList(prevConditionList => conditionListView);   // отправляем новое значение параметра "hidden" в компонент "ListView"

  };
  
  return (
    // IconSwitch_button + CardsView / ListView
    <>
      <div className="iconContainer"  onClick={handlePush}>
        <IconSwitch icon={selected} />
      </div>
      <div className="containerCardsView" hidden={conditionCard} >
        <CardsView products={products} />
      </div>
      <div className="containerListView"  hidden={conditionList}>
        <ListView products={products} />
      </div></>
  );
}