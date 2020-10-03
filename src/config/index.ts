export interface Irecipe {
  src: string;
  name: string;
  page: number;
  zutaten: string[];
}

const recipes: Irecipe[] = [
  {
    src: "KartoffelGemuesePfanne.jpg",
    name: "Kartoffelgemüsepfanne",
    page: 1,
    zutaten: ["Salz"],
  },
  {
    src: "Doeppekooche.jpg",
    name: "Döppekooche",
    page: 2,
    zutaten: ["Pfeffer"],
  },
  {
    src: "KuerbisLasagne.jpg",
    name: "Kürbis-Lasagne",
    page: 3,
    zutaten: ["Pfeffer"],
  },
];

export default recipes;
