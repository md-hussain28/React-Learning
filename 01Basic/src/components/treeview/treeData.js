// treeData.js

const treeData = [
    {
      id: 1,
      name: 'Root Node',
      description: 'This is the root of the tree',
      children: [
        {
          id: 2,
          name: 'Node 1',
          description: 'First child of the root node',
          children: [
            {
              id: 4,
              name: 'Node 1.1',
              description: 'Child of Node 1',
              children: [
                { id: 8, name: 'Node 1.1.1', description: 'Leaf node of Node 1.1', children: [] },
                { id: 9, name: 'Node 1.1.2', description: 'Another leaf node of Node 1.1', children: [] },
              ]
            },
            {
              id: 5,
              name: 'Node 1.2',
              description: 'Second child of Node 1',
              children: [
                {
                  id: 17,
                  name: 'Node 1.2.1',
                  description: 'Child of Node 1.2',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'Node 2',
          description: 'Second child of the root node',
          children: [
            {
              id: 6,
              name: 'Node 2.1',
              description: 'First child of Node 2',
              children: [
                { id: 10, name: 'Node 2.1.1', description: 'Leaf node of Node 2.1', children: [] },
                { id: 11, name: 'Node 2.1.2', description: 'Another leaf node of Node 2.1', children: [] }
              ]
            },
            {
              id: 7,
              name: 'Node 2.2',
              description: 'Second child of Node 2',
              children: [
                {
                  id: 18,
                  name: 'Node 2.2.1',
                  description: 'Child of Node 2.2',
                  children: [
                    { id: 19, name: 'Node 2.2.1.1', description: 'Leaf node of Node 2.2.1', children: [] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 12,
      name: 'Another Root Node',
      description: 'This is another root node',
      children: [
        {
          id: 13,
          name: 'Node 3',
          description: 'First child of another root node',
          children: [
            {
              id: 14,
              name: 'Node 3.1',
              description: 'Child of Node 3',
              children: [
                { id: 15, name: 'Node 3.1.1', description: 'Leaf node of Node 3.1', children: [] },
                { id: 16, name: 'Node 3.1.2', description: 'Another leaf node of Node 3.1', children: [] },
                {
                  id: 20,
                  name: 'Node 3.1.3',
                  description: 'Additional child of Node 3.1',
                  children: [
                    { id: 21, name: 'Node 3.1.3.1', description: 'Leaf node of Node 3.1.3', children: [] }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 22,
          name: 'Node 4',
          description: 'Second child of another root node',
          children: [
            {
              id: 23,
              name: 'Node 4.1',
              description: 'Child of Node 4',
              children: [
                { id: 24, name: 'Node 4.1.1', description: 'Leaf node of Node 4.1', children: [] }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default treeData;
  