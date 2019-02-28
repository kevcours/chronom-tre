class Chrono{
    constructor(x,y,c,b){
        this.x=x;
        this.y=y;
        this.c=c;
        this.b=b;
        this.seconde=0;
        this.minute=0;
        this.heure=0;
    }
    affiche(){
        this.div=document.createElement('div');
        this.div.setAttribute('id','d');
        this.div.style.backgroundColor=this.c;
        let texte= document.createElement('div');
        texte.appendChild(document.createTextNode('0'+this.heure+'-'+'0'+this.minute+'-'+'0'+this.seconde));
        texte.style.textAlign="center";
        texte.style.width="70%";
        texte.style.backgroundColor='white';
        texte.style.marginLeft="15%";
        this.div.appendChild(texte);
        let button1= document.createElement('div');
        button1.style.marginTop='5%';
        button1.style.display='flex';
        button1.style.justifyContent='space-around';
        let play=document.createElement('img');
        play.setAttribute('src','./img/play-button.png');
        play.style.width='35px';
        play.style.height='35px'
        play.onmouseover=()=>{
        play.style.cursor="pointer";
        }
        let compteur;
        play.onclick=()=>{

            if(play.getAttribute('src')=='./img/play-button.png')
            {
                play.setAttribute('src','./img/pause.png');
                compteur=setInterval(()=>{ 
                    this.seconde++;
                    texte.removeChild(texte.lastChild);
                    if(this.seconde>9)
                    {
                        if(this.seconde>59)
                        {
                            this.minute++;
                            this.seconde=0;
                            if (this.minute>9)
                            {
                                if (this.minute>59)
                                {
                                    this.heure++;
                                    this.minute=0;
                                    if(this.heure>9)
                                    {
                                        texte.appendChild(document.createTextNode(this.heure+'-'+this.minute+'-'+this.seconde));
                                    }
                                    else
                                    {
                                        texte.appendChild(document.createTextNode('0'+this.heure+'-'+this.minute+'-'+this.seconde));
                                    }

                                }
                                else
                                {
                                    if(this.seconde>9)
                                    {
                                        if(this.heure>9)
                                        {
                                            texte.appendChild(document.createTextNode(this.heure+'-'+this.minute+'-'+this.seconde));
                                        }
                                        else
                                        {
                                            texte.appendChild(document.createTextNode('0'+this.heure+'-'+this.minute+'-'+this.seconde));
                                        }
                                    }
                                    else
                                    {
                                        if(this.heure>9)
                                        {
                                            texte.appendChild(document.createTextNode(this.heure+'-'+this.minute+'-'+'0'+this.seconde));
                                        }
                                        else
                                        {
                                            texte.appendChild(document.createTextNode('0'+this.heure+'-'+this.minute+'-'+'0'+this.seconde));
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if(this.seconde>9)
                                {
                                    if(this.heure>9)
                                    {
                                        texte.appendChild(document.createTextNode(this.heure+'-'+'0'+this.minute+'-'+this.seconde));
                                    }
                                    else
                                    {
                                        texte.appendChild(document.createTextNode('0'+this.heure+'-'+'0'+this.minute+'-'+this.seconde));
                                    }
                                }
                                else
                                {
                                    if(this.heure>9)
                                    {
                                        texte.appendChild(document.createTextNode(this.heure+'-'+'0'+this.minute+'-'+'0'+this.seconde));
                                    }
                                    else
                                    {
                                        texte.appendChild(document.createTextNode('0'+this.heure+'-'+'0'+this.minute+'-'+'0'+this.seconde));
                                    }
                                }
                            }

                        }
                        else
                        {
                            if(this.minute>9)
                            {
                                if(this.heure>9)
                                {
                                    texte.appendChild(document.createTextNode(this.heure+'-'+this.minute+'-'+this.seconde));
                                }
                                else
                                {
                                    texte.appendChild(document.createTextNode('0'+this.heure+'-'+this.minute+'-'+this.seconde));
                                }
                            }
                            else
                            {
                                if(this.heure>9)
                                {
                                    texte.appendChild(document.createTextNode(this.heure+'-'+'0'+this.minute+'-'+this.seconde));
                                }
                                else
                                {
                                    texte.appendChild(document.createTextNode('0'+this.heure+'-'+'0'+this.minute+'-'+this.seconde));
                                }
                            }

                        }
                    }
                    else
                    {
                        if(this.minute>9)
                        {
                            if(this.heure>9)
                            {
                                texte.appendChild(document.createTextNode(this.heure+'-'+this.minute+'-'+'0'+this.seconde));
                            }
                            else
                            {
                                texte.appendChild(document.createTextNode('0'+this.heure+'-'+this.minute+'-'+'0'+this.seconde));
                            }
                        }
                        else
                        {
                            if(this.heure>9)
                            {
                                texte.appendChild(document.createTextNode(this.heure+'-'+'0'+this.minute+'-'+'0'+this.seconde));
                            }
                            else
                            {
                                texte.appendChild(document.createTextNode('0'+this.heure+'-'+'0'+this.minute+'-'+'0'+this.seconde));
                            }
                        }
                    }
                    
                }, 1000);

            }
            else{
                play.setAttribute('src','./img/play-button.png');
                clearInterval(compteur);
            }
        }
        let stop=document.createElement('img');
        stop.setAttribute('src','./img/stop.png');
        stop.onclick=()=>{
            play.setAttribute('src','./img/play-button.png');
            this.seconde=0;
            this.minute=0;
            this.heure=0;
            clearInterval(compteur);
            texte.removeChild(texte.lastChild);
            texte.appendChild(document.createTextNode('0'+this.heure+'-'+'0'+this.minute+'-'+'0'+this.seconde));

        }
        stop.onmouseover=()=>{
            stop.style.cursor="pointer";
        }
        stop.style.width='35px';
        stop.style.height='35px';
        button1.appendChild(play);
        button1.appendChild(stop);
        this.div.appendChild(button1);
        this.div.style.border="solid 2px "+this.b;
        this.div.style.width="200px";
        this.div.style.height="100px";
        this.div.style.left=this.x;
        this.div.style.top=this.y;
        this.div.style.position="absolute";
        document.getElementsByTagName('body')[0].appendChild(this.div);
        this.div.addEventListener('mousedown',(e)=>{
            let dx=e.clientX-parseInt(this.div.style.left);
            let dy=e.clientY-parseInt(this.div.style.top);
            let dmousemove;
            window.addEventListener('mousemove',dmousemove=(e)=>
            {
                this.div.style.left=e.clientX-dx+"px";
                this.div.style.top=e.clientY-dy+"px";
            }
            )
            
            this.div.style.top=dy;
            this.div.style.left=dx;
        
            this.div.addEventListener('mouseup',(e)=>{
                window.removeEventListener('mousemove',dmousemove);
            })
        
            
        });

    }

}

class ChronoBis extends Chrono{

    affiche(){
        super.affiche();
        let fermer=document.createElement('img');
        fermer.onmouseover=()=>{
            fermer.style.cursor="pointer";
        }
        fermer.onclick=()=>{
            document.getElementsByTagName('body')[0].removeChild(this.div);
        }
        fermer.setAttribute('src','./img/close.png');
        fermer.style.marginTop="-30%";
        fermer.style.height='20px';
        fermer.style.width='20px';
        fermer.style.marginLeft="90%";
        this.div.appendChild(fermer);

    }


}
 let chrono=new Chrono("200px","120px","#f8b699","#999");
 let chrono1=new Chrono("500px","260px","#e6c811","#d88888");
 let Chrono2=new ChronoBis("1000px","600px","#fff","#18e5f8");
 let Chrono3=new ChronoBis("700px","500px","#897548","#a3c812");
 chrono.affiche();
 chrono1.affiche();
 Chrono2.affiche();
 Chrono3.affiche();
 