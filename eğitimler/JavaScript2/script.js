class Personel
{
    constructor()
    {
        this.tc="";
        this.ad="";
    }

    PersonelBilgiGoster()
    {
        alert("Personel TC: " + this.tc + "  " + "Personel Ad: " + this.ad);
    }
}

function bilgiGoster()
{
    var pr1=new Personel();
    pr1.tc=document.getElementById("input_tc").value;
    pr1.ad=document.getElementById("input_ad").value;

    pr1.PersonelBilgiGoster();
}

function classlistele()
{
    var siniflar = document.getElementById("classliste").classList;
    var i=0;
    var txt="";
    for(i; i<siniflar.length;i++)
    {
        //liste içinde düzenleme yapılacaksa ( sınıf silmek gibi )
        if (siniflar[i] == 'test1') 
        {
            document.getElementById("classliste").classList.remove('test1');
            i--;
        }
        else
        {
            txt=txt+" "+siniflar[i];
        }
        console.log(siniflar);
    }
    document.getElementById("classliste").innerHTML=txt;
}

function dogumyilikontrol()
{
    var element=document.getElementById("dogumyili").innerHTML;
    while (element<1900) 
    {
        alert("O ne biçim tarih len?")
        break;    
    }
}

function renklendir() 
{
    var renk=document.getElementById("renk").value;
    document.getElementById("kutu6").style.backgroundColor=renk;
    
}
