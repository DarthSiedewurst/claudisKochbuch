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
    src: "Himbeer-Traum, Joghurtbombe, Kirsch-Philadelphia-Creme.jpg",
    name: "Himbeer-Traum, Joghurtbombe, Kirsch-Philadelphia-Creme",
    header: true
  }, 
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
    src: "KartoffelGemuesePfanne.jpg",
    name: "Fleischgerichte",
    header: true
  },
  {
    src: "KartoffelGemuesePfanne.jpg",
    name: "Kartoffelgemüsepfanne",
    zutaten: ["Salz","Kartoffeln"],
    header: false,
  },
  {
    src: "KuerbisLasagne.jpg",
    name: "Kürbis-Lasagne",
    zutaten: ["Pfeffer", "Kürbis"],
    header: false
  },
    {
    src: "KartoffelGemuesePfanne.jpg",
    name: " ",
    header: true,
    visible: false
  },
];

export default recipes;
