# Plot

Observable's own `Plot` package is a simple but powerful "grammer of gaphics" &mdash; similar to ggplot2 and VegaLite (Altair in Python).

Here we use a single local JSON file of drug data from the 24-06 release and load it as a file attachment:

```js echo display
const knownDrugs = await FileAttachment('../../data/24_06_sample/ABL1-known-drugs.json').json();
display(knownDrugs);
```

The data is easier to read in a table. Here are the first 5 rows:

```js echo
Inputs.table(knownDrugs.slice(0, 5))
```

Let's plot the count of each `status` value using Observable's `Plot` library:

```js echo
Plot.plot({
  marks: [
    Plot.barX(knownDrugs, Plot.groupY({x: "count"}, {y: "status"}))
  ]
})
```

The plot doesn't look great! Let's sort the bars, polish the plot and style it more like the OT platform:

```js echo
Plot.plot({
  style: { font: "12.5px 'Inter Variable', sans-serif" }, 
  marginLeft: 140,
  x: { label: null, tickSize: 0, tickPadding: 4, grid: true },
  y: { label: null, tickSize: 0, tickPadding: 4, tickFormat: v => v ?? "N/A", padding: 0.45 },
  marks: [
    Plot.barX(
      knownDrugs,
      Plot.groupY(
        {x: "count"},
        {y: "status", fill: "var(--theme-foreground-focus)", sort: { y: "-x" }}
      )
    )
  ]
})
```