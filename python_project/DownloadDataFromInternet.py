print("Internetten resim indirme!!")

import urllib.request as req
url1 = "http://netlogoweb.org/assets/images/desktopicon.png"
req.urlretrieve(url1, "netlogo.jpg")