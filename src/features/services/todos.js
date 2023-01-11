import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  keepUnusedDataFor: 120,
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (filter) => {
        let completed = '';

        if (filter === 'COMPLETED') completed = '?completed=true';
        else if (filter === 'ACTIVE') completed = '?completed=false';

        return { url: `todos${completed}`};
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos', id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    toggleTodo: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Todos", id }],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useToggleTodoMutation } = todosApi;
