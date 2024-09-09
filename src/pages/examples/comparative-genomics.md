# Comparative Genomics

```js
const homologs = await FileAttachment(
  "../../data/comparative_genomics/KRAS-comparative-genomics.json"
).json();
display(homologs);
```
<!-- 
Plotting the queryPercentageIdentity:

```js
Plot.plot({
  x: { domain: [0, 100] },
  y: { axis: null },
  marginLeft: 140,
  marks: [
    Plot.dot(homologs, {
      x: "queryPercentageIdentity",
      y: "speciesName",
    }),
  ],
});
```

Plotting targetPercentageIdentity:

```js
Plot.plot({
  x: { domain: [0, 100], reverse: true },
  marginLeft: 140,
  marks: [
    Plot.dot(homologs, {
      x: "targetPercentageIdentity",
      y: "speciesName",
    }),
  ],
});
``` -->

Plotting them side-by-side:


<!-- ```js
const dotFillColor: "#cecece";
const dotStrokeColor: "#666";
const dotR: 7;
``` -->



<div class="chart-container">
  <div>

  ```js
    Plot.plot({
      height: 700,
      marginLeft: 10,
      insetRight: 50,
      marginBottom: 50,
      style: {fontSize: "15px"},
      x: {
        domain: [0, 100],
        labelAnchor: "left",
        labelOffset: 40, 
        grid: true,
        label: "Query Percentage Identity" 
        },
      y: {
        axis:null,
        domain: [
        "Human",
        "Chimpanzee",
        "Macaque",
        "Mouse",
        "Rat",
        "Rabbit",
        "Guinea Pig",
        "Dog",
        "Pig",
        "Tropical clawed frog",
        "Zebrafish",
        "Drosophila melanogaster (Fruit fly)",
        "Caenorhabditis elegans (Nematode, N2)"
      ]
      },
      marks: [
        Plot.dot(homologs, {
          x: "queryPercentageIdentity", 
          y: "speciesName",
          r: 7,
          fill: '#c2dcef',
          fillOpacity: 0.5,
          stroke: '#1a4565'
          }),
    ],
  })
  ```
  </div>

  <div>

  ```js

    Plot.plot({
    height: 700,
    insetLeft: 50,
    marginRight: 10,
    marginBottom: 50,
    style: {fontSize: "15px"},
    x: { 
      domain: [0, 100], 
      reverse: true,
      grid: true,
      label: "Target Percentage Identity" },
    y: {
      domain: [
        "Human",
        "Chimpanzee",
        "Macaque",
        "Mouse",
        "Rat",
        "Rabbit",
        "Guinea Pig",
        "Dog",
        "Pig",
        "Tropical clawed frog",
        "Zebrafish",
        "Fruit fly",
        "Nematode, N2"
      ],
    },
    marks: [
      Plot.dot(homologs, {
        x: "targetPercentageIdentity",
        y: "speciesName",
        r: 7,
        fill: '#c2dcef',
        fillOpacity: 0.5,
        stroke: '#1a4565'
      }),
      Plot.axisY({
        label: null, 
        lineWidth: 6,
        tickSize: 0,
        textAnchor: "middle",
        dx: -30,
        }),
    ],
  })
  ```
  </div>

</div>

<!-- Stack works when you can divide one set of data in two; in the CalTrain example, it's either north or south. This is different because the data are in two places, target and query percentage identity.
What is x: (d) => ?? How does this logic work? Could plot two sets of marks but how do you get them so they are not on top of each other?

Can we move the axis bar and then stack the plots?
Sort mark to change the order of the marks: https://observablehq.com/plot/features/scales#sort-mark-option
fy for second layer of analysis e.g. grouping by island for penguin species -->

<!-- Plotting both:

```js
Plot.plot({
  marginLeft: 140,
  marks: [
    Plot.dot(homologs, { x: "queryPercentageIdentity", y: "speciesName" }),
    Plot.dot(homologs, { x: "targetPercentageIdentity", y: "speciesName" }),
  ],
});
```-->

TEST

<!-- ```js
function dataParser(rawData) {
  const result = [];

  for (let i = 0; i < rawData.length; i = i + 1) {
    const element = rawData[i];

    const targetCol = {
      speciesId: element.speciesId,
      speciesName: element.speciesName,
      homologyType: element.homologyType,
      isHighConfidence: element.isHighConfidence,
      targetGeneId: element.targetGeneId,
      targetGeneSymbol: element.targetGeneSymbol,
      percentageIdentity: element.targetPercentageIdentity,
      position: "T",
    };

    const queryCol = {
      speciesId: element.speciesId,
      speciesName: element.speciesName,
      homologyType: element.homologyType,
      isHighConfidence: element.isHighConfidence,
      targetGeneId: element.targetGeneId,
      targetGeneSymbol: element.targetGeneSymbol,
      percentageIdentity: element.queryPercentageIdentity,
      position: "Q",
    };

    result.push(targetCol);
    result.push(queryCol);
  }

  return result;
}

const parsedData = dataParser(homologs);
console.log(parsedData);
display(parsedData);

``` -->
<!-- 
```js
function dataParser(rawData) {
  const result = [];

  for (let i = 0; i < rawData.length; i = i + 1) {
    const element = rawData[i];

    const targetCol = {
      speciesId: element.speciesId,
      speciesName: element.speciesName,
      homologyType: element.homologyType,
      isHighConfidence: element.isHighConfidence,
      targetGeneId: element.targetGeneId,
      targetGeneSymbol: element.targetGeneSymbol,
      percentageIdentity: element.targetPercentageIdentity,
      position: "T",
    };

    const queryCol = {
      speciesId: element.speciesId,
      speciesName: element.speciesName,
      homologyType: element.homologyType,
      isHighConfidence: element.isHighConfidence,
      targetGeneId: element.targetGeneId,
      targetGeneSymbol: element.targetGeneSymbol,
      percentageIdentity: element.queryPercentageIdentity,
      position: "Q",
    };

    result.push(targetCol);
    result.push(queryCol);
  }

  return result;
}

const parsedData = dataParser(homologs);
console.log(parsedData);
display(parsedData);
```

Plot

```js
Plot.plot({
  axis: null,
  marks: [
    Plot.text([[0.5, 4]], {
      text: ["Target Percent Identity"],
      textAnchor: "start",
      dx: 16,
    }),
    Plot.text([[-0.5, 4]], {
      text: ["Query Percent Identity"],
      textAnchor: "end",
      dx: -16,
    }),
    Plot.dot(
      parsedData,
      Plot.stackX2({
        x: (d) => (d.position === "T" ? 1 : -1),
        y: "speciesName",
      })
    ),
  ],
});
```

```js
Plot.plot({
  x: { domain: [0, 100] },
  marks: [
    Plot.dot(parsedData, {
      x: "percentageIdentity",
      y: "speciesName",
      fx: "position",
    }),
    Plot.axisY({ facetAnchor: "right" }),
  ],
});
``` -->
