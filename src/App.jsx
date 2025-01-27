import Header from "./component/Header"
import Entry from "./component/Entry"
import Contact from "./component/Contact"

const person = {
  img: '../../mr-whiskerson.png',
  name: 'Mr. Whiskerson',
  phone: '(212) 555-1234',
  email: 'mr.whiskaz@catnap.meow'
};

const {img, name, phone, email} = person;

function App() {

  return (
    
      <main className="contacts">
          <Contact 
              img={person.img} 
              name={person.name} 
              phone={person.phone} 
              email={person.email} 
          />
      </main>
    
  )
}

export default App
