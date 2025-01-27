### Galgame Review Post

#### [Case 1] Post Mapper (Post/Image/Record/Review/Strategy)

1. post isolate resource route mapper. (Default: ON, we can close this mapper.)
2. how to define galgame name. (Only game name is okay. If we use company name, image dir will be more complicated and hard to clear define what it is.)
3. add meta dir info rec. (such as: /galgame/[name])

```
posts
  L galgame
    L games
      L [name]
        L review.md
        L records
          L [date].md
          L STEAM_20240124.md
          L PSP_20250122.md
    L news
    L recommand

public
  L images
    L galgame
      L [name]
        L 1.jpg
        L 2.jpg
```
