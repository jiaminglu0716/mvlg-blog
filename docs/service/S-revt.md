## Page

- Transfer Page(input text and display statistic table)
- Record Page(according to local display record statistic table)
- Record Statistic Page(statistic all record and visualize with graphs)

### Transfer Page

Support to switch transfer cores.

### Record Page

Can select cores if the core has been written, else use default.

## What should we list in statistic pages

### Basic Statistic (For Time Record)

| item    | format   | P.S                     |
| :------ | :------- | :---------------------- |
| total   | 10:00:00 | finish - start          |
| start   | 00:00:00 | -                       |
| finish  | 00:00:00 | -                       |
| runtime | 00:00:00 | All Record Time         |
| runday  | 4        | All Record Day          |
| day     | 5        | finish - start :: (day) |

### Time Statistic (For Timepieces)

| item    | format   | P.S                   |
| :------ | :------- | :-------------------- |
| times   | 5        | count timeframes      |
| recnum  | 10       | count timepieces      |
| maxfra  | 10:00:00 | max timeframe runtime |
| minfra  | 10:00:00 | min timeframe runtime |
| maxrest | 10:00:00 | max timeframe gaotime |
| minrest | 10:00:00 | min timeframe gaptime |

### Event Statistic (For Event Record)

| item     | format | P.S                                   |
| :------- | :----- | :------------------------------------ |
| nodes    | 20     | count event nodes                     |
| leafs    | 10     | count event nodes no child            |
| branches | 10     | count event nodes have nulti-children |
| maxbra   | 3      | the node has the max children number  |

### Event Leaf & Label Statistic (For Event Leaf & Label Record)

| item  | format   | P.S                         |
| :---- | :------- | :-------------------------- |
| TT    | 10:00:00 | total time                  |
| RT    | 10:00:00 | runtime                     |
| HBT   | 10:00:00 | (top) head branch time      |
| TBT   | 10:00:00 | tail branch time            |
| nodes | 10       | nodes number in this branch |

## Page Design

### Table Style
