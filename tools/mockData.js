const products = [
  {
    id: "04369248800-V2020",
    styles: [
      {
        images: [
          {
            url:
              "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/72/4369044800_1_1_1.jpg?ts=1579709905065",
            format: "jpg",
          },
        ],
        id: 42113479,
        styleCode: "000",
        styleName: "BASESTYLE",
        reference: "C04369044800000-V2020",
        visits: 75000,
        sales: 0,
        CTR: 0.56,
        turnover: 16.3,
        visible: true,
      },
      {
        images: [
          {
            url:
              "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/13/4369044800_1_1_1.jpg?ts=1582709555821",
            format: "jpg",
          },
        ],
        id: 46535585,
        styleCode: "001",
        styleName: "URBAN",
        reference: "C04369044800001-V2020",
        visits: 7000,
        sales: 2350,
        CTR: 0.26,
        turnover: 15.1,
        visible: false,
      },
      {
        images: [
          {
            url:
              "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/72/4369044800_1_1_1.jpg?ts=1579709905065",
            format: "jpg",
          },
        ],
        id: 42965143,
        styleCode: "003",
        styleName: "EDITED",
        reference: "C04369044800003-V2020",
        visits: 5000,
        sales: 1000,
        CTR: 0.23,
        turnover: 6.1,
        visible: true,
      },
      {
        images: [
          {
            url:
              "https://static.zara.net/photos/2020/V/0/1/p/4369/044/800/2/4369044800_1_1_1.jpg?ts=1579797408386",
            format: "jpg",
          },
        ],
        id: 34150149,
        styleCode: "066",
        styleName: "OTHER",
        reference: "C04369044800066-V2020",
        visits: 10000,
        sales: 7653,
        CTR: 0.12,
        turnover: 0.0,
        visible: true,
      },
    ],
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  products,
};
