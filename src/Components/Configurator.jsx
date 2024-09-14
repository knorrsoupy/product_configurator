import { useCustomization } from "../contexts/Customization";
import Chair from "./Chair";
import { chairColors } from "../contexts/Customization.jsx";
import { cushionColors } from "../contexts/Customization.jsx";

const Configurator = () => {
  const { material, setMaterial, setLegs, legs, chairColor, setChairColor, cushionColor, setCushionColor } = useCustomization();
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair Material</div>

        <div className="configurator__section__values">
          <div
            className={`Item ${material === "leather" ? "Item--active" : ""}`}
            onClick={() => {
              setMaterial("leather");
            }}
          >
            <div className="Item__label">Leather</div>
          </div>
          <div
            className={`Item ${material === "fabric" ? "Item--active" : ""}`}
            onClick={() => {
              setMaterial("fabric");
            }}
          >
            <div className="Item__label">Fabric</div>
          </div>
        </div>
      </div>

            {/* for colors */}
      <div className="configurator__section">
        <div className="configurator__section__title">Chair Colors</div>

        <div className="configurator__section__values">
          { chairColors.map((Item, index) => {
            return(  <div 
              key={index}
              className={`Item ${Item.color === chairColor.color ? "Item--active" : ""}`}
              onClick={() => {
                setChairColor(Item);
              }}
            >
               <div className="Item__dot" style={{ backgroundColor: Item.color }} />
              <div className="Item__label">{Item.name}</div>
            </div>
            )
          })
          } 
        </div>
      </div>

      {/* for cushion colors */}
      <div className="configurator__section">
        <div className="configurator__section__title">Cushion Colors</div>

        <div className="configurator__section__values">
          { cushionColors.map((Item, index) => {
            return(  <div 
              key={index}
              className={`Item ${Item.color === cushionColor.color ? "Item--active" : ""}`}
              onClick={() => {
                setCushionColor(Item);
              }}
            >
               <div className="Item__dot" style={{ backgroundColor: Item.color }} />
              <div className="Item__label">{Item.name}</div>
            </div>
            )
          })
          } 
        </div>
      </div>

        
        {/*FOR LEGS  */}

      <div className="configurator__section">
        <div className="configurator__section__title">LEGS</div>

        <div className="configurator__section__values">
          <div
            className={`Item ${legs === 1 ? "Item--active" : ""}`}
            onClick={() => {
              setLegs(1);
            }}
          >
            <div className="Item__label">Modern</div>
          </div>
          <div
            className={`Item ${legs === 2 ? "Item--active" : ""}`}
            onClick={() => {
             setLegs(2);
            }}
          >
            <div className="Item__label">Classic</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Configurator;
