export default function ButtonContainer({children}) {
    return (
        <section className="container">
           <input type="text" className="calculation-section" />
           {children}
        </section>
    );
}