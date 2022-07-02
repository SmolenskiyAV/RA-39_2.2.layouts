
export default function IconSwitch(props) { // компонент иконки-переключателя способа отображеня товаров
  const { icon } = props;

  return (
    // Icon
    <>
      <i className="material-icons" data-selected={icon}>{icon}</i>
    </>
  );
}