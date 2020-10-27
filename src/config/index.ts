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
    src: "Doeppekooche.jpg",
    name: "Döppekooche",
    zutaten: ["Pfeffer"],
    header: false
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
