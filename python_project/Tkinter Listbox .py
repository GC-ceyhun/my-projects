from tkinter import *
 
from tkinter import messagebox
 
window = Tk()
 
window.title("Tkinter listbox")
window.geometry("400x300")
 
#grid form çizdir
app = Frame(window)
app.grid()
 
 
Lbox1 = Listbox(app)
Lbox1.insert(1, "Python")
Lbox1.insert(2, "C#")
Lbox1.insert(3, "JAVA")
Lbox1.insert(4, "JAVASCRIPT")
Lbox1.grid(padx=110, pady=10)
 
#formu çiz
window.mainloop()