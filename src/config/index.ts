export interface Irecipe {
  src: string;
  name: string;
  page: number;
  zutaten: string[];
}
export interface Iheader {
  header: boolean;
  name: string;
  page: number;
}

const recipes: (Irecipe | Iheader)[] = [
  {
    header: true,
    name: "Start",
    page: 1,
  },
  {
    src: "KartoffelGemuesePfanne.jpg",
    name: "Kartoffelgemüsepfanne",
    page: 2,
    zutaten: ["Salz"],
  },
  {
    src: "Doeppekooche.jpg",
    name: "Döppekooche",
    page: 3,
    zutaten: ["Pfeffer"],
  },
  {
    src: "KuerbisLasagne.jpg",
    name: "Kürbis-Lasagne",
    page: 4,
    zutaten: ["Pfeffer"],
  },
];

export default recipes;
