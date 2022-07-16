const initstate = [
  {
    name: 'ha',
    password:'1'
  },
  {
     name:'le van d',
     password:'160403'
  },
  {
     name:'nguyen van d',
     password:'160403'
  },
];
export const reducers = (state = initstate, action) => {

  switch (action.type) {
    case 'update':
      return [
        ...state,
        {
          name:action.payload.name,
          class:action.payload.class
        }
      ];
    default:
      return state;
  }
};
