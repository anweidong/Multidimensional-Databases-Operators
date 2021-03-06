import os
from bs4 import BeautifulSoup
import requests

table_name = "sex"
output_name = "sex.sql"
url = "https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/"

page = requests.get(url).text
soup = BeautifulSoup(page, 'html.parser')

sex_table = soup.find_all("table")[1]


def reformat(query):
    return query.format(table_name).replace("\n", "") + "\n"


def main():
    output = open(os.path.join("mysql_setup", output_name), "w")
    output.write(reformat("""CREATE TABLE `{}` (
                                   `age` VARCHAR(50) NOT NULL,
                                   `share` VARCHAR(50) NULL
    );
    """))
    for row in sex_table.find_all("tr")[1:]:
        row = row.find_all("td")
        output.write("INSERT INTO `{}` VALUES ('{}', '{}');\n".format(table_name, row[0].div.strong.text,
                                                                      row[2].div.strong.text))
    output.close()
