import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Bag1 from "./assets/bag_1.png"
import Bag2 from "./assets/bag_2.png"
import Bag3 from "./assets/bag_3.png"
import Bag4 from "./assets/bag_4.png"
import Tile from "./components/Tile.jsx";
import Brand from "./assets/brand.png"
import OurStory from "./assets/our_story.png"

function App() {


  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
            handleClick={() => (console.log("to the collection"))}
            buttonType="button"
            btnActive={false}
            >to the collection</Button>
            <Button
            handleClick={() => (console.log("shop all bags"))}
            buttonType="button"
            btnActive={false}
            >shop all bags</Button>
            <Button
            handleClick={() => (console.log("pre-orders"))}
            buttonType="button"
            btnActive={true}
            >pre-orders</Button>
        </nav>

          <main>
              <Product
                label="Best seller"
                img={Bag1}
                imgDescription="The Handy Bag"
                price="€ 400,-"
                title="The Handy Bag"
              ></Product>
              <Product
                  label="Best seller"
                  img={Bag2}
                  imgDescription="The stylish bag"
                  price="€ 250,-"
                  title="The stylish bag"
              ></Product>
              <Product
                  label="New collection"
                  img={Bag3}
                  imgDescription="The simple bag"
                  price="€ 300,-"
                  title="The simple bag"
              ></Product>
              <Product
                  label="New collection"
                  img={Bag4}
                  imgDescription="The trendy bag"
                  price="€ 400,-"
                  title="The trendy bag"
              ></Product>
          </main>
          <footer>
              <Tile title="The Brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, facere, veritatis? At deserunt error exercitationem inventore itaque repudiandae sit suscipit.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad animi consequuntur dolorum explicabo fugit, minima nesciunt obcaecati quas saepe.
                </p>
              </Tile>
              <Tile>
                  <img src={Brand} alt="Brand"/>
              </Tile>
              <Tile>
                  <img src={OurStory} alt="Our Story"/>
              </Tile>
              <Tile title="Our Story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad architecto assumenda dignissimos minus nemo nulla quas reiciendis rem tenetur!</p>
              </Tile>

          </footer>
      </>
  )
}

export default App
