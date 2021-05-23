export interface Irecipe {
  src: string;
  name: string;
  zutaten?: string[];
  page?: number;
  header: boolean
  visible?: boolean
}

const recipes: Irecipe[] = [
   
  {
    src: "Erdbeer-Quark.jpg",
    name: "Erdbeer-Quark",
    zutaten: ["Erdbeeren","Quark"],
    header: false,
  },
  {
    src: "Joghurtbombe.jpg",
    name: "Joghurtbombe",
    header: false
  },
  {
    src: "Pizzasoße.jpg",
    name: "Pizzasoße",
    zutaten: ["Tomaten","Tomatenmark"],
    header: false,
  },
  {
    src: "Pizzasoße.jpg",
    name: "Pizzasoße",
    zutaten: ["Tomaten","Tomatenmark"],
    header: false,
  },
];

export default recipes;
