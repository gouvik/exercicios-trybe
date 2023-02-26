# Polimorfismo com interface

from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def bounty(self, hunt):
        pass


class DatabaseAbstract(ABC):
    @abstractmethod
    def execute(self, query):
        raise NotImplemented



class MongoDatabase(DatabaseAbstract):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")



class MySQLDatabase(DatabaseAbstract):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


class FirebaseDB(DatabaseAbstract):
    def execute(self, query):
        print(f"executando query '{query}' no Firebase")

class TestDatabase(Database):
    def bounty(self, hunt):
        return super().bounty(hunt)

def minha_func(database): # repare que o d é minúsculo
    if isinstance(database, DatabaseAbstract):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")



db1 = MongoDatabase()
db2 = MySQLDatabase()
db3 = TestDatabase()

minha_func(db1)
minha_func(db2)
minha_func(db3)