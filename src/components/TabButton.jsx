export default function TabButton({ children, onSelect, isSelected }) {
  // document.querySelector('button').addEventListener('click', () => {
  // })
  //   function onSelect() {
  //     console.log("Hello");
  //   }
  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
