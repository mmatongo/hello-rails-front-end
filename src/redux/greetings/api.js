export const fetchGreetings = async (dispatch) => {
    const response = await fetch("http://localhost:3000/greetings");
    const greetings = await response.json();
    return greetings;
}