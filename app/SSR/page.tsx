// SSR server side rendering
async function getData(){
    try{
    const message = await fetch('http://192.168.1.35:3000/api/hello');
    console.log('the type of API', message);
    return message.json();
} catch(error) {
    console.error('Error catching data',error);
}
}

interface Messages {
    message : string
}

export default async function SSR() {
    const api_message : Messages = await getData();
    return (
        <div className="container">
        <h1>hi im about {api_message.message}</h1>
   </div>
    )


}