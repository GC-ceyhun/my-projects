import sqlite3 as sql

baglanti = sql.connect("dersler.db")
islem = baglanti.cursor()

def tabloolustur():
    islem.execute("CREATE TABLE IF NOT EXISTS ogrenciler (ad TEXT, soyad TEXT, numara INT, ortalama INT)")
    baglanti.commit()

def degerekle(ad, soyad, no, ort):
    komut = "INSERT INTO ogrenciler VALUES (\'"
    komut = komut +  ad +"\', \'" + soyad + "\', "+ str(no) + ", " + str(ort) + ")"
    islem.execute(komut)
    baglanti.commit()

tabloolustur()

ad, soyad, no, ort = 'Murat', 'Peker',1010123,89
degerekle(ad, soyad, no, ort)

ad, soyad, no, ort = 'Salim', 'Gündüz',1312125,56
degerekle(ad, soyad, no, ort)

baglanti.close()