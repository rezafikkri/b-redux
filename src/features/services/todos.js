import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  keepUnusedDataFor: 30,
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (filter) => {
        let completed = '';

        if (filter === 'COMPLETED') completed = '?completed=true';
        else if (filter === 'ACTIVE') completed = '?completed=false';

        return { url: `todos${completed}`};
      },
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todosApi;
