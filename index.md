# hello 👋,
i'm **David**

### latest commit:
{{ commit.repo }}:
{{ commit.message }}

### things i use to code
<img src="{{ icons.html }}" align="left" width="26px">
<img src="{{ icons.css }}" align="left" width="26px">
<img src="{{ icons.javascript }}" align="left" width="26px">
<img src="{{ icons.nodejs }}" align="left" width="26px">
<img src="{{ icons.atomeditor }}" align="left" width="26px">
<img src="{{ icons.notepadplusplus }}" align="left" width="26px">
<br>

### 📰 recent blog posts:
{% for post in posts %}
- [{{ post.title | safe }}]({{ post.url }})
{% endfor %}