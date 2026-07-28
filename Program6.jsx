// 6: Create a React component named TodoList that displays the personal to-do list. Store the name and styling information
//  in a JavaScript object, then use JSX to access the object's properties. Apply the styling dynamically using the style 
// attribute and display the name, profile image, and list of tasks.

function Program6(){
    const person = {
      name: "Gregorio Y. Zara",
      avatar:"https://react.dev/images/docs/scientists/7vQD0fPs.jpg",
      theme: {
        backgroundColor: "black",
        color: "pink",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center"
      }
    };
    return(
      <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.avatar}
        alt={person.name}
      />
      <div>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ul>
      </div>
    </div>
  );
}
export default Program6;
