# hello 👋,
i'm **David**

### latest commit:
{{ commit.repo }} @ {{ commit.time }}:<br>
{{ commit.message }}<br>
[view this commit]({{ commit.url }})

### recent github repos
{% for repo in repos %}
- [{{ repo.name }}]({{ repo.url }}):<br>
{{ repo.description }}<br>
Stars: {{ repo.stargazers }} • Forks: {{ repo.forks }} • {% if repo.primaryLanguage %}{{ repo.primaryLanguage.name }}{% else %}Unknown{% endif%}
{% endfor %}

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
