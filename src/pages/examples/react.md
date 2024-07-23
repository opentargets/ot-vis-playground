# React

We can import components or create them in `jsx` cells.

```jsx echo
function Greeting({subject, background="purple"}) {
  return (
    <div style={{padding: '0.5em', background, color: '#fff'}}>
      Hello <b>{subject}</b>!
    </div>
  )
}
```

Call the built-in `display` function to render the component:

```jsx echo
display(<Greeting subject="All" />)
```

Observable's reactive variables can be passed in as props:

```js echo
const bgrd = view(Inputs.color({label: "Background color", value: "#1fad36"}));
```

```jsx echo
display(<Greeting subject="All" background={bgrd} />)
```
