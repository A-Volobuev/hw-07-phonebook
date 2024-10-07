import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: ''},
	reducers: {
    // action.payload - значение которое мы получаем (вводим в инпут)
    onChangeFilter: (state, action) => {
      state.filter = action.payload
    },
  },
});

// функция для записи изменений в инпуте,который будет использован для записи в редюсере
export const {onChangeFilter} = filterSlice.actions;
// Для подключения в стор
export const filtersReducer = filterSlice.reducer;
// Позволяет достучаться до значение из редюсера (получаем значение фильтр)
export const selectFilter = state => state.filter.filter;
