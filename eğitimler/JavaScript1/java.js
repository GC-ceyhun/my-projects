function degistir()
{
    document.getElementById("test").innerHTML="YAZI EKLENDİ...";
}

function geriAl()
{
    document.getElementById("test").innerHTML="NORMAL YAZI...";
}

function showMessage()
{
    let message="Hello World!.. I'm JavaScript..";
    alert(message);
}
window.document.write("AÇILIŞTA YAZDIR");
function sehir()
{
    var erzurumText=document.getElementById("erzurum").innerHTML;
    var adanaText=erzurumText.replace("Erzurum","Adana"); //index.html'deki erzurum id'sindeki msjın içinde yazan Erzurum yazısını Adanaya çeviriyor.
    
    adanaText += ".Bir İstanbul Değil Hiçbiri Gençler";
    document.getElementById("erzurum").style.display="none";
    document.getElementById("adana").innerHTML=adanaText;
    //window.alert("adanaText");
}

function Ooptest()
{
    var person={firstName:"Hilay",lastname:"Coşkun",age:50, eyecolor:"blue"}
    person.firstName="Can";
    person.lastname="Akyürek";
    person.age=26;
    person.eyecolor="kara";
    document.getElementById("kisilik").innerHTML=person.firstName+" "+person.lastname+" "+person.age+" "+person.eyecolor;
}

function fotoDegistir()
{
    var fotoClass=document.getElementById("foto1").classList[0];
    if(fotoClass=='kadikoy')
    {
        document.getElementById("foto1").classList.remove('kadikoy');
        document.getElementById("foto1").classList.add('Fener');
        document.getElementById("foto1").src="fb.jpg";
    }
    else
    {
        document.getElementById("foto1").classList.remove('Fener');
        document.getElementById("foto1").classList.add('kadikoy');
        document.getElementById("foto1").src="kadıköy.jpeg";
    }
}

function borderVurgu()
{
    document.getElementById("foto1").style.border="5px solid cyan";
}

function borderVurguSil()
{
    document.getElementById("foto1").style.border="unset";
}

function girdi()
{
    let name=prompt("What is your name?","");
    
}

function renklendir(renk)
{
    if(renk=='yesil')
    document.getElementsByTagName("BODY")[0].style.backgroundColor='forestgreen';
    else if(renk=='turuncu')
    document.getElementsByTagName("body")[0].style.backgroundColor='orange';
    else if(renk=='sarı')
    document.getElementsByTagName("body")[0].style.backgroundColor='yellow';
}