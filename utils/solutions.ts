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
        title: "Single",
        link: "/single",
      },
      {
        id: 12,
        title: "Double",
        link: "/double",
      },
    ],
  },
  {
    id: 2,
    title: "Set",
    link: "",
    item: [
      {
        id: 21,
        title: "Set",
        link: "/set",
      },
    ],
  },
  {
    id: 3,
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
  {
    id: 4,
    title: "Tree",
    link: "",
    item: [
      {
        id: 41,
        title: "Binary Tree",
        link: "/binary-tree",
      },
    ],
  },
  {
    id: 5,
    title: "Searching",
    link: "/searching",
    item: [
      {
        id: 51,
        title: "Linear",
        link: "/linear",
      },
    ],
  },
];
