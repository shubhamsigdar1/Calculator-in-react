export default ButtonContainer({children}) {
    return (
        <section className="container">
           <input type="text" className="calculation-section" />
           {children}
        </section>
    );
}