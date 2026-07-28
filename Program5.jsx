//5: Create a React functional component named Avatar 
// that displays the profile picture,store the image URL and the 
// image description in JavaScript variables, and use JSX to pass 
// these values to the src and alt attributes of an <img> element.

function Program5(){
    const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return(
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}
export default Program5;
