import break01 from "../assets/break-01.jpg";
import break02 from "../assets/break-02.webp";
import break03 from "../assets/break-03.webp";

import dinner01 from "../assets/dinner-01.jpg";
import dinner02 from "../assets/dinner-02.jpg";
import dinner03 from "../assets/dinner-03.webp";

import lunch01 from "../assets/lunch-03.jpg";
import lunch02 from "../assets/lunch-02.jpg";
import lunch03 from "../assets/lunch-01.webp";

export const Items = [
  {
    id: Math.random().floor,
    title: "وجبة الغداء ",
    description: " وجية غداء غنية الخضروات مع المكرونة  ",
    price: "250 جنية ",
    category: "غداء",
    imgUrl: lunch01,
  },
  {
    id: Math.random().floor,
    title: "وجبة فطار ",
    description: " وجبة فطار صحية تتكون من البيض و الفلفل و الطماطم ",
    price: "50 جنية ",
    category: "فطار",
    imgUrl: break01,
  },

  {
    id: Math.random().floor,
    title: "وجبة الغداء ",
    description: " وجبة غداء طبيعية بالكامل مع شرائح الخبز  ",
    price: "450 جنية ",
    category: "غداء",
    imgUrl: lunch02,
  },
  {
    id: Math.random().floor,
    title: "وجبة الغداء ",
    description: " وجبة غداء مكونه من الجبن الخضروات وقطعتين من الخبز ",
    price: "450 جنية ",
    category: "غداء",
    imgUrl: lunch03,
  },
  {
    id: Math.random().floor,
    title: "وجبة الفطار ",
    description: " وجبة فطار تحتوي علي شرحتين من الخبز مع البيض و الطماطم ",
    price: "30 جنية ",
    category: "فطار",
    imgUrl: break02,
  },
  {
    id: Math.random().floor,
    title: "وجبة الفطار ",
    description: " وجبة فطار تحتوي علي بيض و لانشون مع الخبز ",
    price: "30 جنية ",
    category: "فطار",
    imgUrl: break03,
  },

  {
    id: Math.random().floor,
    title: "وجبة العشاء ",
    description:
      " وجبة عشاء غنية بالمواد الصحية تحتوي علي الجبن و قطعة من اللحم الابيض",
    price: "150 جنية ",
    category: "عشاء",
    imgUrl: dinner01,
  },
  {
    id: Math.random().floor,
    title: "وجبة العشاء ",
    description: " وجبة عشاء تحتوي علي قطع من اللحم غنية بالجبن ",
    price: "190 جنية ",
    category: "عشاء",
    imgUrl: dinner03,
  },
  {
    id: Math.random().floor,
    title: "وجبة العشاء ",
    description: " وجبة عشاء تحتوي علي أرز مع دجاج ",
    price: "320 جنية ",
    category: "عشاء",
    imgUrl: dinner02,
  },
];
