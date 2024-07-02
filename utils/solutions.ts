export interface ISolutionMenu {
  id: number;
  title: string;
  link: string;
  item: {
    id: number;
    title: string;
    link: string;
  }[];
}

export const solutionMenu: ISolutionMenu[] = [
  {
    id: 1,
    title: "Linked List",
    link: "/linkedlist",
    item: [
      {
        id: 11,
        title: "Single Linked List",
        link: "/single",
      },
    ],
  },
  {
    id: 2,
    title: "Sorting",
    link: "/sorting",
    item: [
      {
        id: 11,
        title: "Bubble",
        link: "/bubble",
      },
      {
        id: 12,
        title: "Selection",
        link: "/selection",
      },
      {
        id: 13,
        title: "Insertion",
        link: "/insertion",
      },
      {
        id: 14,
        title: "Merge",
        link: "/merge",
      },
      {
        id: 15,
        title: "Quick",
        link: "/quick",
      },
    ],
  },
];
