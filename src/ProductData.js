import hamHealthy from "./restau_image/hamburger/hamburger_healthy.jpeg";
import hamChicken from "./restau_image/hamburger/hamburger_pannée.jpg";
import hamromantic from "./restau_image/hamburger/hamburger_romantic.jpg";
import hamviande from "./restau_image/hamburger/Hamburger_viande.jpg";
import hamdouble from "./restau_image/hamburger/Humburger_double.jpg";

import caneloni from "./restau_image/pasta/caneloni.jpeg";
import creamy from "./restau_image/pasta/creamy.jpg";
import lasagne from "./restau_image/pasta/lasagne.jpg";
import puttanesca from "./restau_image/pasta/puttanesca.jpeg";
import ravioli from "./restau_image/pasta/ravioli.jpg";
import spagetti from "./restau_image/pasta/spagetti.jpg";
import tagliatelle from "./restau_image/pasta/tagliatelle.jpg";

import cheese from "./restau_image/pizza/four_cheese.jpg";
import season from "./restau_image/pizza/four_season.jpg";
import mer from "./restau_image/pizza/fruit_mer.jpg";
import mexicain from "./restau_image/pizza/mexicain.jpg";
import pepperoni from "./restau_image/pizza/peperoni.jpg";
import touna from "./restau_image/pizza/touna.jpg";

import Merguez from "./restau_image/sandwich/sandwic_merguez.jpg";
import cordon from "./restau_image/sandwich/sandwich_cordonbleu.jpg";
import jombon from "./restau_image/sandwich/sandwich_jombon.jpg";
import kebab from "./restau_image/sandwich/sandwich_kebab.jpg";
import pannée from "./restau_image/sandwich/sandwich_pannée.jpg";
import chpoulet from "./restau_image/sandwich/sandwich_poulet.jpg";

