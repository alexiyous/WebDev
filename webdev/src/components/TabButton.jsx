//props.children is used to pass the content
//example: <TabButton>Tab 1</TabButton>
//or
//<TabButton><img src="logo.png" alt="Logo"/></TabButton>
//...props (this syntax means you group all the rest variables/props in this context into 1)
export default function TabButton({ isSelected, children, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>
  );
}
