//props.children is used to pass the content
//example: <TabButton>Tab 1</TabButton>
//or
//<TabButton><img src="logo.png" alt="Logo"/></TabButton>
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