export const ProductData = [
  {
    id: Math.random(),
    name: "Hamburger healthy",
    Familly: {
      name: "Hamburger",
    },
    price: "7,500 dt",
    image: hamHealthy,
    Description:
      "wholemeal bread , Hamburger , slice cheese , tomato , letus , onions ,barbeque sauce  , ALGERIAN sauce  , mayonaise",
  },
  {
    id: Math.random(),
    name: "Hamburger CHIKEN",
    Familly: {
      name: "Hamburger",
    },
    price: "9,500 dt",
    image: hamChicken,
    Description:
      "BREADED CHIKEN , slice cheese , tomato , letus , onions ,barbeque sauce  , ALGERIAN sauce , mayonaise",
  },
  {
    id: Math.random(),
    name: "Hamburger Romantic for couple",
    Familly: {
      name: "Hamburger",
    },
    price: "16,700 dt",
    image: hamromantic,
    Description:
      "kentucky , slice cheese , tomato ,double  letus , onions , sauce barbeque , sauce algerienne , mayonaise",
  },
  {
    id: Math.random(),
    name: "Hamburger steack",
    Familly: {
      name: "Hamburger",
    },
    price: "9,000 dt",
    image: hamviande,
    Description:
      "Hamburger steack, slice cheese , tomato , letus , onions , sauce barbeque , sauce algerienne , mayonaiase",
  },
  {
    id: Math.random(),
    name: "Hamburger double",
    Familly: {
      name: "Hamburger",
    },
    price: "12,000 dt",
    image: hamdouble,
    Description:
      "wholemeal bread , Hamburger , slice cheese , wholemeal bread , Hamburger , slice cheese , tomato , letus , onions , sauce barbeque , sauce algerienne , mayonaiase , letus",
  },
  {
    id: Math.random(),
    name: "Tagliatelle ",
    Familly: {
      name: "Pasta",
    },
    price: "18,500 dt",
    image: tagliatelle,
    Description: "Mushroom, cheddar, parmesan, fresh cream, chicken, onions",
  },
  {
    id: Math.random(),
    name: "Spagetti ",
    Familly: {
      name: "Pasta",
    },
    price: "18,500 dt",
    image: spagetti,
    Description: "Mushroom, black olive, parmesan, tomato sauce, chicken",
  },
  {
    id: Math.random(),
    name: "Ravioli shrimp ",
    Familly: {
      name: "Pasta",
    },
    price: "23,500 dt",
    image: ravioli,
    Description: "parmesan, fresh cream , parsil , shrimp , ricotta",
  },
  {
    id: Math.random(),
    name: "Puttanesca ",
    Familly: {
      name: "Pasta",
    },
    price: "18,500 dt",
    image: puttanesca,
    Description: "Mushroom, various vegetables, parmesan, onions, tomato, tona",
  },
  {
    id: Math.random(),
    name: "lasagne ",
    Familly: {
      name: "Pasta",
    },
    price: "15,000 dt",
    image: lasagne,
    Description: "Mozarella, bechamel sauce, tomato sauce, minced meat",
  },
  {
    id: Math.random(),
    name: "Creamy ",
    Familly: {
      name: "Pasta",
    },
    price: "13,500 dt",
    image: creamy,
    Description:
      "cheddar, parmesan, fresh cream, bechamel sauce , persil , onions,  chicken",
  },
  {
    id: Math.random(),
    name: "Caneloni ",
    Familly: {
      name: "Pasta",
    },
    price: "18,500 dt",
    image: caneloni,
    Description: "Mozarella, bechamel sauce, tomato sauce, minced meat",
  },
  {
    id: Math.random(),
    name: "Pizza Four cheese ",
    Familly: {
      name: "Pizza",
    },
    price: "32,000 dt",
    image: cheese,
    Description:
      "Tomato sauce , Mozarella , cheddar , roquefort , permesan , Gruyere",
  },
  {
    id: Math.random(),
    name: "Pizza Four season ",
    Familly: {
      name: "Pizza",
    },
    price: "23,000 dt",
    image: season,
    Description:
      "Tomato sauce , Mozarella , Gruyere , ham, green pepper, onions, spinash",
  },
  {
    id: Math.random(),
    name: "Pizza Sea Food",
    Familly: {
      name: "Pizza",
    },
    price: "32,000 dt",
    image: mer,
    Description:
      "Tomato sauce , Mozarella ,cheddar , shrimp , Cauliflower , clevise",
  },
  {
    id: Math.random(),
    name: "Pizza Mexicain",
    Familly: {
      name: "Pizza",
    },
    price: "24,000 dt",
    image: mexicain,
    Description: "Tomato sauce , Mozarella , minced meat , tomato , Red pepper",
  },
  {
    id: Math.random(),
    name: "Pizza Pepperoni",
    Familly: {
      name: "Pizza",
    },
    price: "17,000 dt",
    image: pepperoni,
    Description: "Tomato sauce , Mozarella , pepperoni, permesan",
  },
  {
    id: Math.random(),
    name: "Pizza Neptune",
    Familly: {
      name: "Pizza",
    },
    price: "16,000 dt",
    image: touna,
    Description: "Tomato sauce , Mozarella , tona , green olive",
  },
  {
    id: Math.random(),
    name: "Sandwich kebab",
    Familly: {
      name: "Sandwich",
    },
    price: "9,000 dt",
    image: kebab,
    Description: "kebab, egg , cheese slice , onions , tomato , letus ",
  },
  {
    id: Math.random(),
    name: "Sandwich Merguez",
    Familly: {
      name: "Sandwich",
    },
    price: "11,000 dt",
    image: Merguez,
    Description:
      "Merguez , egg , cheese slice , onions , tomato , letus , black olive",
  },
  {
    id: Math.random(),
    name: "Sandwich blue cord",
    Familly: {
      name: "Sandwich",
    },
    price: "9,000 dt",
    image: cordon,
    Description: "blue cord , cheese slice , onions , tomato , letus",
  },
  {
    id: Math.random(),
    name: "Sandwich jambon",
    Familly: {
      name: "Sandwich",
    },
    price: "9,000 dt",
    image: jombon,
    Description: "kebab , cheese slice , onions , tomato , letus ",
  },
  {
    id: Math.random(),
    name: "Sandwich CHIKEN",
    Familly: {
      name: "Sandwich",
    },
    price: "9,000 dt",
    image: chpoulet,
    Description: "CHIKEN , cheese slice , onions , tomato , letus ",
  },
  {
    id: Math.random(),
    name: "Sandwich panned",
    Familly: {
      name: "Sandwich",
    },
    price: "9,000 dt",
    image: pannée,
    Description: "PANNED CHIKEN , cheese slice , onions , tomato , letus ",
  },
];
