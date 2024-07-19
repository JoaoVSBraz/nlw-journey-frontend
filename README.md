# Next Level Week Journey - React Trial

Plann.er is an application where you can create and manage events and invite someone to do some activity together.

![](public/nlw-journey-react.gif)

## Contents

- [Overview]()
- [Learnings]()
    - [React Router]()
    - [Component Props]()
    - [Tailwind Variants]()
    - [React Date Picker]()
- [Next Steps]()
- [Reference]()

## Overview

The main purpose of the application is to handle events and inviting people to do something together. 

Built on top of React and others tools like Vite and Tailwind, Plann.er still are not 100% completed. There are some goals to achieve which I'll deal with soon like creating some components and manage event update information.

## Learnings

### React Router

One of the new interesting stuff are the React Router library and how it handles navigation between pages/components. Its a library that I definitely will be studying next weeks.

```ts
   try {
        const response: AxiosResponse<TripResponse> = await api.post<TripResponse>('/trips', options)
        const tripId = response.data.tripId
            navigate(`/trips/${tripId}`)
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
    }
```
> Use of navigate function from useNavigate hook

## Under construction..
- Separar propriedades de componentes React em interfaces
- Herdar propriedades padrões de um determinado elemento através de ComponentProps do React e atribuí-las ao componente por meio do Spread Operator
- Biblioteca tailwind-variants para criar variantes de componentes
- Biblioteca react-date-picker para selecionar intervalos de data