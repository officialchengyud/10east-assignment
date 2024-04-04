# 10east-assignment
A reverse engineered https://app.10east.co/ site.

### Desktop Preview
![til](./docs/10east-desktop.gif)

### Mobile Preview
![til](./docs/10east-mobile.gif)

## A foreword
This is my first time working with Django so I learnt a lot through this project (but it may not follow best practices, sorry). Given the short time and busy school schedule, I had to use much of my prior knowledge from JavaScript and ReactJS here (e.g splitting large main page up into smaller components). I have managed to implement all of the features of the main page. To see my other more developed works, [view here!](https://chengyud.com)

# Starting up the project

To simply test out the site, use:
1. Enter virtual environment using `source venv/bin/activate`
2. Then `docker compose up --build`
3. Head over to `localhost:8000` to test site!


For development auto reload, use:
1. Enter virtual environment using `source venv/bin/activate`
2. Run `python3 manage.py runserver`
3. Run on another terminal `python3 manage.py tailwind start`
3. Head over to `localhost:8000` to test site!

# Other design details
Most of the html files are located at /core/templates folder. 

For interactive aspects (modal, navigation, carousel), I have written custom JavaScript for them to work. These are located in `static/scripts` folder. I have split them into individual files so it is easier for you to observe.