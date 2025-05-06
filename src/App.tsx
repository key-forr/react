import React, { useState } from "react";
import { shortId } from "uq-id";

export default function App() {
  const [sample, setSample] = useState(
    Array.from({ length: 5 }, (x) => shortId())
  );
  const [rem, setRem] = useState();

  const handleClick = () => {
    const newSample = [...sample];
    const newRem = newSample.splice(3, 1);
    setSample(newSample);
    setRem(newRem);
  };
  {
    /*наприклад якщо нам треба видалити іграшку під номером 3, то ми видалимо її, але react буде думати що вона ще є, 
    тому що номер 4 перемістився в номер 3, значить вона ще є(для react), а фактично її нема
    
    Як React бачить світ з індексами як ключами:

    React думає: "Я відстежую елементи за їхніми номерами (індексами)"
    У нас є іграшки з номерами 0, 1, 2, 3, 4
    
    Коли видаляємо іграшку з номером 3:

    До видалення: іграшки з номерами [0, 1, 2, 3, 4]
    Після видалення: іграшки з номерами [0, 1, 2, 3] (бо іграшка 4 тепер стала номером 3!)
    
    Що думає React:

    "О, у мене були елементи з номерами 0, 1, 2, 3, 4"
    "Тепер у мене є елементи з номерами 0, 1, 2, 3"
    "Отже, зник елемент з номером 4, а не з номером 3!"


    Що відбувається на практиці:

    React зберігає стан елементів (наприклад, текст в полях вводу) прив'язаним до ключів
    Коли ми видаляємо елемент 3, елемент 4 переїжджає на позицію 3
    Але React думає, що елемент 3 залишився тим самим
    Тому React зберігає стан елемента 3, хоча фізично це вже зовсім інший елемент!*/
  }
  return (
    <div>
      <h4>Example to see the index as key issue</h4>
      <div onClick={handleClick}>Click to remove 3rd element</div>
      <div>
        {sample.map((s, index) => (
          <div key={index}>
            {index}: <input defaultValue={s} />
          </div>
        ))}
      </div>
      <div key={rem}>Removed element: {rem}</div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function App() {
//   const [items, setItems] = useState([
//     { name: "Apple", quantity: 1 },
//     { name: "Banana", quantity: 2 },
//   ]);

//   const addItem = () => {
//     setItems([{ name: "", quantity: 0 }, ...items]);
//   };

//   const handleChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   return (
//     <div>
//       <button onClick={addItem}>Додати товар зверху</button>
//       {items.map((item, index) => (
//         <div key={index}>
//           <input
//             placeholder="Назва"
//             value={item.name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Кількість"
//             value={item.quantity}
//             onChange={(e) => handleChange(index, "quantity", e.target.value)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function App() {
//   const [items, setItems] = useState([
//     { id: 1, value: "Apple" },
//     { id: 2, value: "Banana" },
//     { id: 3, value: "Cherry" },
//   ]);

//   const handleAddItem = () => {
//     const newItem = { id: Date.now(), value: "" };
//     setItems([newItem, ...items]);
//   };

//   const handleChange = (id, value) => {
//     const newItems = items.map((item) =>
//       item.id === id ? { ...item, value } : item
//     );
//     setItems(newItems);
//   };

//   return (
//     <div>
//       <button onClick={handleAddItem}>Add item at top</button>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <input
//               value={item.value}
//               onChange={(e) => handleChange(item.id, e.target.value)}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
