export default function Contact({img, name, phone, email}){
    
    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article> 
    )
}

const person = {
    img: '../../mr-whiskerson.png',
    name: 'Mr. Whiskerson',
    phone: '(212) 555-1234',
    email: 'mr.whiskaz@catnap.meow'
  };
  
const {img, name, phone, email} = person;

