import { REMOVE_FEATURE, UPDATE_TOTAL, ADD_FEATURE } from '../actions/carActions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

// default parameters (advanced JS feature)
export const carReducer = (state = initialState, action) => {
  console.log('&&&&&&&&&', state, action);
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        additionalPrice: state.car.features.reduce((a, b) => a + b.price, 0)
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload
          )
        }
      };
    case ADD_FEATURE:
      return {
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            car: {
                ...state.car,
                features: [...state.car.features, {
                    id: Date.now(),
                    name: action.payload.name,
                    price: action.payload.price
                }]
            }
        };
    default:
      return state;
  }
};
