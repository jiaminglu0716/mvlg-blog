### Tech
#### Front End
Hexo - Create api facade
#### Back End
1. DB - MySQL
2. Server - Python(Django)

### Model
#### Comic
##### 生产关系
参与角色：平台、公司、作者
平台 --[签约]--> 作者 | 公司
公司 --[雇佣]--> 作者

#### DB
```python
"""
Base Model
"""
class Field(model.models):
    id = models.BigAutoField("field name", primary_key=True)
    field = models.CharField(max_length=30)

    class Meta:
        db_table = "acg_field"

class Author(models.Model):
    id = models.BigAutoField("author id", primary_key=True)
    name = models.CharField("author name", max_length=20)
    field = models.ManyToManyField(to=Field)

    class Meta:
        db_table = "acg_author"

class Tag(models.Model):
    id = models.BigAutoField("tag id", primary_key=True)
    name = models.CharField("tag name", max_length=20)

    class Meta:
        db_table = "acg_tag"

class Company(models.Model):
    id = models.BigAutoField("author id", primary_key=True)
    name = models.CharField("author name", max_length=20)
    field = models.ManyToManyField(to=Field)

    class Meta:
        db_table = "acg_company"


"""
Resource - Class
type - magnet/http/ftp/torrent/tg/Cloud[...]/...
"""
class Resource(models.Model):
    id = models.BigAutoField("resource id", primary_key=True)
    title = models.CharField("resource title", max_length=30)
    type = models.CharField("resource type", max_length=30)
    link = models.CharField("resource link", max_length=50)
    desc = models.CharField("resource desc", max_length=50)
    is_vaild = geeks_field = models.BooleanField()
    release_date = models.DateField("release date")

    class Meta:
        db_table = "acg_resource"


"""
Event Date
"""
class ACGReleaseEvent(models.model):
    id = models.BigAutoField("event id", primary_key=True)
    platform = models.CharField("event platform", max_length=30)
    release_date = models.DateField("release date")
    region = models.CharField("region code", max_length=10)
    desc = models.CharField("event desc", max_length=50)


"""
Comic Model
"""
class Comic(models.Model):
    id = models.BigAutoField("comic id", primary_key=True)
    cover = models.CharField("comic cover", max_length=50)
    title = models.CharField("comic title", max_length=30)
    type = models.CharField("comic type", max_length=30)
    r18 = geeks_field = models.BooleanField()
    author = models.ManyToManyField(to=Author)
    illustrator = models.ManyToManyField(to=Author)
    scriptwriter = models.ManyToManyField(to=Author)
    tag = models.ManyToManyField(to=Tag)
    resource = models.ManyToManyField(to=Resource)
    release = models.ManyToManyField(to=ACGReleaseEvent)

    class Meta:
        db_table = "acg_comic"


"""
Galgame Model
content type - 抜きゲー/糞ゲー/泣きゲー/鬱ゲー/神ゲー/キャラゲー/萌えゲー
play type - TAVG/VNG/AAG/ES/SLG/RPG
region - JP/CN/KO/USA/UK/...
encode - Shift-JIS/UTF-8/...
platform - PC/Android/IOS/PS Series/Nintendo Series/XBOX Series
engine - ...
"""
class GalgameStaff(models.Model):
    id = models.BigAutoField("galgame staff id", primary_key=True)
    author = models.ManyToManyField(to=Author)
    ori_case = models.ManyToManyField(to=Author)
    scriptwriter = models.ManyToManyField(to=Author)
    artist = models.ManyToManyField(to=Author)
    music = models.ManyToManyField(to=Author)
    ins_song_performance = models.ManyToManyField(to=Author)
    op_lyrics = models.ManyToManyField(to=Author)
    op_composer = models.ManyToManyField(to=Author)
    op_performance = models.ManyToManyField(to=Author)


class Galgame(models.Model):
    id = models.BigAutoField("galgame id", primary_key=True)
    cover = models.CharField("galgame cover", max_length=50)
    name = models.CharField("galgame original name", max_length=30)
    type = models.CharField("galgame content type", max_length=30)
    play_type = models.CharField("galgame play type", max_length=30)
    company = models.ForeignKey("Company", on_delete=models.CASCADE)
    language = models.CharField("support languages / as split sign", max_length=30)
    price = models.CharField("galgame price", max_length=30)
    engine = models.CharField("galgame engine", max_length=30)
    encode = models.CharField("galgame play type", max_length=30)
    staff = models.OneToOneField(GalgameStaff, on_delete=models.CASCADE)
    release = models.ManyToManyField(to=ACGReleaseEvent)
    office = models.CharField("galgame official link", max_length=30)


"""
Anime Model
"""
```