import Joke from "./component/Joke"

function App() {
  return (
    <main className="">
      <Joke 
        setup="This is joke number one" 
        punchline="This is punchline number 1"
      />
      <Joke 
        setup="This is joke number two" 
        punchline="This is punchline number 2"
      />
      <Joke 
        setup="This is joke number three" 
        punchline="This is punchline number 3"
      />
      <Joke 
        setup="This is joke number four" 
        punchline="This is punchline number 4"
      />
    </main>
  )
}

export default App
