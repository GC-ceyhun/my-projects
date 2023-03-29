let merhabaTexT;

function MerhabaMesaj()
{
	merhabaTexT = document.getElementById('merhaba').innerHTML;
	alert(merhabaTexT);
}

function Tekerlek()
{
	alert=merhabaTexT;
}

function MouseUzerinde()
{
	alert("Mouse butonun üstünde!..");
}

function renklendir()
{
	var kutular = document.getElementsByClassName("kutu");
	var i;
	for (i = 0; i < kutular.length; i++) 
	{
		kutular[i].style.backgroundColor="orange";
	}
	
}

function renklendirIDile() 
{
	document.getElementById("kutu3").style.backgroundColor="yellow"
}

function yaziEkle() 
{
	var p=document.getElementById("ekleme");
	alert(p.innerHTML);
	p.innerHTML="Bugün hava çok güzel";
}

function isimEkle() 
{
	let isim = prompt("isim giriniz","")
	alert(isim);
	document.getElementById("isim").innerHTML="Kullanıcı Adı : "+isim;
}

function sayiGir() {
	var sayi=Number(document.getElementById("input_sayi").value);
	alert("Sayının karesi : " + sayiKare(sayi));
}

function sayiKare(s1)
{
	return s1*s1;
}

function fotoDegistir()
{
	var src=document.getElementById("foto").src;
	document.getElementById("foto").src='haydarpasa.jpeg';
	alert(src);
}

function fotoDegistir1()
{
	var img_=document.getElementById("foto").classList[0];
	
	if (img_=='Kadikoy') 
	{
		document.getElementById("foto").classList.remove('Kadikoy');
		document.getElementById("foto").classList.add('HaydarPasa');
		document.getElementById("foto").src='haydarpasa.jpeg';
	}

	if (img_=='HaydarPasa') 
	{
		document.getElementById("foto").classList.add('Kadikoy');
		document.getElementById("foto").src='kadikoy.jpeg';
	}
		
}