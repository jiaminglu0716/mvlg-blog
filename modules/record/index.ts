import { Core, ParserType } from "revt-core";
import eventplugin from "revt-plugin-next-event";
import timeplugin from "revt-plugin-next-time";
import parserRunPlugin from "revt-plugin-next-parser-run";
import statisticplugin from "revt-plugin-next-statistic";
import {
  eventcenterPluginConfig,
  timecenterPluginConfig,
} from "revt-plugin-next-protocol";

export function run() {
  const sample2 = [
    "y 2024",
    "m 6",
    "d 2",
    "- 20:35",
    "- 22:24",
    "aaaaaaaaa",
    "bbbbbbbbb",
    "c -1 1 [t1]",
    "d 3",
    "- 21:33",
    "ccccccccc",
    "aaaaaaaaa",
    "c 1 2 [t2] s ",
    "- 21:43",
    "ccccccccc",
    "aaaaaaaaa",
    "c 2 3 [t3] s",
    "- 23:43",
    "ccccccccc",
    "aaaaaaaaa",
    "c 1 4 [t4]",
  ];

  const core = new Core({
    type: ParserType.SYMBOL,
    plugins: [
      timecenterPluginConfig(),
      eventcenterPluginConfig(),
      timeplugin,
      eventplugin,
      parserRunPlugin,
      statisticplugin,
    ],
  });

  const metas = core.run(sample2);
  if (metas) {
    const evstatistic = metas.statistic.event;
    console.log(evstatistic);
  }
}

export function trad(text: string[]) {
  return new Core({
    type: ParserType.SYMBOL,
    plugins: [
      timecenterPluginConfig(),
      eventcenterPluginConfig(),
      timeplugin,
      eventplugin,
      parserRunPlugin,
      statisticplugin,
    ],
  }).run(text);
}
