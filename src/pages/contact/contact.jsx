import './contact.css'

export const Contact = () => {
    return (
        <div id="contact">
            <div id='cWrap'>
            <h1 id='cHead'>Contact me</h1>
            <form>
                <input placeholder="your name"/>
                <input placeholder="your business name"/>
                <input placeholder="your email address "/>
                <textarea placeholder="what do you want to get done" />
                <button> contact us </button>
            </form>
            </div>
        </div>
    )
}