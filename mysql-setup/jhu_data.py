# install package by running 'pip install gitpython'
import git

GIT_URL = "https://github.com/CSSEGISandData/COVID-19.git"
DIR_NAME = "COVID-19"


def fetch_data():
    try:
        print("Cloning remote data...")
        git.Repo.clone_from(GIT_URL, DIR_NAME)
    except git.GitError:
        print("Repository already exists. Pulling remote data...")
        git.Repo("COVID-19").remotes.origin.pull()
