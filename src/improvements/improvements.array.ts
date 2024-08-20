import { Prisma } from '@prisma/client';

export const improvementsArray: Prisma.ImprovementCreateInput[] = [
  {
    title: 'Спорт',
    img: '/uploads/improvements/01.png',
    type: 'Тело',
    informations: {
      create: [
        {
          information: {
            create: {
              cost: 500,
              profit: 100,
              level: 1,
            },
          },
        },
        {
          information: {
            create: {
              cost: 800,
              profit: 150,
              level: 2,
            },
          },
        },
        {
          information: {
            create: {
              cost: 1400,
              profit: 200,
              level: 3,
            },
          },
        },
        {
          information: {
            create: {
              cost: 2200,
              profit: 300,
              level: 4,
            },
          },
        },
        {
          information: {
            create: {
              cost: 3400,
              profit: 600,
              level: 5,
            },
          },
        },
        {
          information: {
            create: {
              cost: 5000,
              profit: 900,
              level: 6,
            },
          },
        },
        {
          information: {
            create: {
              cost: 7500,
              profit: 1600,
              level: 7,
            },
          },
        },
        {
          information: {
            create: {
              cost: 13000,
              profit: 2600,
              level: 8,
            },
          },
        },
        {
          information: {
            create: {
              cost: 23000,
              profit: 3800,
              level: 9,
            },
          },
        },
        {
          information: {
            create: {
              cost: 32500,
              profit: 7000,
              level: 10,
            },
          },
        },
        {
          information: {
            create: {
              cost: 57500,
              profit: 10500,
              level: 11,
            },
          },
        },
        {
          information: {
            create: {
              cost: 111500,
              profit: 22000,
              level: 12,
            },
          },
        },
        {
          information: {
            create: {
              cost: 184000,
              profit: 36000,
              level: 13,
            },
          },
        },
        {
          information: {
            create: {
              cost: 285000,
              profit: 55500,
              level: 14,
            },
          },
        },
        {
          information: {
            create: {
              cost: 447000,
              profit: 90000,
              level: 15,
            },
          },
        },
        {
          information: {
            create: {
              cost: 735500,
              profit: 155500,
              level: 16,
            },
          },
        },
        {
          information: {
            create: {
              cost: 1042000,
              profit: 257000,
              level: 17,
            },
          },
        },
        {
          information: {
            create: {
              cost: 2,
              profit: 412500,
              level: 18,
            },
          },
        },
        {
          information: {
            create: {
              cost: 2973000,
              profit: 623500,
              level: 19,
            },
          },
        },
        {
          information: {
            create: {
              cost: 43445000,
              profit: 9955000,
              level: 20,
            },
          },
        },
        {
          information: {
            create: {
              cost: 6514500,
              profit: 1458500,
              level: 21,
            },
          },
        },
        {
          information: {
            create: {
              cost: 11329000,
              profit: 2598000,
              level: 22,
            },
          },
        },
        {
          information: {
            create: {
              cost: 18406000,
              profit: 4260500,
              level: 23,
            },
          },
        },
        {
          information: {
            create: {
              cost: 29788500,
              profit: 6434000,
              level: 24,
            },
          },
        },
        {
          information: {
            create: {
              cost: 48533000,
              profit: 10841500,
              level: 25,
            },
          },
        },
        {
          information: {
            create: {
              cost: 82720000,
              profit: 16535000,
              level: 26,
            },
          },
        },
        {
          information: {
            create: {
              cost: 1431845000,
              profit: 25807000,
              level: 27,
            },
          },
        },
        {
          information: {
            create: {
              cost: 1832255000,
              profit: 43710000,
              level: 28,
            },
          },
        },
        {
          information: {
            create: {
              cost: 349035000,
              profit: 74833500,
              level: 29,
            },
          },
        },
        {
          information: {
            create: {
              cost: 490908500,
              profit: 60477000,
              level: 30,
            },
          },
        },
      ],
    },
  },
  // {
  //   title: 'Питание',
  //   img: '/uploads/improvements/02.png',
  //   type: 'Тело',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 800,
  //           profit: 125,
  //           level: 1,
  //         },
  //         {
  //           cost: 1200,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1900,
  //           profit: 250,
  //           level: 3,
  //         },
  //         {
  //           cost: 2800,
  //           profit: 425,
  //           level: 4,
  //         },
  //         {
  //           cost: 4100,
  //           profit: 700,
  //           level: 5,
  //         },
  //         {
  //           cost: 7000,
  //           profit: 1300,
  //           level: 6,
  //         },
  //         {
  //           cost: 10500,
  //           profit: 2100,
  //           level: 7,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 3000,
  //           level: 8,
  //         },
  //         {
  //           cost: 27000,
  //           profit: 5500,
  //           level: 9,
  //         },
  //         {
  //           cost: 405000,
  //           profit: 8000,
  //           level: 10,
  //         },
  //         {
  //           cost: 73000,
  //           profit: 13500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1190000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 20835000,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 30920000,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1241495000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 275815500,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Сон',
  //   img: '/uploads/improvements/03.png',
  //   type: 'Тело',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Мозг',
  //   img: '/uploads/improvements/04.png',
  //   type: 'Тело',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Дисциплина',
  //   img: '/uploads/improvements/05.png',
  //   type: 'Персональные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Инициативность',
  //   img: '/uploads/improvements/06.png',
  //   type: 'Персональные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Стрессо-устойчивость',
  //   img: '/uploads/improvements/07.png',
  //   type: 'Персональные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Креативность',
  //   img: '/uploads/improvements/08.png',
  //   type: 'Персональные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Этика',
  //   img: '/uploads/improvements/09.png',
  //   type: 'Персональные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Само-уверенность',
  //   img: '/uploads/improvements/10.png',
  //   type: 'Персональные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Эмоциональный интеллект',
  //   img: '/uploads/improvements/11.png',
  //   type: 'Когнитивные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Критическое мышление',
  //   img: '/uploads/improvements/12.png',
  //   type: 'Когнитивные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Внимание',
  //   img: '/uploads/improvements/13.png',
  //   type: 'Когнитивные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Память',
  //   img: '/uploads/improvements/14.png',
  //   type: 'Когнитивные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Логика',
  //   img: '/uploads/improvements/15.png',
  //   type: 'Когнитивные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Умение убеждать ',
  //   img: '/uploads/improvements/16.png',
  //   type: 'Коммуникативные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Ведение переговоров',
  //   img: '/uploads/improvements/17.png',
  //   type: 'Коммуникативные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Эмпатия',
  //   img: '/uploads/improvements/18.png',
  //   type: 'Коммуникативные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Управление конфликтами',
  //   img: '/uploads/improvements/19.png',
  //   type: 'Коммуникативные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Публичные выступления',
  //   img: '/uploads/improvements/20.png',
  //   type: 'Коммуникативные навыки',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Лидерство',
  //   img: '/uploads/improvements/21.png',
  //   type: 'Навыки управления',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Управление проектами',
  //   img: '/uploads/improvements/22.png',
  //   type: 'Навыки управления',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Планирование',
  //   img: '/uploads/improvements/23.png',
  //   type: 'Навыки управления',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
  // {
  //   title: 'Мотивация команды',
  //   img: '/uploads/improvements/24.png',
  //   type: 'Навыки управления',
  //   informations: {
  //     createMany: {
  //       data: [
  //         {
  //           cost: 500,
  //           profit: 100,
  //           level: 1,
  //         },
  //         {
  //           cost: 800,
  //           profit: 150,
  //           level: 2,
  //         },
  //         {
  //           cost: 1400,
  //           profit: 200,
  //           level: 3,
  //         },
  //         {
  //           cost: 2200,
  //           profit: 300,
  //           level: 4,
  //         },
  //         {
  //           cost: 3400,
  //           profit: 600,
  //           level: 5,
  //         },
  //         {
  //           cost: 5000,
  //           profit: 900,
  //           level: 6,
  //         },
  //         {
  //           cost: 7500,
  //           profit: 1600,
  //           level: 7,
  //         },
  //         {
  //           cost: 13000,
  //           profit: 2600,
  //           level: 8,
  //         },
  //         {
  //           cost: 23000,
  //           profit: 3800,
  //           level: 9,
  //         },
  //         {
  //           cost: 32500,
  //           profit: 7000,
  //           level: 10,
  //         },
  //         {
  //           cost: 57500,
  //           profit: 10500,
  //           level: 11,
  //         },
  //         {
  //           cost: 111500,
  //           profit: 22000,
  //           level: 12,
  //         },
  //         {
  //           cost: 184000,
  //           profit: 36000,
  //           level: 13,
  //         },
  //         {
  //           cost: 285000,
  //           profit: 55500,
  //           level: 14,
  //         },
  //         {
  //           cost: 447000,
  //           profit: 90000,
  //           level: 15,
  //         },
  //         {
  //           cost: 735500,
  //           profit: 155500,
  //           level: 16,
  //         },
  //         {
  //           cost: 1042000,
  //           profit: 257000,
  //           level: 17,
  //         },
  //         {
  //           cost: 2,
  //           profit: 412500,
  //           level: 18,
  //         },
  //         {
  //           cost: 2973000,
  //           profit: 623500,
  //           level: 19,
  //         },
  //         {
  //           cost: 43445000,
  //           profit: 9955000,
  //           level: 20,
  //         },
  //         {
  //           cost: 6514500,
  //           profit: 1458500,
  //           level: 21,
  //         },
  //         {
  //           cost: 11329000,
  //           profit: 2598000,
  //           level: 22,
  //         },
  //         {
  //           cost: 18406000,
  //           profit: 4260500,
  //           level: 23,
  //         },
  //         {
  //           cost: 29788500,
  //           profit: 6434000,
  //           level: 24,
  //         },
  //         {
  //           cost: 48533000,
  //           profit: 10841500,
  //           level: 25,
  //         },
  //         {
  //           cost: 82720000,
  //           profit: 16535000,
  //           level: 26,
  //         },
  //         {
  //           cost: 1431845000,
  //           profit: 25807000,
  //           level: 27,
  //         },
  //         {
  //           cost: 1832255000,
  //           profit: 43710000,
  //           level: 28,
  //         },
  //         {
  //           cost: 349035000,
  //           profit: 74833500,
  //           level: 29,
  //         },
  //         {
  //           cost: 490908500,
  //           profit: 60477000,
  //           level: 30,
  //         },
  //       ],
  //       skipDuplicates: true,
  //     },
  //   },
  // },
];
