import { buttonData } from "./buttonData";

export default function Button(){
    const buttonItem = buttonData.map(item =>
        <button 
            key={item.id} 
            type={item.type}
            value={item.value}
        >
            {item.text}
        </button>
    )

    return <section className="button-section">{buttonItem}</section>
}