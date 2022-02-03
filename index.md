# hello 👋,
hello, i'm <b>David.</b> i mainly design websites using **JAMstack** and **Bulma.** 
a lot of my code is **open-source** which is usually located on either **github** or **glitch**. Sometimes **tildegit** if it's small snippets.
you can contact me via [email](mailto:aboutdavid@pm.me) or via [twitter](https://twitter.com/@UpscaleDavid).

### latest commit
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
<img src="{{ icons.php }}" align="left" width="26px">
<img src="{{ icons.sass }}" align="left" width="26px">
<img src="{{ icons.github }}" align="left" width="26px">
<img src="{{ icons.git }}" align="left" width="26px">
<img src="{{ icons.gitlab }}" align="left" width="26px">
<img src="{{ icons.npm }}" align="left" width="26px">
<img src="{{ icons.vsc }}" align="left" width="26px">
<img src="{{ icons.atomeditor }}" align="left" width="26px">
<br><br>

Last updated on: {{ date.dateandtime }} (EST)
