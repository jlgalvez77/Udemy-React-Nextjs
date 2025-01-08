import imgUno from './assets/images/img.jpg';

const MyButton  = (props) => {
    return (
        <button>{props.text}</button>
    )
}

const OnlineText = () => {
    return (
        <div>
            <h3>Online</h3>
        </div>
    )
};

const OfflineText = () => {
    return (
        <div>
            <h3>Offline</h3>
        </div>
    )
};

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    // const pathImg = "src/assets/images/img.jpg";
    const user = false;

    const fruits = ['manzana', 'pera', 'uva', 'sandia', 'melon'];

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={imgUno}  alt={`imagen-${title}`} />
            <MyButton text='Botón 1'/>
            <MyButton text='Botón 2'/>
            <MyButton text='Botón 3'/>
            {
                user ? <OnlineText /> : <OfflineText />
            }
            <ul>
                {
                    fruits.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>
                    })
                }
            </ul>
        </>
    );
};

export default App;