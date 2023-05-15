from faker import Faker
import random

fake = Faker()

# clients

"""
clients_script = open("clients.sql", "w")

names = []
for _ in range(100):
    names.append(fake.name())

passwords = []
for _ in range(100):
    passwords.append(fake.password(special_chars=False))

dates = []
for _ in range(100):
    dates.append(fake.date())

for _ in range(1000):
    insert_string = "INSERT INTO clients (name, password, isvip, datejoined) VALUES "

    for _ in range(1000):
        insert_string += f"('{names[random.randint(0, 9)]}', '{passwords[random.randint(0, 9)]}', {str(fake.boolean()).lower()}, '{dates[random.randint(0, 9)]}'), "

    clients_script.write(insert_string[:-2] + ";\n")

clients_script.close()
"""

# short clients
clients_script = open("clients.sql", "w")

names = []
for _ in range(30):
    names.append(fake.name())

passwords = []
for _ in range(300):
    passwords.append(fake.password(special_chars=False))

dates = []
for _ in range(300):
    dates.append(fake.date())

for _ in range(10):
    insert_string = "INSERT INTO clients (name, password, isvip, datejoined) VALUES "

    for _ in range(30):
        insert_string += f"('{names[random.randint(0, 9)]}', '{passwords[random.randint(0, 9)]}', {str(fake.boolean()).lower()}, '{dates[random.randint(0, 9)]}'), "

    clients_script.write(insert_string[:-2] + ";\n")

clients_script.close()



# products

"""
products_script = open("products.sql", "w")

names = []

for _ in range(100):
    names.append(fake.word())

descriptions = []

for _ in range(100):
    descriptions.append(fake.text(max_nb_chars=400))

categories = []

for _ in range(100):
    categories.append(fake.word())


for _ in range(440):
    insert_string = "INSERT INTO products (name, price, description, quantity, category) VALUES "

    for _ in range(1000):
        insert_string += f"('{names[random.randint(0, 99)]}', '{random.randint(0, 9999)}', '{descriptions[random.randint(0, 99)]}', '{random.randint(0, 10)}', '{categories[random.randint(0, 99)]}'), "

    products_script.write(insert_string[:-2] + ";\n")

products_script.close()

"""

# purchases

"""
purchases_script = open("purchases.sql", "w")

feedbacks = []

for _ in range(100):
    feedbacks.append(fake.text(max_nb_chars=20))

for _ in range(10000):
    insert_string = "INSERT INTO purchases (received, feedback, rating, client_id, product_id) VALUES "

    for _ in range(1000):
        insert_string += f"('{str(fake.boolean()).lower()}', '{feedbacks[random.randint(0, 99)]}', '{random.randint(0, 10)}', '{random.randint(46, 1000045)}', '{random.randint(1, 1000000)}'), "

    purchases_script.write(insert_string[:-2] + ";\n")

purchases_script.close()

"""