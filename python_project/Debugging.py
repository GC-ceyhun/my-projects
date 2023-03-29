girdi1 = input("sayı1: ")
girdi2 = input("sayı2: ")

try:
    say1 = int(girdi1)
    say2 = int(girdi2)
    print(say1 / say2)
except ZeroDivisionError:
    print("Bölen 0 olamaz!!")
except ValueError:
    print("Lütfen sayısal değer giriniz.")